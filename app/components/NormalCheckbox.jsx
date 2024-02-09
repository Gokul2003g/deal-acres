import React from "react";

const NormalCheckbox = ({ id, text }) => {
  return (
    <div className="p-2 inline">
      <input
        id={id}
        type="checkbox"
        className="form-checkbox h-6 w-6 text-lightBlue"
      />
      <label for={id} className="text-xl p-4">
        {text}
      </label>
    </div>
  );
};

export default NormalCheckbox;
