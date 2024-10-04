"use client";
import React from "react";

const Button = () => {
  return (
    <button
      className="w-8/12 px-5 py-2 text-white rounded-full my-2 bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      onClick={() => window.open("mailto:henok.gebresenbet@gmail.com")}
    >
      Email Me
    </button>
  );
};

export default Button;
