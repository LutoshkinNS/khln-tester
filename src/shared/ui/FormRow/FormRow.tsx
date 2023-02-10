import s from "./FormRow.module.css";
import clsx from "clsx";
import { ReactNode } from "react";

export interface FormRowProps {
  className?: string;
  children: ReactNode;
}

export const FormRow = (props: FormRowProps) => {
  const { className, children } = props;

  return <div className={clsx(s.formRow, className)}>{children}</div>;
};
