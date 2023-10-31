import React from "react";
import HyperSpaceGraphic from "./assets/Hyperspace.png";

function FirstModal() {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-3xl font-semibold">
        Ready to take the{" "}
        <span className="text-green-600 font-bold">Leap?</span>
      </p>
      <img className="" src={HyperSpaceGraphic}></img>

      <p className="">
        From just £5.99 a month you can monitor all your company finances.{" "}
        <strong>Cancel Anytime</strong>
      </p>
    </div>
  );
}

export default FirstModal;
