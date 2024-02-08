import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-mainBlue p-2 flex flex-row justify-between">
      <a href="/">
        <Image
          src="/logo.png"
          alt="deal acres logo"
          width={100}
          height={100}
          className="pl-8 cursor-pointer"
        />
      </a>
      <Image
        src="/profile.png"
        alt="profile logo"
        width={80}
        height={80}
        className="pr-10 py-2"
      />
    </div>
  );
};

export default Navbar;
