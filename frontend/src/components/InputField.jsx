import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 sm:p-4 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black transition-all duration-200 w-full"
    />
  );
};

export default InputField;
