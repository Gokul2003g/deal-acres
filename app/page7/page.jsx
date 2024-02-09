import React from "react";
import ProgessBar from "../components/ProgessBar";
import FormHeading from "../components/FormHeading";
import FormSubHeading from "../components/FormSubHeading";
import LargeButton from "../components/LargeButton";
import Image from "next/image";
import Input from "../components/Input";
import NormalCheckbox from "../components/NormalCheckbox";
import CheckBox from "../components/CheckBox";

const page = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center">
        <ProgessBar
          status1={true}
          status2={true}
          status3={true}
          status4={true}
          status5={false}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center pt-16 gap-32">
          <div className="border-lightBlue border-8 max-w-2xl rounded-2xl p-8">
            <FormHeading text={"Price Details"} />
            <div class="relative my-2">
              <input
                type="text"
                class="pl-16 p-32 pr-4 py-4 border-4 text-xl placeholder:text-black placeholder:opacity-100  border-lightBlue rounded-lg"
                placeholder="Expected Price"
              />
              <div
                class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <Image
                  src="/rupee.svg"
                  alt="ad"
                  width={40}
                  height={40}
                  className="mr-8 pr-1"
                />
              </div>
            </div>
            <div class="relative my-2">
              <input
                type="text"
                class="pl-16 w-2/4 pr-4 py-4 border-4 text-xl placeholder:text-black border-lightBlue rounded-lg"
                placeholder="Price per Sq.Yd."
              />
              <div
                class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <Image
                  src="/rupee.svg"
                  alt="ad"
                  width={40}
                  height={40}
                  className="mr-8 pr-1"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap py-8 ">
              <NormalCheckbox id="aip" text="All Inclusive Price" />
              <NormalCheckbox id="pn" text="Price Negotiable" />
              <NormalCheckbox id="tax" text="Tax and Govt. Charges Excluded" />
            </div>
            <FormHeading text={"Add Amenties and Features"} />
            <div className="flex flex-row">
              <div className="flex flex-col">
                <NormalCheckbox text="Aerobics Room" id="aerobics" />
                <NormalCheckbox text="Air Conditioning" id="Barbeque Pit" />
                <NormalCheckbox text="Amphitheatre" id="amphitheatre" />
                <NormalCheckbox
                  text="Arts & Craft Studio"
                  id="ArtsCraftStudio"
                />
                <NormalCheckbox text="ATM" id="ATM" />
                <NormalCheckbox text="Badminton Courts" id="BadmintonCourts" />
                <NormalCheckbox text="Banquet Hall" id="BanquetHall" />
                <NormalCheckbox text="Bar & Lounge" id="BarLounge" />
                <NormalCheckbox text="Barbeque Pit" id="BarbequePit" />
                <NormalCheckbox
                  text="Cafeteria/Food Court"
                  id="CafeteriaFoodCourt"
                />
                <NormalCheckbox text="Car Parking" id="CarParking" />
                <NormalCheckbox text="Car Wash Area" id="CarWashArea" />
                <NormalCheckbox text="Club House" id="ClubHouse" />
                <NormalCheckbox text="Coffee Lounge" id="CoffeeLounge" />
                <NormalCheckbox
                  text="Concierge Service"
                  id="ConciergeService"
                />
                <NormalCheckbox text="Conference Room" id="ConferenceRoom" />
                <NormalCheckbox text="Creche Facility" id="CrecheFacility" />
                <NormalCheckbox text="Cricket Pitch" id="CricketPitch" />
                <NormalCheckbox text="Cycling Track" id="CyclingTrack" />
                <NormalCheckbox text="Television" id="Television" />
                <NormalCheckbox
                  text="Earthquake Resistant"
                  id="EarthquakeResistant"
                />
                <NormalCheckbox text="Escalators" id="Escalators" />
                <NormalCheckbox
                  text="Fire Fighting Equipment"
                  id="FireFightingEquipment"
                />
                <NormalCheckbox text="Garden" id="Garden" />
                <NormalCheckbox
                  text="Guest Accommodation"
                  id="GuestAccommodation"
                />
                <NormalCheckbox text="Gym" id="Gym" />
              </div>
              <div className="flex flex-col">
                <NormalCheckbox text="Gym" id="Gym" />
                <NormalCheckbox text="Indoor Games Room" id="IndoorGamesRoom" />
                <NormalCheckbox
                  text="Intercom Facility"
                  id="IntercomFacility"
                />
                <NormalCheckbox text="Internet/WiFi" id="InternetWiFi" />
                <NormalCheckbox text="Jogging Track" id="JoggingTrack" />
                <NormalCheckbox text="Kids Play Area" id="KidsPlayArea" />
                <NormalCheckbox text="Laundry" id="Laundry" />
                <NormalCheckbox text="Lift" id="Lift" />
                <NormalCheckbox
                  text="Maintenance Staff"
                  id="MaintenanceStaff"
                />
                <NormalCheckbox text="Medical Centre" id="MedicalCentre" />
                <NormalCheckbox text="Meditation Area" id="MeditationArea" />
                <NormalCheckbox text="Mini Theatre" id="MiniTheatre" />
                <NormalCheckbox text="Multiplexes" id="Multiplexes" />
                <NormalCheckbox text="Park" id="Park" />
                <NormalCheckbox text="Piped gas" id="PipedGas" />
                <NormalCheckbox text="Power Backup" id="PowerBackup" />
                <NormalCheckbox text="Reserved Parking" id="ReservedParking" />
                <NormalCheckbox text="Retail Shops" id="RetailShops" />
                <NormalCheckbox text="RO Water System" id="ROWaterSystem" />
                <NormalCheckbox text="Sauna/Spa" id="SaunaSpa" />
                <NormalCheckbox text="Security (CCTV)" id="SecurityCCTV" />
                <NormalCheckbox text="Swimming Pool" id="SwimmingPool" />
                <NormalCheckbox text="Tennis Courts" id="TennisCourts" />
                <NormalCheckbox text="Vastu Friendly" id="VastuFriendly" />
                <NormalCheckbox text="Visitor Parking" id="VisitorParking" />
                <NormalCheckbox text="Waste Disposal" id="WasteDisposal" />
              </div>
            </div>
            <div className="py-4 pb-8">
              <p className="cursor-pointer font-bold inline z-50 text-blue-600 text-xl">
                More
                <Image
                  src="/double-arrow-down.svg"
                  width={20}
                  className="inline mx-4"
                  height={20}
                  alt="down arrow"
                />
              </p>
            </div>

            <FormHeading text={"Property Facing"} />
            <div className="flex flex-row flex-wrap gap-0 pb-8">
              <CheckBox text="North" id="north" />
              <CheckBox text="South" id="south" />
              <CheckBox text="East" id="east" />
              <CheckBox text="West" id="west" />
              <CheckBox text="North-East" id="north-east" />
              <CheckBox text="North-West" id="north-west" />
              <CheckBox text="South-East" id="south-east" />
              <CheckBox text="South-West" id="south-west" />
            </div>
            <FormHeading text={"Upload Floor Plan"} />
            <div className="flex items-center justify-center">
              <div className="bg-lightPink flex flex-col items-center w-full justify-center h-60 my-8 p-8 min-w-64 rounded-3lg">
                <Image src="/cloud.png" alt="add" width={100} height={100} />
                <FormSubHeading text={"Drag & Drop Image Here"} />
                <p>Uploaded photo is maximum is of 2MB</p>
                <butotn className="px-4 mt-4 cursor-pointer bg-mainBlue text-xl font-semibold py-2 flex justify-center items-center rounded-lg text-white">
                  Upload Media
                </butotn>
              </div>
            </div>
            <a href="/page8">
              <LargeButton text="Continue" />
            </a>
          </div>

          <div className="flex flex-col">
            <div className="bg-lightBlue flex flex-col items-center justify-center rounded-3xl max-w-lg md:px-24 md:py-28 ">
              <div className="flex flex-row">
                <span className="text-2xl pl-4 ">
                  <ul className="list-disc">
                    <li className="text-3xl">
                      Mention attractive amenities and appealing details of your
                      property.
                    </li>
                    <li className="text-3xl">
                      Add property proximity to transit Shopping, Market Areas,
                      and more..
                    </li>
                  </ul>
                </span>
              </div>
              <Image
                src="/page7.png"
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
        </div>
      </div>
      <div className="flex flex-col max-w-7xl justify-center mx-auto py-16">
        <FormHeading text={"GDPR Agreement *"} />
        <NormalCheckbox
          id="gdpr"
          text='I agree to this website "Deal Acres" storing my submitted information; see more details below.'
        />
        <div className="bg-lightPink text-2xl rounded-lg p-4 mb-16">
          The data based on a search query on Deal Acres has been made available
          for information/advertisement purposes. No warranty is implied for its
          accuracy. Nothing contained herein will be deemed to constitute any
          sort of legal advice, solicitation, marketing, offer of sale, an
          invitation to offer, or an invitation to get by the developer/builder
          or any other entity. You are advised to visit the relevant RERA
          website. And get more information about the builder and property
          directly. Before deciding on the project content displayed on
          dealacres.com. If you have any queries contact Deal Acres at
          contact@dealacres.com.
        </div>
        <LargeButton text="Post Property" />
      </div>
    </div>
  );
};

export default page;
