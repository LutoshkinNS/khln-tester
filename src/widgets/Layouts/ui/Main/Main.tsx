import s from "./Main.module.css";
import clsx from "clsx";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { useTheme } from "features/ThemeSwitcher/lib/useTheme";
import { LogoIcon } from "shared/ui/Logo";
import { ThemeSwitcher } from "features/ThemeSwitcher/ui/ThemeSwitcher";
import { Delimiter } from "shared/ui/Delimiter";

export interface MainProps {
  children: ReactNode;
}

export const Main = (props: MainProps) => {
  const { children } = props;
  const { theme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <header className={s.header}>
        <div className={s.container}>
          <LogoIcon />
          <Navbar />
          <ThemeSwitcher />
        </div>
        {theme === "light" ? <Delimiter /> : null}
      </header>
      <main className={clsx(s.main)}>{children}</main>
      <footer></footer>
    </div>
  );
};
