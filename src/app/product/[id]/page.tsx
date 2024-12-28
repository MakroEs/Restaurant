import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
      {/* Image  */}
      <div className="relative">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        )}
      </div>
      {/* Text */}
      <div className="">
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
