import React from "react";
import ProgessBar from "../components/ProgessBar";
import Image from "next/image";
import LargeButton from "../components/LargeButton";
import FormHeading from "../components/FormHeading";
import FormSubHeading from "../components/FormSubHeading";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProgessBar
        status1={true}
        status2={true}
        status3={true}
        status4={false}
        status5={false}
      />
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 gap-16 w-11/12 lg:gap-32">
        <div className="bg-lightBlue flex flex-col items-center justify-center rounded-3xl max-w-lg md:px-24 md:py-28 py-16 px-12">
          <div className="flex flex-row">
            <span className="text-2xl pl-4 text-center ">
              Click Perfect picture of your property so the renter or buyer see
              the best image of your property.{" "}
            </span>
          </div>
          <Image
            src="/camera.png"
            alt="ad"
            width={250}
            height={250}
            className="py-8"
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
        <div className="border-lightBlue border-8 sm:max-w-2xl w-11/12 sm:w-auto rounded-2xl p-8">
          <FormHeading text={"Add Media"} />
          <div className="bg-lightPink flex flex-col items-center justify-center w-auto h-auto my-8 p-8  rounded-3lg">
            <Image src="/cloud.png" alt="add" width={100} height={100} />
            <FormSubHeading text={"Drag & Drop Image Here"} />
            <p>Uploaded photo is maximum is of 2MB</p>
            <butotn className="px-4 mt-4 cursor-pointer bg-mainBlue text-xl font-semibold py-2 flex justify-center items-center rounded-lg text-white">
              Upload Media
            </butotn>
          </div>
          <a href="/page7">
            <LargeButton text="Continue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
