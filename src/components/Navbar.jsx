import { useState } from "react";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [langMenuVisible, setLangMenuVisible] = useState(false);
  const [langMenuMobileVisible, setLangMenuMobileVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleLangMenu = () => {
    setLangMenuVisible(!langMenuVisible);
  };

  const toggleLangMenuMobile = () => {
    setLangMenuMobileVisible(!langMenuMobileVisible);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-extrabold text-white animate-fade-in-up"
        >
          <img
            src="/src/assets/img/logo.png"
            alt="Logo de Cars4Films"
            className="h-11 md:h-14"
          />
        </a>{" "}
        <div className="hidden md:flex space-x-8 items-center animate-fade-in-up">
          <a href="#flota" className="nav-link transition duration-300">
            Flota
          </a>
          <a href="#tecnicos" className="nav-link transition duration-300">
            Vehículos Técnicos
          </a>
          <a href="#carcare" className="nav-link transition duration-300">
            Car Care
          </a>
          <a href="#driver" className="nav-link transition duration-300">
            Precision Drivers
          </a>
          <a href="#acerca" className="nav-link transition duration-300">
            Acerca de
          </a>
          <a href="#testimonios" className="nav-link transition duration-300">
            Testimonios
          </a>
          <a href="#proyectos" className="nav-link transition duration-300">
            Proyectos
          </a>
          <a href="#contacto" className="nav-link transition duration-300">
            Contacto
          </a>
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="flex items-center space-x-1 text-white hover:text-gray-300 transition duration-200"
            >
              <span>ES</span>
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
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Español
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  English
                </a>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none animate-fade-in-up"
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
        <div className="md:hidden bg-gray-900 animate-fade-in-down">
          <a
            href="#flota"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Flota
          </a>
          <a
            href="#tecnicos"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Vehículos Técnicos
          </a>
          <a
            href="#carcare"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Car Care
          </a>{" "}
          <a
            href="#driver"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Precision Drivers
          </a>
          <a
            href="#acerca"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Acerca de
          </a>
          <a
            href="#testimonios"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Testimonios
          </a>
          <a
            href="#proyectos"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="block py-3 px-4 text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
          >
            Contacto
          </a>
          <div className="relative px-4 py-3">
            <button
              onClick={toggleLangMenuMobile}
              className="flex items-center space-x-1 text-white"
            >
              <span>ES</span>
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
              <div className="mt-2 bg-gray-800 rounded-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Español
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  English
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
