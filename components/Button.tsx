"use client";
import React from "react";

const Button = () => {
  return (
    <button
      className="w-12/12 px-5 py-2 text-white rounded-full my-2 bg-gradient-to-r from-blue-400 to-blue-600 focus:outline-none dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-800"
      onClick={() => window.open("mailto:henok.gebresenbet@gmail.com")}
    >
      Email Me
    </button>
  );
};

export default Button;