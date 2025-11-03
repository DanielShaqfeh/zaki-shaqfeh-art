// src/components/NavLink.jsx
import React from "react";
import UnderlineLink from "./UnderlineLink";

const NavLink = ({ href, to, children }) => {
  return (
    <UnderlineLink to={to} href={href} className="text-gray-400 hover:text-white text-lg aboreto-font" underlineColor="bg-white">
      {children}
    </UnderlineLink>
  );
};

export default NavLink;
