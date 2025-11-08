import React from "react";
import UnderlineLink from "./UnderlineLink";

const NavLink = ({ href, to, children }) => {
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <UnderlineLink
      to={to}
      href={href}
      onClick={handleClick}
      className="text-gray-400 hover:text-white text-lg aboreto-font"
      underlineColor="bg-white"
    >
      {children}
    </UnderlineLink>
  );
};

export default NavLink;
