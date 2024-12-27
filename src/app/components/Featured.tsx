import { featuredProducts } from "../data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full text-red-500 px-4 sm:px-8">
      {/* GRID WRAPPER */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-around p-2 hover:bg-fuchsia-50 transition-all duration-300 border rounded-md"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative w-full h-[20vh] hover:rotate-[5deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center justify-center text-center gap-1">
              <h1 className="text-sm font-bold uppercase">{item.title}</h1>
              <p className="text-xs">{item.desc}</p>
              <span className="text-sm font-bold">${item.price}</span>
              <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
