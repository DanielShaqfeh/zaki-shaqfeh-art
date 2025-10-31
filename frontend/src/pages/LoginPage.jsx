import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden">

      {/* Left side: Background with logo */}
      <div className="w-full md:w-1/2 flex items-center justify-center gradient-background p-6">
        <Logo className="h-30 md:h-50"/>
      </div>

      {/* Right side: White background with form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center aboreto-font">
          Log In
        </h2>
        <p className="mb-6 text-gray-800 text-center text-sm md:text-base aboreto-font">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold border-b-2 border-transparent hover:border-green-500 transition-all duration-300 aboreto-font"
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
