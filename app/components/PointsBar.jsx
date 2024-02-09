import React from "react";
import Points from "./Points";

const PointsBar = ({ idi }) => {
  return (
    <div>
      <Points id={1 + idi} text={1} />
      <Points id={2 + idi} text={2} />
      <Points id={3 + idi} text={3} />
      <Points id={4 + idi} text={4} />
      <Points id={5 + idi} text={5} />
    </div>
  );
};

export default PointsBar;
