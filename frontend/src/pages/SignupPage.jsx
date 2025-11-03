import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignupForm";
import Logo from "../components/Logo";

const SignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden">

      {/* Left side */}
      <div className="w-full md:w-1/2 flex items-center justify-center gradient-background p-6">
        <Logo className="h-30 md:h-50" />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center aboreto-font">
          Sign Up
        </h2>
        <p className="mb-6 text-gray-800 text-center text-sm md:text-base aboreto-font">
          Already have an account?{" "}
          <Link to="/login" className="relative inline-block group">
              <span className="font-semibold text-black aboreto-font">Log In</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </p>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignupPage;
