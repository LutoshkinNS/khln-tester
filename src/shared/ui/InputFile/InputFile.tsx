import s from "./InputFile.module.css";
import clsx from "clsx";
import { FormEvent } from "react";
import UploadIcon from "shared/assets/img/icons/file/upload.svg";

export interface InputFileProps {
  className?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  name?: string;
  id?: string;
}

export const InputFile = (props: InputFileProps) => {
  const { className, id, label, ...other } = props;

  return (
    <div className={clsx(s.InputFile, className)}>
      <label htmlFor={id} className={s.label}>
        <span className={s.innerLabel}>
          {label}
          <UploadIcon />
        </span>
      </label>
      <input className={s.input} type="file" id={id} {...other} />
    </div>
  );
};
