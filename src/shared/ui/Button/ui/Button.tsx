import s from "./Button.module.css";
import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  fullWidth?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    fullWidth = false,
    backgroundColor,
    textColor,
  } = props;

  return (
    <button
      className={clsx(s.button, fullWidth && s.fullWidth, className)}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
};
