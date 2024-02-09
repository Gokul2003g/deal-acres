import React from "react";

const ProgessText = ({ text, completed }) => {
  const status = completed ? "text-mainBlue font-semibold" : "text-black";
  return (
    <span className={`text-xl 2xl:text-xl px-4 text-center ${status}`}>
      {text}
    </span>
  );
};

export default ProgessText;
