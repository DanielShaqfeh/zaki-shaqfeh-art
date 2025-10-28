// src/components/NavLink.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ href, to, children }) => {
  // React Router navigation
  if (to) {
    return (
      <Link
        to={to}
        className="relative inline-block text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group"
      >
        <span>{children}</span>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>
    );
  }

  // Scroll to section on the same page
  return (
    <a
      href={href}
      className="relative inline-block  text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group"
    >
      <span>{children}</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;
