import React, { useState, useEffect } from "react";
import NavLink from "../components/NavLink";
import Logo from "../components/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // new state for mount animation

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate header on first load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const headerBgClass = isScrolled || isOpen ? "bg-black/90 shadow-lg backdrop-blur-sm" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 border-b-1
        ${headerBgClass}
        ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10 text-white aboreto-font">
        {/* Logo */}
        <Logo className="h-14 md:h-20 lg:h-24" />

        {/* Desktop Menu */}
        <ul className="hidden text-lg lg:flex lg:gap-10 gap-4">
          <li><NavLink href="#about">ABOUT</NavLink></li>
          <li><NavLink href="#gallery">GALLERY</NavLink></li>
          <li><NavLink href="#achievements">ACHIEVEMENTS</NavLink></li>
          <li><NavLink href="#contact">CONTACT</NavLink></li>
          <li className="mr-5"><NavLink href="#login" to="/login">LOGIN</NavLink></li>
        </ul>

        {/* Hamburger Button */}
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

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-start space-y-4 py-4 px-5 text-lg text-white">
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
