import s from "./TextArea.module.css";
import clsx from "clsx";
import { FormEvent } from "react";

export interface TextAreaProps {
  className?: string;
  onChange?: (e: FormEvent<HTMLTextAreaElement>) => void;
  value?: string;
  label?: string;
  name?: string;
  id?: string;
  rows?: number;
  cols?: number;
  fullWidth?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
  const { className, label, fullWidth, id, ...other } = props;

  return (
    <div className={clsx(s.TextArea, fullWidth && s.fullWidth, className)}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <textarea className={s.textarea} id={id} {...other} />
    </div>
  );
};
