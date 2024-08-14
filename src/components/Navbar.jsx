import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { languageToggle } from "../store/productSlice";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import navOffer from "../assets/navoffer.png";
import {motion} from 'framer-motion'

const Navbar = () => {
  const dispatch = useDispatch();
  const languageTitle = useSelector((state) => state.product);
  console.log(languageTitle);

  const handleLangToggle = () => {
    dispatch(languageToggle());
    toast.success(
      languageTitle ? "தமிழிற்கு மாற்றப்பட்டது" : "Changed to english",
      {
        position: "top-right",
        autoClose: 1000,
      }
    );
  };

  return (
    <header
      id="top"
      className="shadow-md bg-white p-3 sm:sticky z-20 top-0 relative"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <Link to="/">
          <img
            src={logo}
            className="h-[30px] sm:h-[50px]"
            alt=""
          />
        </Link>
        <div className="absolute sm:relative top-0 right-0">
          <div className="relative bg-logoGreen px-2 py-1 sm:px-3 sm:py-2 rounded-2xl">
            <p className="text-[10px] relative z-50 sm:text-xl  text-white ">
              {languageTitle ? "Launching offer" : "திறப்பு விழா சலுகை"}
            </p>
            <motion.div className=" absolute z-20 h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] top-0 -left-5" initial={{rotateY:0}} animate={{rotateY:360}} transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}>
            <img className="sm:h-[60px]"  src={navOffer} alt="" />
            </motion.div>
          </div>
        </div>
        <ul className="flex gap-4">
          <li className="font-bold text-logoGreen invisible sm:text-lg">
            <Link to="/store">{languageTitle ? "Store" : "கடை"}</Link>
          </li>
          <li className="font-bold text-logoGreen sm:text-lg">
            <Link to="/offer">{languageTitle ? "Drop" : "டிராப்"}</Link>
          </li>
          <li className="cursor-pointer" onClick={handleLangToggle}>
            {languageTitle ? "தமிழ்" : "English"}
          </li>
        </ul>
      </div>
      <div></div>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
