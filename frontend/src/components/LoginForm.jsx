import React from "react";
import InputField from "./InputField";
import FormLink from "./FormLink";
import SocialButton from "./SocialButton";

const GoogleIcon = (
  <svg
    className="w-4 h-4 mr-2" // smaller size and margin for spacing
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M533.5 278.4c0-17.5-1.5-34.4-4.4-50.8H272v95.9h147c-6.4 34.5-25.6 63.7-54.7 83.2v69h88.6c51.8-47.7 81.6-118 81.6-197.3z" fill="#4285F4"/>
    <path d="M272 544.3c73.4 0 134.9-24.2 179.9-65.7l-88.6-69c-24.6 16.5-56 26.3-91.3 26.3-70.2 0-129.7-47.3-151-111.2H31v69.6C75.6 487.6 169.8 544.3 272 544.3z" fill="#34A853"/>
    <path d="M121 320.3c-9.5-28.2-9.5-58.8 0-87l-90-69C7.7 207.5 0 240.1 0 272c0 31.9 7.7 64.5 31 87l90-69z" fill="#FBBC05"/>
    <path d="M272 107.7c37.6-.6 71.1 12.9 97.4 37.3l73-72.9C406.7 24.8 345.2 0 272 0 169.8 0 75.6 56.7 31 142.4l90 69C142.3 155 201.8 107.7 272 107.7z" fill="#EA4335"/>
  </svg>
);

const LoginForm = () => {
  return (
    <div className="w-3/4 max-w-md flex flex-col items-center">
      <form className="flex flex-col space-y-4 w-full">
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />

        <div className="text-right">
          <FormLink to="/forgot-password">Forgot Password?</FormLink>
        </div>

        <button
          type="submit"
          className="p-3 bg-green-600 hover:bg-green-700 rounded text-white transition-all duration-300 ease-in-out"
        >
          Log In
        </button>
      </form>

      {/* Flex container for paragraph and Google button */}
      <div className="mt-4 w-full flex items-center ">
        <p className="text-gray-500">or continue with</p>
        <SocialButton
          icon={GoogleIcon}
          text="Google"
          className="flex items-center px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
        />
      </div>
    </div>
  );
};

export default LoginForm;
