import React from "react";
import ProgessBar from "../components/ProgessBar";
import Image from "next/image";
import LargeButton from "../components/LargeButton";
import Input from "../components/Input";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProgessBar
        status1={true}
        status2={false}
        status3={false}
        status4={false}
        status5={false}
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-32">
        <div className="bg-lightBlue flex flex-col items-center justify-center rounded-3xl max-w-md pt-16 px-8 md:py-36 md:my-8">
          <div className="flex flex-row">
            <span className="text-2xl pl-4 text-center ">
              An Accurate Location is the most essential as it helps you to
              connect the perfect buyer or tenant
            </span>
          </div>
          <Image
            src="/map.png"
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
        <div className="border-lightBlue border-8 max-w-2xl rounded-2xl p-4">
          <h1 className="text-2xl pr-20 font-semibold">
            Your Property Location?{" "}
          </h1>
          <div className="flex flex-col gap-4 py-4 pb-8">
            <Input placeholder={"State"} />
            <Input placeholder={"City"} />
            <Input placeholder={"Name of Project / Property"} />
            <Input placeholder={"Area / Sector"} />
            <Input placeholder={"House No. (Optional)"} />
          </div>
          <a href="/page5">
            <LargeButton text="Continue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
