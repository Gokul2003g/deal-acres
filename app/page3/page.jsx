import Image from "next/image";
import React from "react";
import CheckBox from "../components/CheckBox";
import LargeButton from "../components/LargeButton";

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-32">
      <div className="border-lightBlue border-8 max-w-xl rounded-2xl p-4 py-24">
        <h1 className="text-3xl font-semibold ">
          To Continue Please let us what you are?
        </h1>
        <div className="flex flex-row py-12">
          <CheckBox text="An Owner" id={"ownder"} />
          <CheckBox text="An Agent" id={"agent"} />
          <CheckBox text="A Builder" id={"builder"} />
        </div>
        <h1 className="text-2xl py-4 pb-16">
          Please choose correctly, if you want to change in the future, it done
          through profile section
        </h1>
        <a href="/page4">
          <LargeButton text="Continue" />
        </a>
      </div>
      <div className="bg-lightBlue flex flex-col items-center justify-center rounded-3xl max-w-md pt-16 px-8 md:py-36 md:my-8">
        <div className="flex flex-row">
          <span className="text-2xl pl-4 text-center ">
            This information creates a transparency and build trust with
            buyers/tenants
          </span>
        </div>
        <Image
          src="/page3.png"
          alt="ad"
          width={250}
          height={250}
          className="py-16"
        />
        <h1 className="font-semibold text-2xl">Need Help?</h1>
        <p className="text-2xl font-normal">You Can Email Us</p>
        <a
          href="mailto:contact@dealacres.com"
          className="text-2xl link text-blue-600"
        >
          contact@dealacres.com
        </a>
      </div>
    </div>
  );
};

export default page;
