"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const plants = true;
  const [productDetail, setProductDetail] = useState(product);
  return (
    <div className="w-full">
      {/* Product Image */}
      <div className="w-full xl:w-[404px] h-full xl:h-[316px] relative">
        <Image
          className="w-full h-full object-contain"
          src={productDetail.image}
          alt={productDetail.title}
          width={175}
          height={136.881}
        />
        <div className="w-fit text-[10px] md:text-[13px] p-1 md:px-[14px] md:py-[13px] leading-4 tracking-[0.56px] rounded-[40px] absolute top-[10px] left-[15px] md:top-[24px] md:left-[30px] bg-white text-[#5B5B5B] uppercase flex justify-center items-center">
          <p>in stock</p>
        </div>

        {plants && (
          <div className="hidden w-fit xl:flex flex-col gap-[12px] absolute top-[21.18px] right-[29px]">
            <div className="w-[52px] h-[52px] p-[10px] rounded-2xl bg-[#FFFFFF]">
              <Image
                src="/veterinary.png"
                alt="veterinary"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[52px] h-[52px] p-[10px] rounded-2xl bg-[#FFFFFF]">
              <Image src="/noLight.png" alt="noLight" width={32} height={32} />
            </div>
            <div className="w-[52px] h-[52px] p-[10px] rounded-2xl bg-[#FFFFFF]">
              <Image
                src="/brightness.png"
                alt="brightness"
                width={32}
                height={32}
              />
            </div>
          </div>
        )}
      </div>

      {/* Product description */}
      <div className="mt-[15px] md:mt-[39.19px] px-[11px] md:px-0">
        <div className="w-full flex flex-col gap-[8px] md:gap-[14px]">
          <p className="text-base md:text-[21px] leading-[25.2px] font-normal">
            {productDetail.title}
          </p>
          <p className="xl:pr-[26px] text-xs md:text-[17px] leading-[14px] md:leading-[30px] text-[#898989] font-normal">
            {productDetail.description}
          </p>
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
            <p className="text-xs md:text-[17px] leading-5 text-[#0E0E0E] font-medium">
              $ {productDetail.price} USD
            </p>
            <div className="mt-[11.92px] md:mt-0 w-[63px] text-[8.195px] md:text-xl py-[5px] md:px-[33px] font-medium border-[0.51px] rounded-[29.2px] border-[#9F9F9F] flex justify-center items-center">
              <p>Add</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
    </div>
  );
};

export default ProductCard;
