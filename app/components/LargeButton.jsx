import React from "react";

const LargeButton = ({ text }) => {
  return (
    <div className="w-full cursor-pointer bg-mainBlue text-2xl font-semibold py-4 flex justify-center items-center rounded-lg text-white">
      {text}
    </div>
  );
};

export default LargeButton;
