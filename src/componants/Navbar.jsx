import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "../themes/ThemeProvider.jsx";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-600">Jugesh Kumar</h1>
      <ul className="flex gap-6 text-gray-700">
        <li>
          <a href="#about" className="hover:text-indigo-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#Qualification" className="hover:text-indigo-600">
            Qualification
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      >
        {theme === "light" ? (
          <Moon size={20} className="text-gray-800" />
        ) : (
          <Sun size={20} className="text-yellow-400" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
