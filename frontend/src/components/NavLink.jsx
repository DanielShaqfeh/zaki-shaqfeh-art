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
    </a>
  );
};

export default NavLink;
