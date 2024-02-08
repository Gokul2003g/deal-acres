import React from "react";
import Image from "next/image";

const Accordian = ({ text }) => {
  return (
    <div className="py-2">
      <Image
        src="/caret-right.svg"
        alt="right arrow"
        className="inline pr-1 mb-2"
        width={15}
        height={15}
      />
      <h1 className="text-2xl pl-4 leading-normal inline font-semibold">
        {text}
      </h1>
      <hr className="opacity-100" />
    </div>
  );
};

export default Accordian;
