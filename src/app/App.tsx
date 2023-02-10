import { Suspense } from "react";
import "./styles/index.css";
import { useTheme } from "../features/ThemeSwitcher/lib/useTheme";
import clsx from "clsx";
import { RoutesElement } from "pages/Routing";
import { MainLayout } from "widgets/Layouts";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
        <RoutesElement />
      </Suspense>
    </MainLayout>
  );
};
