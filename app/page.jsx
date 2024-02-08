import Image from "next/image";
import CheckBox from "./components/CheckBox";
import FormHeading from "./components/FormHeading";
import FormSubHeading from "./components/FormSubHeading";
import LargeButton from "./components/LargeButton";
import SecondaryCheckBox from "./components/SecondaryCheckBox";
import GuideBlocks from "./components/GuideBlocks";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center h-full md:flex-row md:px-36 md:py-8 py-4 gap-x-16">
        <div className="border-lightBlue border-8 max-w-xl border-r-0 border-b-2 from-[#D4E5FB] to-[#FAEFFE] rounded-2xl p-4 mb-8">
          <FormHeading text={"Post Your property for free"} />
          <span className="block font-normal">Add Basic Detail</span>
          <FormSubHeading text={"Looking For......."} />
          <div className="block">
            <CheckBox id={"sell"} text={"Sell"} />
            <CheckBox id={"rent"} text={"Rent"} />
          </div>
          <FormSubHeading text={"Property Type"} />
          <div className="block">
            <CheckBox id={"residential"} text={"Residential"} />
            <CheckBox id={"commercial"} text={"Commercial"} />
          </div>
          <SecondaryCheckBox id={"Flat/Apartment"} text={"Flat/Apartment"} />
          <SecondaryCheckBox id={"villa"} text={"Villa"} />
          <SecondaryCheckBox id={"plot"} text={"Plot"} />
          <SecondaryCheckBox
            id={"Indpendent House"}
            text={"Independent House"}
          />
          <SecondaryCheckBox id={"Builder Floor"} text={"Builder Floor"} />
          <FormSubHeading text={"Add Your Contact Detail"} />
          <input
            type="inputbox"
            placeholder="Phone Number"
            className="border-lightBlue w-full rounded-lg border-4 block p-4 mb-8"
          />
          <div className="py-2">
            <span>Are you Registered User?</span>
            <span className="text-mainBlue cursor-pointer px-2">Login</span>
          </div>
          <LargeButton text={"Start Now"} />
        </div>
        <div className="bg-lightBlue rounded-3xl max-w-lg pt-16 px-8 md:py-8">
          <div className="flex md:flex-row flex-col py-4 pb-8">
            <span className="text-3xl font-bold">
              Post property Ad to sell or rent online for
            </span>
            <span className="text-6xl font-extrabold italic">FREE</span>
          </div>
          <ul className="list-disc pb-16 px-8">
            <li className="text-2xl">Advertise for FREE</li>
            <li className="text-2xl">Sell 10 X faster</li>
            <li className="text-2xl">Connect with genuine buyer</li>
            <li className="text-2xl">Get unlimited enquiries</li>
          </ul>
          <Image
            src="/ad-image-home-screen.png"
            alt="vector image"
            width={500}
            height={500}
            className="pb-6"
          />
        </div>
      </div>
      <div className="py-8 flex justify-center items-center flex-col">
        <span className="text-4xl font-extrabold pb-16 px-8">
          Step by Step Guide for Free Property Listing
        </span>
        <div className="flex flex-col md:flex-row gap-16 px-8">
          <GuideBlocks
            img={"/guide1.png"}
            heading={"Step 1: Add Property Detail"}
            description={
              "Start filling the form with a few basic details like type of property, Area, Location, etc."
            }
          />
          <GuideBlocks
            img={"/guide2.png"}
            heading={"Step 2: Add Images & Videos"}
            description={
              "Upload your property images or videos either from your Mobile or Desktop."
            }
          />
          <GuideBlocks
            img={"/guide3.png"}
            heading={"Step 3: Add Pricing"}
            description={
              "Upload the expected price of your property, and now it is ready to post."
            }
          />
        </div>
        <div className="flex flex-col items-center pt-16 ">
          <Image
            src="/sofas-living-room-half.png"
            alt="living room"
            width={1920}
            height={500}
          />
          <div className="flex flex-col justify-center border-4 sm:-mt-64 border-darkblue items-center max-w-7xl bg-white rounded-lg border-b-8">
            <h1 className="text-5xl font-bold pt-8">Why Choose Deal Acres?</h1>
            <p className="text-2xl pt-8 px-8 py-2">
              Deal Acres is the only place where you can sell your property
              easily and quickly. If you are looking for one of the top free
              property listing sites in India, Deal Acres came first. When it
              comes to the free property listing it becomes difficult to pick
              one that will actually help you rent or sell your residential or
              commercial property, then Deal Acres is one of the friendliest and
              fastest-growing real estate website in India today, with some of
              the simple and easy facilities for uploading your property.
              <br />
              <br />
              Property listing is the best way to reach out to potential
              customers who need to buy a home or home for rent. Homebuyers or
              tenants can shortlist the best among the pool of the real estate
              listing. <br />
              <br /> So, a builder, an owner, or an agent does need not spend
              hours selling the house online or trying a hand at the online
              rental. Listing property is a process of a few minutes and you are
              done. Deal Acres has traffic and thousands of prospective
              homebuyers and tenants who visit the website every day. Sell your
              property quickly with Deal Acres.
            </p>
          </div>
        </div>
        <button className="mt-8 cursor-pointer bg-mainBlue text-2xl font-bold py-4 px-8 flex justify-center items-center rounded-lg text-white">
          List Your Property for FREE NOW!
        </button>
      </div>
    </div>
  );
}
