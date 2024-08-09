import React, { useEffect, useState } from "react";
import { soapOffer } from "../details";
import offerslide from "../assets/offerslide.png";
import drop from "../assets/drop.png"

const Offer = () => {
 
  return (
    <div className="h-[100vh]">
      <img className="" src={drop} alt="" />
    <h1 className="text-3xl text-center font-bold">The Drop Is Coming Soon</h1>
     <p className="text-center my-7 text-xl">The Website is still under development. It's just a prototype launched to test run. The more is about to come</p>
    </div>
  );
};

export default Offer;
