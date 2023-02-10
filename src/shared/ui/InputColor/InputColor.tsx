import s from "./InputColor.module.css";
import clsx from "clsx";
import { FormEvent } from "react";

export interface InputColorProps {
  className?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  name?: string;
  id?: string;
}

export const InputColor = (props: InputColorProps) => {
  const { className, id, label, value, ...other } = props;

  return (
    <div className={clsx(s.InputColor, className)}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        className={s.input}
        type="color"
        accept="image/*"
        id={id}
        value={value}
        {...other}
      />
    </div>
  );
};
