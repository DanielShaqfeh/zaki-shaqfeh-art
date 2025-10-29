import React from "react";

const SocialButton = ({ icon, text }) => {
  return (
    <button className="flex items-center justify-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto">
      {icon}
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
};

export default SocialButton;
