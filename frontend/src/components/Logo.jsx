import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <h1 className="flex-shrink-0">
      <img
        src={logo}
        alt="Logo"
        className={`${className} w-auto`}
      />
    </h1>
  );
};

export default Logo;
