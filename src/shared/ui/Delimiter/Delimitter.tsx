import s from "./Delimiter.module.css";
import clsx from "clsx";

export interface DelimiterProps {
  className?: string;
}

export const Delimiter = (props: DelimiterProps) => {
  const { className } = props;

  return <div className={clsx(s.Delimiter, className)}></div>;
};
