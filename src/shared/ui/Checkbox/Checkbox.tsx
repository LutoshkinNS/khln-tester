import s from "./Checkbox.module.css";
import clsx from "clsx";
import { FormEvent } from "react";

export interface CheckboxProps {
  className?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
  name?: string;
  id?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, label, ...other } = props;

  return (
    <div className={clsx(s.Checkbox, className)}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input type="checkbox" name="textUp" id={id} {...other} />
    </div>
  );
};
