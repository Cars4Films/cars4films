import { useState, useEffect } from "react";
import { themes } from "./themeUtils";
import { ThemeContext } from "./themeContext";

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or use dark theme as default
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === themes.light ? themes.light : themes.dark;
  });

  // Apply the theme by updating CSS variables
  useEffect(() => {
    const root = document.documentElement;

    if (theme === themes.dark) {
      // Dark theme colors
      root.style.setProperty("--color-bg-main", "#000000");
      root.style.setProperty("--color-bg-secondary", "#111827");
      root.style.setProperty("--color-bg-tertiary", "#1f2937");
      root.style.setProperty("--color-bg-component", "#1f2937");
      root.style.setProperty("--color-text-primary", "#ffffff");
      root.style.setProperty("--color-text-secondary", "#e5e7eb");
      root.style.setProperty("--color-text-muted", "#9ca3af");
    } else {
      // Light theme colors
      root.style.setProperty("--color-bg-main", "#f9fafb");
      root.style.setProperty("--color-bg-secondary", "#f3f4f6");
      root.style.setProperty("--color-bg-tertiary", "#e5e7eb");
      root.style.setProperty("--color-bg-component", "#ffffff");
      root.style.setProperty("--color-text-primary", "#111827");
      root.style.setProperty("--color-text-secondary", "#4b5563");
      root.style.setProperty("--color-text-muted", "#6b7280");
    }

    // Store theme preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
