import s from "./Navbar.module.css";
import clsx from "clsx";
import { NavLink } from "../NavLink/NavLink";

export interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={clsx(s.Navbar, className)}>
      <NavLink to="/push">Пуш уведомления</NavLink>
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/personal-offer">Персональные предложения</NavLink>
    </div>
  );
};
