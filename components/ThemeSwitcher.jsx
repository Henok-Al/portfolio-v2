"use client";
import { useTheme } from "next-themes";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8/12 px-5 py-2 text-white rounded-full my-2 bg-gradient-to-r from-blue-400 to-blue-600"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
        {/* Use icons instead of text */}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
