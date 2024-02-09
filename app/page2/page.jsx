import Image from "next/image";
import React from "react";
import OTPBox from "../components/OTPBox";
import LargeButton from "../components/LargeButton";
import LargeButton2 from "../components/LargeButton2";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
      <div className="bg-lightPink flex flex-col items-center justify-center rounded-3xl max-w-md pt-16 px-8 md:py-36 md:my-8">
        <div className="flex flex-row">
          <Image
            className="inline-block"
            src="/thumbs-up.svg"
            alt="thumbs up"
            width={30}
            height={30}
          />
          <span className="text-2xl pl-4 inline">
            Your Phone number gives access to your account.
          </span>
        </div>
        <Image
          src="/otp-image.png"
          alt="otp"
          width={190}
          height={190}
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
      <div className="border-lightBlue border-8 max-w-xl rounded-2xl p-4 mb-8">
        <h1 className="text-3xl font-semibold ">Welcome back,</h1>
        <p className="text-3xl">Your number is registered with us.</p>
        <p className="text-3xl pb-4">Please login to continue</p>
        <p className="inline pr-4">+91-XXXXXXXXXX</p>
        <Image
          src="/edit.svg"
          alt="edit"
          width={20}
          height={20}
          className="inline cursor-pointer"
        />
        <h1 className="text-3xl py-4">Enter Your OTP</h1>
        <OTPBox />
        <OTPBox />
        <OTPBox />
        <OTPBox />
        <p className="text-blue-600 pb-8">Resend OTP</p>
        <a href="/page3">
          <LargeButton text="Verify & Login" />
        </a>
        <LargeButton2 text="Login via - E - mail" />
      </div>
    </div>
  );
};

export default page;
