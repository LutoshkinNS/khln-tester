import s from "./TextInput.module.css";
import clsx from "clsx";
import { FormEvent } from "react";

export interface TextInputProps {
  className?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  name?: string;
  id?: string;
  fullWidth?: boolean;
}

export const TextInput = (props: TextInputProps) => {
  const { className, onChange, value, label, name, id, fullWidth } = props;

  return (
    <div className={clsx(s.TextInput, fullWidth && s.fullWidth, className)}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        className={s.input}
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
