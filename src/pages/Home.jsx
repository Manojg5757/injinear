import React from "react";
import grocery from "../assets/grocery.png";
import fruits from "../assets/fruits.png";
import sprite from "../assets/sprite.png";
import stationary from "../assets/stationary.png";
import rice from "../assets/rice.png";
import { GiShoppingCart } from "react-icons/gi";
import sliderDetails, { essentialOffers, masalaOffer, soapOffer } from "../details";
import { useSelector } from "react-redux";
import videoad from '../assets/videoad.mp4'
import { WhatsappShareButton,WhatsappIcon, FacebookShareButton, FacebookIcon, InstapaperShareButton, InstapaperIcon } from 'react-share'


const Home = () => {
  const toggle = useSelector((state) => state.product);
  const shareUrl = "https://mystartup.onrender.com/"
  
  return (
    <div>

      {/* video */}
      <div className="h-[180px] sm:hidden mt-2">
        <video className="h-full w-full object-cover" src={videoad} autoPlay muted loop/>
      </div>
      

      <div className="max-w-6xl mx-auto p-3  ">
        <div className="flex flex-col gap-2 items-center w-full">
          <h1>{toggle ? "Share" : "பகிருங்கள்"}</h1>
        <div className="flex gap-4">
        <WhatsappShareButton url={shareUrl}>
             <WhatsappIcon size={40} className="rounded-full" />
        </WhatsappShareButton>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} className="rounded-full" />
        </FacebookShareButton>
        </div>
        </div>
         <h1 className="text-center mb-4 text-lg font-semibold text-blue-600">{toggle ? "Best Deals for You" : "சிறந்த சலுகைகள்"}</h1>
         <h1 className="my-4 font-semibold">{toggle ? "Kitchen Essentials" : "சமையல் அறை"}</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          
          {essentialOffers.map((product) => {
            return (
              <div key={product.id} className="shadow-lg rounded-lg overflow-hidden sm:p-3">
                <img
                  className="h-[180px] sm:h-[200px] sm:rounded-lg"
                  src={product.image}
                  alt=""
                />
                <div className="flex flex-col gap-2  py-2">
                  <p className="font-semibold">
                    {toggle ? product.title : product.titleTamil}
                  </p>
                  
                  <div>
                    {product.offerPrice ? (
                      <div className="flex gap-2 items-center">
                        {/* <p className="text-sm">
                          mrp:
                          <span className=" line-through">₹{product.mrp}</span>
                        </p> */}
                        <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                          {product.weight}{product.weightType === 'gram' ? (toggle ? "gram" : "கிராம்") : product.weightType === 'kg' ? (toggle ? "Kg" :"கிலோ" ) : (toggle ? "Piece" : "ஒன்று")} ₹{product.offerPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                        {product.weight}
                        {toggle ? `${product.weightType} at just` : (product.weightType === 'gram' ? "கிராம்" : "கிலோ")} ₹
                        {product.mrp}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="my-7 font-semibold">{toggle ? "Masala Section" : "மசாலா வகைகள்"}</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          
          {masalaOffer.map((product) => {
            return (
              <div key={product.id} className="shadow-lg rounded-lg overflow-hidden sm:p-3">
                <img
                  className="h-[180px] sm:h-[200px] sm:rounded-lg"
                  src={product.image}
                  alt=""
                />
                <div className="flex flex-col gap-2  py-2">
                  <p className="font-semibold text-[13px]">
                    {toggle ? product.title : product.titleTamil}
                  </p>
                  
                  <div>
                    {product.offerPrice ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm">
                          mrp:
                          <span className=" line-through">₹{product.mrp}</span>
                        </p>
                        <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                          {product.weight} {product.weightType === 'gram' ? (toggle ? "gram" : "கிராம்") : product.weightType === 'kg' ? (toggle ? "Kg" :"கிலோ" ) : (toggle ? "Piece" : "ஒன்று")} ₹{product.offerPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                        {product.weight}
                        {toggle ? `${product.weightType} at just` : (product.weightType === 'gram' ? "கிராம்" : "கிலோ")} ₹
                        {product.mrp}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <h1 className="my-4 font-semibold">{toggle ? "Soap and Detergent" : "சோப்பு மற்றும் டிடர்ஜென்ட்" }</h1>
        <div className="flex flex-wrap gap-2  justify-center">
          {soapOffer.map((product) => {
            return (
              <div key={product.id} className="shadow-lg rounded-lg overflow-hidden sm:p-3">
                <img
                  className="h-[180px] sm:h-[200px] sm:rounded-lg"
                  src={product.image}
                  alt=""
                />
                <div className="flex flex-col gap-2  py-2">
                  <p className="font-semibold">
                    {toggle ? product.title : product.titleTamil}
                  </p>
                  
                  <div>
                    {product.offerPrice ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm">
                          mrp:
                          <span className=" line-through">₹{product.mrp}</span>
                        </p>
                        <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                          {product.weight ? (toggle ? product.weightType : (product.weightType === 'gram' ? "கிராம்" :"கிலோ")):"விலை"} ₹{product.offerPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="bg-green-400 rounded-2xl text-[12px] w-fit px-3 py-1">
                        {product.weight}
                        {toggle ? "gram at just" : "கிராம் வெறும்"} ₹
                        {product.mrp}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
