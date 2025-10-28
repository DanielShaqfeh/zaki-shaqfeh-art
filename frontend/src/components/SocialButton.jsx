import React from "react";

const SocialButton = ({ icon, text }) => {
  return (
    <button className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-2 mx-3 hover:bg-gray-100 transition-all duration-200 w-50% justify-center">
      {icon}
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
};

export default SocialButton;
