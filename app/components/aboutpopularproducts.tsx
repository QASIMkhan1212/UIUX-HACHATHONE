import Image from "next/image";
import React from "react";
import yeah from "../photos/yeah.png"
import Photo from "../photos/Photo.png"
import Parent from "../photos/Parent.png"




const AboutPopularProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src={yeah}
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src={Photo}
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src={Parent}
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPopularProduct;