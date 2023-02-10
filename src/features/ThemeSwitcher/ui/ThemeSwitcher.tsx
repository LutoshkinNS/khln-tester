import s from "./ThemeSwitcher.module.css";
import clsx from "clsx";
import Sun from "shared/assets/img/icons/theme/sun.svg";
import Moon from "shared/assets/img/icons/theme/moon.svg";
import { useTheme } from "../lib/useTheme";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx(s.ThemeSwitcher, className)}>
      <div onClick={toggleTheme} className={s.img}>
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};
