import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-8  border-lightBlue h-80 w-2/6">
        <Image src="/tick-circle.svg" alt="ad" width={250} height={250} />
      </div>
      <div>sdfasdflk</div>
    </div>
  );
};

export default page;
