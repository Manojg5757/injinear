import React from "react";
import { products } from "../details";
import { useSelector } from "react-redux";

const Store = () => {
  const toggle = useSelector((state) => state.product);
  console.log(toggle);
  return (
    <div className="max-w-6xl mx-auto relative ">
      <div>
        <h1 className="text-center my-7 text-lg font-semibold underline text-blue-400 sm:text-3xl">
          {toggle ? "Welcome to the Store" : "கடையை சுற்றிப் பாருங்கள்"}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => {
            return (
              <div key={product.id} className="shadow-lg rounded-lg sm:p-3">
                <img
                  className="h-[180px] sm:h-[200px] rounded-lg"
                  src={product.image}
                  alt=""
                />

                <div className="mt-3 max-w-[200px]">
                  <p className="font-semibold text-md">
                    {toggle ? product.title : product.titleTamil}
                  </p>
                  <p>
                    {toggle ? "Weight" : "எடை"}:{" "}
                    {product.weight ? product.weight : ""}
                    {product.weightType === "kg"
                      ? toggle
                        ? "kg"
                        : "கிலோ"
                      : product.weightType === "gram"
                      ? toggle
                        ? "gram"
                        : "கிராம்"
                      : product.weightType === "Litre"
                      ? toggle
                        ? "litre"
                        : "லிட்டர்"
                      : "Piece"}
                  </p>
                  <p>
                    {toggle ? "MRP" : "விலை"}: ₹{product.mrp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
