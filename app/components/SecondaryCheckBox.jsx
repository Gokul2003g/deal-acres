import React from "react";

const SecondaryCheckBox = ({ id, text }) => {
  return (
    <div className="pr-2 py-1 inline-flex">
      <input
        type="checkbox"
        id={id}
        value={id}
        className="peer hidden"
        required=""
      />
      <label
        for={id}
        className="inline-flex items-center justify-between border-lightBlue cursor-pointer  border-2 text-sm rounded-lg py-1 px-4 peer-checked:border-mainBlue"
      >
        {text}
      </label>
    </div>
  );
};

export default SecondaryCheckBox;
