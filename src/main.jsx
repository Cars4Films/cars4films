import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n"; // Import the i18n configuration
import "./index.css";
import App from "@/App.jsx";
import { ThemeProvider } from "@/contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
