"use client";

import Image from "next/image";
import React, { useState } from "react";

const HydroponicCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-[373px] h-[315px] md:w-full md:h-[308.96px] xl:w-[373px] xl:h-[315px] px-8 pt-[52px] pb-[75px] rounded-3xl bg-primaryCream hover:bg-primaryMain hover:text-white ease-in-out duration-200"
    >
      <Image
        className="object-contain md:w-[39.233px] md:h-[39.22px] hover:text-[#BABABA]"
        src={data.img}
        alt={data.title}
        width={40}
        height={40}
      />
      <div className="mt-[39px] max-w-[309px] md:w-[303.075px] xl:w-[309px]">
        <p
          className={
            isHover
              ? "text-2xl md:text-[23.54px] xl:text-2xl leading-[28.8px] md:leading-[28.248px] xl:leading-[28.8px] -tracking-[0.6px] md:-tracking-[0.588px] xl:-tracking-[0.6px] font-[600] ease-in-out duration-200 text-white"
              : "text-2xl md:text-[23.54px] xl:text-2xl leading-[28.8px] md:leading-[28.248px] xl:leading-[28.8px] -tracking-[0.6px] md:-tracking-[0.588px] xl:-tracking-[0.6px] font-[600] ease-in-out duration-200 text-primaryGrayscale"
          }
        >
          {data.title}
        </p>
        <p
          className={
            isHover
              ? "mt-2 text-sm md:text-[13.732px] xl:text-sm leading-6 md:leading-[23.54px] xl:leading-6 font-normal ease-in-out duration-200 text-white"
              : "mt-2 text-sm md:text-[13.732px] xl:text-sm leading-6 md:leading-[23.54px] xl:leading-6 font-normal ease-in-out duration-200 text-secondaryGrayscale"
          }
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default HydroponicCard;
