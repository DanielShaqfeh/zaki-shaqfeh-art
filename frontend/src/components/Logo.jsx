import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ className = "h-15 md:h-30" }) => {
  return (
    <h1 className="flex-shrink-0 mx-auto">
      <img
        src={logo}
        alt="Logo"
        className={`${className} w-auto transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]`}
      />
    </h1>
  );
};

export default Logo;
