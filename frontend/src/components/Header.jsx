import React, { useState } from "react";
import NavLink from "../components/NavLink";
import Logo from "../components/Logo";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <header className="text-white shadow-md aboreto-font border-none fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        
        {/* Logo */}
        <Logo className="h-14 md:h-20 lg:h-24" />

        {/* menu */}
        <ul className="hidden  text-lg lg:gap-10 gap-4 lg:flex">
          <li><NavLink href="#about">ABOUT</NavLink></li>
          <li><NavLink href="#gallery">GALLERY</NavLink></li>
          <li><NavLink href="#achievements">ACHIEVEMENTS</NavLink></li>
          <li><NavLink href="#contact">CONTACT</NavLink></li>
          <li className="mr-5"><NavLink href="#login" to="/login">LOGIN</NavLink></li>
        </ul>
        

        {/* Hamburger menu */}
        <button className="lg:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-start space-y-4 py-4 px-5 text-lg">
          <li><NavLink href="#home">HOME</NavLink></li>
          <li><NavLink href="#about">ABOUT</NavLink></li>
          <li><NavLink href="#gallery">GALLERY</NavLink></li>
          <li><NavLink href="#achievements">ACHIEVEMENTS</NavLink></li>
          <li><NavLink href="#contact">CONTACT</NavLink></li>
          <li><NavLink href="#login" to="/login">LOGIN</NavLink></li>
        </ul>
      </div>

        

    </header>
  );
};

export default Header;
