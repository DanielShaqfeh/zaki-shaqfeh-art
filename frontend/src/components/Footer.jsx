// src/components/Footer.jsx
import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 text-gray-400 py-12 sans-serif-font">

      <div className="container mx-auto text-center px-6 md:px-10 flex flex-col items-center gap-4">
        
        {/* Designed and Developed */}
        <p className="text-sm md:text-base">
          Designed & Developed with{" "}
          <FaHeart className="inline text-red-500 mx-1" /> by{" "}
          <span className="text-white font-semibold">Daniel Shaqfeh</span>.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/DanielShaqfeh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-shaqfeh-8021a8253"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/danie1_ss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4">
          All rights reserved &copy; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
