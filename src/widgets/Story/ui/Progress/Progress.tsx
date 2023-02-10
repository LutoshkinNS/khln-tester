import s from "./Progress.module.css";
import clsx from "clsx";

export interface ProgressProps {
  className?: string;
}

export const Progress = (props: ProgressProps) => {
  const { className } = props;

  return (
    <div className={clsx(s.Progress, className)}>
      <div className={s.inner}>
        <div className={s.part}></div>
        <div className={s.part}></div>
      </div>
    </div>
  );
};
