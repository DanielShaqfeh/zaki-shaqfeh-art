// src/components/UnderlineLink.jsx
import React from "react";
import { Link } from "react-router-dom";

const UnderlineLink = ({ to, href, children, className = "", underlineColor = "bg-green-500" }) => {
  const baseClasses = `relative inline-block group ${className}`;

  const underlineClasses = `absolute left-0 -bottom-0.5 h-[2px] w-0 ${underlineColor} transition-all duration-300 ease-in-out group-hover:w-full`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        <span>{children}</span>
        <span className={underlineClasses}></span>
      </Link>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      <span>{children}</span>
      <span className={underlineClasses}></span>
    </a>
  );
};

export default UnderlineLink;
