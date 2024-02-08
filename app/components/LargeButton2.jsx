import React from "react";

const LargeButton2 = ({ text }) => {
  return (
    <div className="w-full border-4 border-mainBlue cursor-pointer bg-white text-2xl font-semibold py-4 my-4 flex justify-center items-center rounded-lg text-mainBlue">
      {text}
    </div>
  );
};

export default LargeButton2;
