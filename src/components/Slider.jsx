import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import slider1 from '../assets/slider/slider1.png'
import slider2 from '../assets/slider/slider2.png'
import slider3 from '../assets/slider/slider3.png'
import { useSelector } from 'react-redux';


const Slider = () => {
    const toggle = useSelector((state) => state.product);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("next");
    const slider = [
      {
        id: 1,
        image: slider1,
     
      },
      {
        id: 2,
        image: slider2,
      
      },
      {
        id: 3,
        image: slider3,
  
      },
    ];
  
    const nextSlide = () => {
      setDirection("next");
      setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setDirection("prev");
      setCurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
    };
  console.log(currentSlide)
    useEffect(() => {
      const interval = setInterval(() => {
        setDirection("next");
        setCurrentSlide((prev) => {
          if (prev === slider.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative">
    <div className="absolute hidden sm:flex z-10 w-full h-full  justify-between items-center">
      <FaArrowLeft
        onClick={prevSlide}
        className="bg-white rounded-lg sm:text-xl cursor-pointer"
      />
      <FaArrowRight
        onClick={nextSlide}
        className="bg-white rounded-lg sm:text-xl cursor-pointer "
      />
    </div>

    <div className="w-full h-full overflow-hidden">
      <div
        className={`flex transition transform duration-500 ${
          direction === "next"
            ? "transform translate-x-full"
            : "transform -translate-x-full"
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {slider.map((item, index) => {
          return <img key={index} className="w-full  object-cover sm:h-auto" src={toggle ? item.image : (item.imageTamil ? item.imageTamil : item.image)} alt="" />;
        })}
      </div>
    </div>
  </div>
  )
}

export default Slider