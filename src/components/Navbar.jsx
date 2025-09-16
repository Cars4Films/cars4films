import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { logo } from "@/assets";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, themes, toggleTheme } = useTheme();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [langMenuVisible, setLangMenuVisible] = useState(false);
  const [langMenuMobileVisible, setLangMenuMobileVisible] = useState(false);
  const currentLanguage = i18n.language;

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleLangMenu = () => {
    setLangMenuVisible(!langMenuVisible);
  };

  const toggleLangMenuMobile = () => {
    setLangMenuMobileVisible(!langMenuMobileVisible);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLangMenuVisible(false);
    setLangMenuMobileVisible(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theme-main bg-opacity-75 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-extrabold text-theme-primary animate-fade-in-up"
        >
          <img src={logo} alt="Logo de Cars4Films" className="h-11 md:h-14" />
        </a>{" "}
        <div className="hidden md:flex space-x-8 items-center animate-fade-in-up">
          <a href="#flota" className="nav-link transition duration-300">
            {t("navbar.flota")}
          </a>
          <a href="#tecnicos" className="nav-link transition duration-300">
            {t("navbar.tecnicos")}
          </a>
          <a href="#carcare" className="nav-link transition duration-300">
            {t("navbar.carcare")}
          </a>
          <a href="#driver" className="nav-link transition duration-300">
            {t("navbar.driver")}
          </a>
          <a href="#acerca" className="nav-link transition duration-300">
            {t("navbar.acerca")}
          </a>
          <a href="#testimonios" className="nav-link transition duration-300">
            {t("navbar.testimonios")}
          </a>
          <a href="#proyectos" className="nav-link transition duration-300">
            {t("navbar.proyectos")}
          </a>
          <a href="#contacto" className="nav-link transition duration-300">
            {t("navbar.contacto")}
          </a>

          {/* Theme Toggle Button - Desktop */}
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 transition duration-300 flex items-center"
              aria-label={
                theme === themes.dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === themes.dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            {/* Tooltip */}
            <div className="absolute hidden group-hover:block -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-theme-tertiary text-theme-primary text-xs rounded whitespace-nowrap">
              {theme === themes.dark
                ? "Switch to light mode"
                : "Switch to dark mode"}
            </div>
          </div>

          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="flex items-center space-x-1 text-theme-primary hover:text-gray-300 transition duration-200"
            >
              <span>{currentLanguage === "es" ? "ES" : "EN"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langMenuVisible && (
              <div className="absolute right-0 mt-2 w-24 bg-theme-tertiary rounded-lg shadow-xl z-10">
                <button
                  onClick={() => changeLanguage("es")}
                  className="nav-link block w-full text-left px-4 py-2"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="nav-link block w-full text-left px-4 py-2"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-theme-primary focus:outline-none animate-fade-in-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {mobileMenuVisible && (
        <div className="md:hidden bg-theme-main animate-fade-in-down">
          {" "}
          <a
            href="#flota"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.flota")}
          </a>{" "}
          <a
            href="#tecnicos"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.tecnicos")}
          </a>{" "}
          <a
            href="#carcare"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.carcare")}
          </a>{" "}
          <a
            href="#driver"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.driver")}
          </a>{" "}
          <a
            href="#acerca"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.acerca")}
          </a>
          <a
            href="#testimonios"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.testimonios")}
          </a>{" "}
          <a
            href="#proyectos"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.proyectos")}
          </a>
          <a
            href="#contacto"
            className="block py-3 px-4 text-theme-primary hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            {t("navbar.contacto")}
          </a>
          {/* Theme Toggle Button - Mobile */}
          <div className="px-4 py-3">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-theme-primary"
              aria-label={
                theme === themes.dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === themes.dark ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <div className="relative px-4 py-3">
            <button
              onClick={toggleLangMenuMobile}
              className="flex items-center space-x-1 text-theme-primary"
            >
              <span>{currentLanguage === "es" ? "ES" : "EN"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langMenuMobileVisible && (
              <div className="mt-2 bg-theme-tertiary rounded-lg">
                <button
                  onClick={() => changeLanguage("es")}
                  className="block w-full text-left px-4 py-2 text-theme-primary hover:bg-gray-700"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 text-theme-primary hover:bg-gray-700"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
