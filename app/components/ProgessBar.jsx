import React from "react";
import ProgessText from "./ProgessText";
import ProgressLine from "./ProgressLine";

const ProgessBar = ({ status1, status2, status3, status4, status5 }) => {
  return (
    <div className="flex flex-col mx-8 lg:flex-row bg-lightBlue p-2 pb-4 lg:p-2 mt-16 rounded-xl items-center justify-center">
      <ProgessText text="Basic Details" completed={status1} />
      <ProgressLine />
      <ProgessText text="Location Details" completed={status2} />
      <ProgressLine />
      <ProgessText text="Property Profile" completed={status3} />
      <ProgressLine />
      <ProgessText text="Photos" completed={status4} />
      <ProgressLine />
      <ProgessText text="Pricing & Others" completed={status5} />
    </div>
  );
};

export default ProgessBar;
