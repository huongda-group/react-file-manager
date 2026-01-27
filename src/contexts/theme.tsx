import { createContext, useContext, PropsWithChildren } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

interface ThemeProviderProps extends PropsWithChildren {
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
