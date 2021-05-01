import React from "react";
import spinImg from "./spin.gif";

function Spinner() {
  return (
    <>
      <img src={spinImg} alt="loading..." className="w-3/12 m-auto block" />
    </>
  );
}

export default Spinner;
