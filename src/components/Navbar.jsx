import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

import logo from "../images/logo2.png";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode}  = useContext(ThemeContext)  

  return (
    <nav className="fixed z-20 h-30 w-full top-0 bg-white/80 dark:bg-gray-900/80  backdrop-blur shadow">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-14 py-4">
        <img
          src={logo}
          alt="Victor"
          className="w-24 md:w-32 lg:w-40 xl:w-24 aspect-square rounded-full object-cover"
        />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white">
          efoosagTech
        </h1>
        
        {/* DESKTOP / TABLET MENU */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {["home", "about", "projects", "contact"].map((sec) => (
            <Link
              key={sec}
              to={sec}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer capitalize text-gray-700 dark:text-gray-200 
                         hover:text-blue-500 text-base lg:text-lg xl:text-xl"
            >
              {sec}
            </Link>
          ))}

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-100 text-xl lg:text-2xl border-none"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl dark:text-white"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden h-screen backdrop-blur opacity-90 z-40 bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col gap-4 p-6">
            {["home", "about", "projects", "contact"].map((sec) => (
              <Link
                key={sec}
                to={sec}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="text-lg capitalize text-gray-700 dark:text-gray-200 
                           hover:text-blue-500"
              >
                {sec}
              </Link>
            ))}

            {/* DARK MODE IN MOBILE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-100 text-xl"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
          
        </div>
      )}
    </nav>
  );
}
