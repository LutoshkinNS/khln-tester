import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "features/ThemeSwitcher/lib/ThemeContext";
import { ReactNode, useState } from "react";

export interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = { theme: theme, setTheme: setTheme };

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
