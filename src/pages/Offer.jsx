import React, { useEffect, useState } from "react";
import { soapOffer } from "../details";
import offerslide from "../assets/offerslide.png";
import drop from "../assets/drop.png"
import chicken from '../assets/chicken.jpg'

const Offer = () => {
 
  return (
    <div className="">
      <img className="" src={drop} alt="" />
    <h1 className="text-3xl text-center font-bold">The Drop Is Coming Soon</h1>
      <div className="max-w-6xl mx-auto flex justify-center mt-4 ">
         <div className="flex  flex-col shadow-md w-fit rounded-lg overflow-hidden">
          <img className="h-[300px] w-[300px]" src={chicken} alt="" />
          <p className="my-4 font-semibold text-lg">Fresh cut Chicken</p>
         </div>
      </div>
    </div>
  );
};

export default Offer;
