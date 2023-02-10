import s from "./NavLink.module.css";
import clsx from "clsx";
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

export interface NavLinkProps extends RouterNavLinkProps {
  className?: string;
  children: string;
}

export const NavLink = (props: NavLinkProps) => {
  const { className, to, children } = props;

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        clsx(s.NavLink, isActive ? s.active : undefined, className)
      }
    >
      {children}
    </RouterNavLink>
  );
};
