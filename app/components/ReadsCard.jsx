import Image from "next/image";
import React from "react";

const ReadsCard = ({ img, heading, desc, date }) => {
  return (
    <div className="flex flex-col max-w-xs border-2 border-opacity-5 rounded-lg">
      <Image src={img} alt={heading} width={410} height={155} />
      <div className="p-4">
        <h1 className="text-xl py-2 font-semibold leading-none">{heading}</h1>
        <p className="font-light pb-8">{desc}</p>
        <div className="flex flex-row text-sm font-extralight justify-between">
          {date}
          <Image src="/share.svg" alt="share icon" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default ReadsCard;
