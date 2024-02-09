import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="border-8 rounded-md flex flex-col sm:py-16 py-4 sm:px-44 w-11/12 sm:w-auto px-24 mb-16 items-center relative justify-center border-lightBlue">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-lightBlue right-0"
          alt="cross"
          width={35}
          height={35}
        />
        <Image src="/tick-circle.svg" alt="success" width={250} height={250} />
        <h1 className="italic text-3xl lg:text-5xl font-extrabold">
          SUBMITTED
        </h1>
      </div>
      <div className="border-8 rounded-md flex flex-col sm:py-16 py-4 sm:px-44 w-11/12 sm:w-auto px-2 mb-16 items-center relative justify-center border-lightBlue">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-lightBlue right-0"
          alt="cross"
          width={35}
          height={35}
        />

        <h1 className="text-2xl lg:text-4xl text-center  font-extrabold">
          How was your experience?
        </h1>
        <div className="flex flex-col lg:flex-row py-8 gap-1 sm:gap-8">
          <Image
            src="/smiley1.png"
            className="cursor-pointer"
            alt="angry"
            height={100}
            width={100}
          />
          <Image
            className="cursor-pointer"
            src="/smiley2.png"
            alt="sad"
            height={100}
            width={100}
          />
          <Image
            className="cursor-pointer"
            src="/smiley3.png"
            alt="neutral"
            height={100}
            width={100}
          />
          <Image
            className="cursor-pointer"
            src="/smiley4.png"
            alt="happy"
            height={100}
            width={100}
          />
          <Image
            className="cursor-pointer"
            src="/smiley5.png"
            alt="excited"
            height={100}
            width={100}
          />
        </div>
        <button className="cursor-pointer bg-mainBlue text-3xl sm:text-5xl font-bold py-2 px-4 rounded-2xl text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
