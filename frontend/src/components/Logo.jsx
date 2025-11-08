import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <h1 className="flex-shrink-0">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className={`${className} w-auto`}
        />
      </Link>
    </h1>
  );
};

export default Logo;
