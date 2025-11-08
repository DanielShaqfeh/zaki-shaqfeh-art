// src/components/ButtonWithUnderline.jsx
import React from "react";
import UnderlineLink from "./UnderlineLink.jsx";
const ButtonWithUnderline = ({ onClick, children, className = "", underlineColor = "bg-white" }) => {
  const baseClasses = `relative inline-block group ${className}`;

  const underlineClasses = `absolute left-0 -bottom-0.5 h-[2px] w-0 ${underlineColor} transition-all duration-300 ease-in-out group-hover:w-full`;

  return (
    <button onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      <span className={underlineClasses}></span>
    </button>
  );
};

export default ButtonWithUnderline;
