import Image from "next/image";
import React from "react";

const GuideBlocks = ({ img, heading, description }) => {
  return (
    <div className="flex flex-col max-w-md">
      <Image
        src={img}
        alt="vector image"
        className="pb-2"
        width={150}
        height={150}
      />
      <h2 className="text-2xl font-bold py-2">{heading}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default GuideBlocks;
