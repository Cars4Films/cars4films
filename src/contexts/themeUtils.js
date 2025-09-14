import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Theme options
export const themes = {
  dark: "dark",
  light: "light",
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);