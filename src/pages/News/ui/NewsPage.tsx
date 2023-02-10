import s from "./NewsPage.module.css";
import clsx from "clsx";
import { FormRow } from "shared/ui/FormRow";
import { Story } from "widgets/Story";
import { FormEvent, useEffect, useState } from "react";
import { TextInput } from "shared/ui/TextInput";
import { TextArea } from "shared/ui/TextArea";
import { InputColor } from "shared/ui/InputColor";
import { InputFile } from "shared/ui/InputFile";
import { Checkbox } from "shared/ui/Checkbox";

export interface NewsPageProps {
  className?: string;
}

interface formData {
  description: string;
  title: string;
  buttonText: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  textUp: boolean;
  img: string;
}

const initialValue: formData = {
  description:
    "Краткое и емкое описание новости. Если текст будет слишком длинный, то он может наехать на фон. Выровнять по верхнему краю можно, установив флаг 'Текст вверху'",
  title: "Заголовок новости",
  buttonText: "Текст кнопки",
  textColor: "",
  buttonColor: "",
  buttonTextColor: "",
  textUp: false,
  img: "",
};

const sessionFormData = sessionStorage.getItem("formData");
const sessionInitialValue = sessionFormData
  ? JSON.parse(sessionFormData)
  : null;

export const NewsPage = (props: NewsPageProps) => {
  const {} = props;

  const [formData, setFormData] = useState<formData>(
    sessionInitialValue ? sessionInitialValue : initialValue
  );
  const [file, setFile] = useState("");

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    if ("checked" in target && target.type === "checkbox") {
      const { name, checked } = target;
      setFormData({ ...formData, [name]: checked });
    } else if ("value" in target) {
      const { name, value } = target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleChangeImg = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.files &&
      setFile(URL.createObjectURL(e.currentTarget.files[0]));
  };

  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <section className={clsx(s.newsPage)}>
      <div className={s.storiesBlock}>
        <form className={s.form}>
          <FormRow>
            <InputFile
              label="Выберите изображение"
              name="image"
              id="image"
              onChange={handleChangeImg}
            />
          </FormRow>
          <FormRow>
            <TextInput
              fullWidth={true}
              label="Заголовок"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <TextArea
              label="Описание новости"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              cols={33}
              fullWidth={true}
            />
            <InputColor
              className={s.notCollapse}
              label="Текст"
              name="textColor"
              id="textColor"
              value={formData.textColor}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <TextInput
              fullWidth={true}
              label="Текст в кнопке"
              name="buttonText"
              id="buttonText"
              value={formData.buttonText}
              onChange={handleChange}
            />
            <InputColor
              className={s.notCollapse}
              label="Фон кнопки"
              name="buttonColor"
              id="buttonColor"
              value={formData.buttonColor}
              onChange={handleChange}
            />
            <InputColor
              className={s.notCollapse}
              label="Текст кнопки"
              name="buttonTextColor"
              id="buttonTextColor"
              value={formData.buttonTextColor}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Checkbox
              label="Текст вверху"
              id="textUp"
              name="textUp"
              checked={formData.textUp}
              onChange={handleChange}
            />
          </FormRow>
        </form>
      </div>
      <div className={s.formBlock}>
        <Story
          img={file}
          title={formData.title}
          text={formData.description}
          btnText={formData.buttonText}
          textColor={formData.textColor}
          btnTextColor={formData.buttonTextColor}
          btnColor={formData.buttonColor}
          textUp={formData.textUp}
        />
      </div>
    </section>
  );
};
