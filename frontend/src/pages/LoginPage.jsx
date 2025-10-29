import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full aboreto-font">
      {/* Left side: Background with logo */}
      <div className="w-full md:w-1/2 flex items-center justify-center gradient-background p-6">
        <img src={logo} alt="Logo" className="h-32 md:h-40 w-auto" />
      </div>

      {/* Right side: White background with form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
          Log In
        </h2>
        <p className="mb-6 text-gray-800 text-center text-sm md:text-base">
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
