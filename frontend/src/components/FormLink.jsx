import React from "react";
import { Link } from "react-router-dom";

const FormLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-black border-b-2 border-transparent hover:border-green-500 transition-all duration-300 text-sm"
    >
      {children} 
    </Link>
  );
};

export default FormLink;
