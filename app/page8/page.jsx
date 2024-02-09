import Image from "next/image";
import React from "react";
import LargeButton from "../components/LargeButton";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="border-8 rounded-md flex flex-col p-16 mb-16 items-center relative justify-center border-lightBlue h-auto w-2/6">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-lightBlue right-0"
          alt="cross"
          width={35}
          height={35}
        />
        <Image src="/tick-circle.svg" alt="success" width={250} height={250} />
        <h1 className="italic text-5xl font-extrabold">SUBMITTED</h1>
      </div>
      <div className="border-8 rounded-md flex flex-col p-16 mb-16 items-center relative justify-center border-lightBlue h-auto w-3/6">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-lightBlue right-0"
          alt="cross"
          width={35}
          height={35}
        />

        <h1 className="text-4xl font-extrabold">How was your experience?</h1>
        <div className="flex flex-col sm:flex-row p-8 gap-4">
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
        <div className="w-1/4">
          <button className="w-full cursor-pointer bg-mainBlue text-5xl font-bold py-2 flex justify-center items-center rounded-2xl text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
