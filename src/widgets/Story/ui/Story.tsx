import s from "./Story.module.css";
import clsx from "clsx";
import { Button } from "shared/ui/Button";
import CloseIcon from "shared/assets/img/icons/modal/close.svg";
import { Progress } from "./Progress/Progress";

export interface StoryProps {
  className?: string;
  img: string;
  textUp: boolean;
  text: string;
  title: string;
  btnText: string;
  textColor: string;
  btnTextColor: string;
  btnColor: string;
}

export const Story = (props: StoryProps) => {
  const {
    className,
    img,
    textUp,
    text,
    title,
    btnText,
    textColor,
    btnTextColor,
    btnColor,
  } = props;
  const textJustification: "spaceBetween" | "flexEnd" = textUp
    ? "spaceBetween"
    : "flexEnd";

  return (
    <div
      style={img ? { backgroundImage: `url('${img}')` } : {}}
      className={s.story}
    >
      <Progress />
      <CloseIcon className={s.closeIcon} />
      <div className={clsx(s.contentWrapper, s[textJustification])}>
        <div>
          <div
            className={clsx("textSecondary header-1", s.title)}
            style={{ color: textColor }}
          >
            {title}
          </div>
          <div
            className={clsx("textSecondary", s.text)}
            style={{ color: textColor }}
          >
            {text}
          </div>
        </div>
        <div className={clsx(s.buttonWrapper)}>
          <Button
            fullWidth={true}
            backgroundColor={btnColor}
            textColor={btnTextColor}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};
