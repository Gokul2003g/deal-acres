import React from "react";
import ProgessBar from "../components/ProgessBar";
import Image from "next/image";
import Input from "../components/Input";
import LargeButton from "../components/LargeButton";
import FormHeading from "../components/FormHeading";
import FormSubHeading from "../components/FormSubHeading";
import PointsBar from "../components/PointsBar";
import FilledCheckBox from "../components/FilledCheckBox";
import SmallPoints from "../components/SmallPoints";
import SecondaryCheckBox from "../components/SecondaryCheckBox";

const page = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center">
        <ProgessBar
          status1={true}
          status2={true}
          status3={false}
          status4={false}
          status5={false}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center pt-16 gap-32">
          <div className="border-lightBlue border-8 max-w-2xl rounded-2xl p-8">
            <FormHeading text={"Now, tell us about your property"} />
            <FormSubHeading text={"Describe Your Property"} />
            <p className="text-xl">
              Write Several Thing which can describe your propety appropriately.
            </p>
            <div className="flex flex-col gap-4 py-4 pb-8">
              <input className="border-4 p-4 py-36 w-full placeholder:text-black border-lightBlue rounded-lg" />
            </div>
            <FormSubHeading text={"Add Room Details"} />
            <PointsBar idi={"a"} />
            <FormSubHeading text={"Number of Bathrooms"} />
            <PointsBar idi={"b"} />
            <FormSubHeading text={"Number of Balconies"} />
            <PointsBar idi={"c"} />
            <FormSubHeading text={"Other Rooms"} />
            <div className="pb-4">
              <FilledCheckBox text={"Pooja Room"} id={"poojaroom"} />
              <FilledCheckBox text={"Study Room"} id={"studyroom"} />
              <FilledCheckBox text={"Servent Room"} id={"serventroom"} />
              <FilledCheckBox text={"Store Room"} id={"storeroom"} />
            </div>
            <FormSubHeading text={"Furnished"} />
            <div className="pb-4">
              <FilledCheckBox text={"Fully Furnished"} id={"fullyfurnished"} />
              <FilledCheckBox text={"Unfurnished"} id={"unfurnished"} />
            </div>
            <div className="flex flex-row items-center">
              <FormSubHeading text={"Reverse Parking"} />
              <span className="text-sm pl-4 pt-2">(Optional)</span>
            </div>
            <div>
              <p className="text-xl inline pr-8">Covered Parking</p>
              <SmallPoints id={1} text={1} />
              <SmallPoints id={2} text={2} />
            </div>
            <div>
              <p className="text-xl inline pr-16">Open Parking</p>
              <SmallPoints id={11} text={1} />
              <SmallPoints id={22} text={2} />
            </div>

            <FormSubHeading text={"Flooring Details"} />
            <p className="text-xl">Total no. of floors</p>
            <Input placeholder={"Total Floors"} />
            <Input placeholder={"Property on Floor"} />
            <FormSubHeading text={"Availibity Status"} />
            <div className="flex pb-4 flex-row">
              <FilledCheckBox id={"readytomove"} text={"Ready To Move"} />
              <FilledCheckBox
                id={"under-contruction"}
                text={"Under Construction"}
              />
            </div>
            <FormSubHeading text={"Age of Property"} />
            <div className="flex flex-row pb-4">
              <SecondaryCheckBox id={121} text={"0-1 Years"} />
              <SecondaryCheckBox id={221} text={"1-5 Years"} />
              <SecondaryCheckBox id={331} text={"5-10 Years"} />
              <SecondaryCheckBox id={441} text={"10+ Years"} />
            </div>
            <a href="/page6">
              <LargeButton text="Continue" />
            </a>
          </div>
          <div className="flex flex-col">
            <div className="bg-lightBlue flex flex-col items-center justify-center rounded-3xl max-w-lg md:px-24 md:py-28 ">
              <div className="flex flex-row">
                <span className="text-2xl pl-4 text-center ">
                  Describe your property in brief so the buyer or renter can
                  easily get to know how your property is what makes your
                  property different from others.{" "}
                </span>
              </div>
              <Image
                src="/home.png"
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
            <div className="bg-lightBlue p-8 px-24 mt-8 rounded-3xl flex flex-col items-center justify-center">
              <Image src="/smiley.png" alt="smiley" width={250} height={250} />
              <h1 className="text-3xl">You Are Almost There</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
