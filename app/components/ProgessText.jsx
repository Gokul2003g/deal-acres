import React from "react";

const ProgessText = ({ text, completed }) => {
  const status = completed ? "text-mainBlue font-semibold" : "text-black";
  return <span className={`text-lg lg:text-2xl px-4 ${status}`}>{text}</span>;
};

export default ProgessText;
