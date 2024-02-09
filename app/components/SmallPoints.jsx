import React from "react";

const SmallPoints = ({ id, text }) => {
  return (
    <div className="pr-4 py-2 inline-flex">
      <input
        type="checkbox"
        id={id}
        value={id}
        className="peer hidden"
        required=""
      />
      <label
        for={id}
        className="inline-flex items-center text-2xl justify-between border-mainBlue cursor-pointer border-2 rounded-full w-8 h-8 peer-checked:bg-mainBlue peer-checked:text-white"
      >
        <span className="text-center mx-auto">{text}</span>
      </label>
    </div>
  );
};

export default SmallPoints;
