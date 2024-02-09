import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="border-4 p-4 mb-4 w-full placeholder:text-black border-lightBlue rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default Input;
