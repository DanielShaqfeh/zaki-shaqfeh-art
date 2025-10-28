import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full aboreto-font">
      {/* Left side: Background with logo */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-black via-[#0b1a11] to-green-800">
        <img src={logo} alt="Logo" className="h-40 w-auto" />
      </div>

      {/* Right side: White background with form */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Log In</h2>
        <p className="mb-6 text-gray-800">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold border-b-2 border-transparent hover:border-green-500 transition-all duration-300"
          >
            Sign Up
          </Link>
        </p>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
