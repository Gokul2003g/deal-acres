import React from "react";

const CheckBox = ({ id, text }) => {
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
        className="inline-flex items-center text-lg justify-between border-lightBlue cursor-pointer  border-4 rounded-lg py-1 px-8 peer-checked:border-mainBlue"
      >
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
