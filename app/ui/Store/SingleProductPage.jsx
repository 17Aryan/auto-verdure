"use client";

import { grobox } from "@/app/constant/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Testimonial from "../Testimonial";
import { longDescription, specifications } from "@/app/constant/data";
import Accordion_Product from "./Accordion_products";
import Accordion_Specs from "./Accordion_specifications";


const SingleProductPage = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  // const [bars, setBars] = useState("");

  return (
    <div className="w-full px-[18px] sm:px-[38px] xl:px-16 bg-[#FFFCF8]">
      <div className="pt-[13px] sm:pt-[29px] xl:pt-[96.5px] pb-[221px] flex flex-col justify-center items-center">
        {/* Navigation */}
        <div className="w-full text-[17px] leading-[30px] text-[#5B5B5B] font-normal flex justify-center items-center sm:justify-normal sm:items-start">
          <p className="flex gap-[19px]">
            <Link href="/">
              <span>Home</span>
            </Link>{" "}
            / <span>Pots</span> /{" "}
            <Link href="/store/zenpot">
              <span className="text-[#000]">Zenpot</span>
            </Link>
          </p>
        </div>

        {/* Product Details */}
        <div className="mt-[27.79px] sm:mt-[17.3px] xl:mt-[51.5px] xl:max-w-[1312px] w-full flex flex-col sm:flex-row sm:gap-x-[30.5px] xl:gap-x-16 justify-center items-center sm:items-start">
          {/* Product Image */}
          <div className="w-full sm:flex sm:flex-col sm:w-[50%] xl:w-[624px]">
            <div className="w-full h-full relative ">
              <Image
                className="w-[624px] h-[550px] object-contain aspect-auto rounded-[18.5px] border-[0.58px]"
                src="/aboutUs2.jpg"
                alt="grobox"
                width={624}
                height={550}
              />
              <div className="px-[12.15px] py-[5.79px] xl:px-[21px] xl:py-[10px] text-[8.099px] xl:text-sm border-[0.58px] rounded-[18.5px] absolute bottom-[19.22px] right-[18.17px] xl:bottom-[29.5px] xl:right-[31px] text-[#000] font-normal border-[#000]">
                <p>View in 3D</p>
              </div>
            </div>

            <div className="mt-[20px] w-full grid grid-cols-4 xl:grid-cols-2 gap-x-[6px] xl:gap-x-4 xl:gap-y-[24px] justify-center items-center">
              <div className="w-full h-[76px] xl:h-[264px]">
                <Image
                  className="object-contain w-full h-full"
                  src="/grobox.png"
                  alt="grobox.png"
                  width={86}
                  height={76}
                />
              </div>
              <div className="w-full h-[76px] xl:h-[264px]">
                <Image
                  className="object-contain w-full h-full"
                  src="/grobox.png"
                  alt="grobox.png"
                  width={86}
                  height={76}
                />
              </div>
              <div className="w-full h-[76px] xl:h-[264px]">
                <Image
                  className="object-contain w-full h-full"
                  src="/grobox.png"
                  alt="grobox.png"
                  width={86}
                  height={76}
                />
              </div>
              <div className="w-full h-[76px] xl:h-[264px]">
                <Image
                  className="object-contain w-full h-full"
                  src="/grobox.png"
                  alt="grobox.png"
                  width={86}
                  height={76}
                />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-[31px] sm:flex sm:flex-col sm:w-[50%] xl:w-[624px] sm:mt-0 w-full">
            {/* Product Title */}
            <div >
              <p className="text-stone-950 text-[51px] font-normal font-['Inter'] leading-[64px] ">Grobox</p>
            </div>

            {/* Product short description */}
            <div >
              <p className="mb-[21.5px] text-zinc-600 text-[17px] font-normal font-['Inter'] leading-[30px]">
                zenpot nurtures your plant while adding a touch of serenity to
                your living
              </p>
            </div> 

            {/* Product Price */}
            <div >
              <p className="text-stone-950 text-[27px] font-medium font-['Inter'] leading-10">₹ 389.99 INR</p>
            </div>

            {/* Product Size, Color, Finish */}
            <div className="mt-[22px] w-full flex flex-col gap-8 sm:gap-6">
              {/* Product Size */}
              <div>
                <p className="text-sm font-normal">Size</p>

                <div className="mt-[12px] w-[200px] flex gap-4">
                  <button
                    onClick={() => setSize("XS")}
                    className={
                      size === "XS"
                        ? "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-100 cursor-pointer text-[#fff] uppercase font-semibold flex justify-center items-center"
                        : "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-20 hover:bg-opacity-100 cursor-pointer text-[#000000] hover:text-[#fff] uppercase font-semibold flex justify-center items-center"
                    }
                  >
                    <p>xs</p>
                  </button>
                  <button
                    onClick={() => setSize("S")}
                    className={
                      size === "S"
                        ? "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-100 cursor-pointer text-[#fff] uppercase font-semibold flex justify-center items-center"
                        : "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-20 hover:bg-opacity-100 cursor-pointer text-[#000000] hover:text-[#fff] uppercase font-semibold flex justify-center items-center"
                    }
                  >
                    <p>s</p>
                  </button>
                  <button
                    onClick={() => setSize("M")}
                    className={
                      size === "M"
                        ? "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-100 cursor-pointer text-[#fff] uppercase font-semibold flex justify-center items-center"
                        : "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-20 hover:bg-opacity-100 cursor-pointer text-[#000000] hover:text-[#fff] uppercase font-semibold flex justify-center items-center"
                    }
                  >
                    <p>m</p>
                  </button>
                  <button
                    onClick={() => setSize("L")}
                    className={
                      size === "L"
                        ? "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-100 cursor-pointer text-[#fff] uppercase font-semibold flex justify-center items-center"
                        : "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-20 hover:bg-opacity-100 cursor-pointer text-[#000000] hover:text-[#fff] uppercase font-semibold flex justify-center items-center"
                    }
                  >
                    <p>l</p>
                  </button>
                  <button
                    onClick={() => setSize("XL")}
                    className={
                      size === "XL"
                        ? "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-100 cursor-pointer text-[#fff] uppercase font-semibold flex justify-center items-center"
                        : "w-[80px] h-[30px] text-[13px] rounded-[5px] bg-[#9A5CF5] bg-opacity-20 hover:bg-opacity-100 cursor-pointer text-[#000000] hover:text-[#fff] uppercase font-semibold flex justify-center items-center"
                    }
                  >
                    <p>xl</p>
                  </button>
                </div>
              </div>

              {/* Product Color */}
              <div>
                <p className="text-sm font-normal">Color</p>

                <div className="mt-[12px] w-[306px] flex gap-4">
                  <button 
                    onClick={() => setColor("White")}
                    className={
                      color === "White" 
                      ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#FFFFFF] cursor-pointer rounded-corner"
                      :"w-[30px] h-[30px] text-[13px] rounded-full bg-[#FFFFFF] cursor-pointer rounded-black-corner"
                    } />
                  <button onClick={() => setColor("Cream")}
                    className={
                      color === "Cream" 
                      ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#FFFDD0] cursor-pointer rounded-corner"
                      :"w-[30px] h-[30px] text-[13px] rounded-full bg-[#FFFDD0] cursor-pointer rounded-black-corner"
                    } /> 

                  {/* className="w-[30px] h-[30px] text-[13px] rounded-full bg-[#FFFFFF] cursor-pointer rounded-croner" /> */}
                  {/* <button onClick={() => setColor("Purple")}
                  
                  className={
                    color === "Purple"
                    ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#856CFF] cursor-pointer rounded-black-corner"
                    :"w-[30px] h-[30px] text-[13px] rounded-full bg-[#856CFF] cursor-pointer rounded-corner"} /> */}
                  <button onClick={() => setColor("Dark Grey")} 
                    className={
                    color === "Dark Grey"
                    ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#A9A9A9] cursor-pointer rounded-corner"
                    : "w-[30px] h-[30px] text-[13px] rounded-full bg-[#A9A9A9] cursor-pointer rounded-black-corner"
                    } />
                  <button onClick={() => setColor("Light Grey")} 
                    className={
                    color === "Light Grey"
                    ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#D3D3D3] cursor-pointer rounded-corner"
                    : "w-[30px] h-[30px] text-[13px] rounded-full bg-[#D3D3D3] cursor-pointer rounded-black-corner"
                    } />
                  <button onClick={() => setColor("Black")} 
                    className={
                    color === "Black"
                    ?"w-[30px] h-[30px] text-[13px] rounded-full bg-[#000000] cursor-pointer rounded-corner"
                    : "w-[30px] h-[30px] text-[13px] rounded-full bg-[#000000] cursor-pointer rounded-black-corner"
                    } />
                  {/* <div className="w-[30px] h-[30px] text-[13px] rounded-full bg-[#B88E2F] cursor-pointer rounded-corner" /> */}
                </div>
              </div>

              {/* Product Finish */}
              <div>
                <p className="text-sm font-normal">Style</p>

                <div className="mt-[12px] w-fit flex gap-4">
                  <div className="w-full flex ">
                    <div className="h-[30px] text-[13px] rounded-full  cursor-pointer" />
                    <button onClick={() => setStyle("Matt")} 
                    className={
                      style === "Matt"
                      ?"text-[17px] leading-[30px] font-semibold"
                      :"text-[17px] leading-[30px] font-normal"}>
                      Matt
                    </button>
                  </div>
                  <div className="w-full flex gap-4">
                    <div className="w-[30px] h-[30px] text-[13px] rounded-full  cursor-pointer" />
                    <button onClick={() => setStyle("Gloss")} 
                    className={
                      style === "Gloss"
                      ?"text-[17px] leading-[30px] font-semibold"
                      :"text-[17px] leading-[30px] font-normal"}>
                      Gloss
                    </button>
                  </div>
                  <div className="w-full flex gap-4">
                    <div className="w-[30px] h-[30px] text-[13px] rounded-full  cursor-pointer" />
                    <button onClick={() => setStyle("Art")} 
                    className={
                      style === "Art"
                      ?"text-[17px] leading-[30px] font-semibold"
                      :"text-[17px] leading-[30px] font-normal"}>
                      Art
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Card */}
            <div className="mt-[37.5px] sm:mt-6 w-full flex flex-col gap-6 p-2 xl:p-5 rounded-xl border-[1px] bg-primaryMain bg-opacity-10 border-primaryMain">
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex gap-2 items-center">
                  <Image
                    className="object-contain"
                    src="/badgeDiscount.svg"
                    alt="badgeDiscount"
                    width={32}
                    height={32}
                  />
                  <p className="text-sm xl:text-[18px] leading-7 font-medium text-[#0C0C0C]">
                    Earn 9999 Points with this purchase
                  </p>
                </div>
                <Image
                  className="object-contain"
                  src="/info.svg"
                  alt="badgeDiscount"
                  width={32}
                  height={32}
                />
              </div>

              <div className="text-xs font-medium leading-6 underline text-[#0000EE]">
                <p>(Login/Signup)</p>
              </div>
            </div>

            {/* Quantity, Add to cart, Buy now */}
            <div className="mt-[18.5px] sm:mt-6 w-full h-[32.8px] xl:h-16 flex gap-[18px] xl:justify-between">
              <div className="w-[63.077px] xl:w-[123px] h-full py-5 rounded-[29.2px] border-[0.51px] bg-[#FFFFFF] border-[#9F9F9F] flex justify-center items-center">
                - 1 +
              </div>
              <button className="w-[85.1px] xl:w-[166px] h-full text-[10.256px] xl:text-xl py-5 rounded-[29.7px] border-[0.51px] text-[#000000] bg-[#FFFFFF] border-[#000000] flex justify-center items-center">
                Add To Cart
              </button>
              <button className="w-[154.359px] xl:w-[301px] h-full text-[10.256px] xl:text-xl py-5 leading-[12.308px] rounded-[35.9px] font-medium bg-primaryMain text-[#FFFFFF] flex justify-center items-center">
                Buy Now
              </button>
            </div>

            {/* Product long description, Payment methods */}
            <div className="mt-[30px] sm:mt-[39px] w-full sm:pr-[40px] hidden xl:flex xl:flex-col">
              {/* Product long description */}
              <div className="w-full text-sm sm:text-[17px] leading-[30px] flex flex-col gap-[18px]">
                {longDescription.map((item, index) => (
                  <Accordion_Product key={index} title={item.title} description={item.description} />
                ))}
                {specifications.map((item, index) => (
                  <Accordion_Specs key={index} title={item.title} specs={item.specs} />
                  
                ))}
              </div>

              {/* Payment Methods */}
              <div className="mt-[16.5px] w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-[17px] leading-[30px] text-[#000000] font-normal">
                  Accepted payment methods
                </p>

                <div className="mt-[19.32px] sm:mt-0 max-w-[269px] w-full flex gap-[14px]">
                  <div className="w-[80px] h-[46px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="/paypal.svg"
                      alt="paypal"
                      width={80}
                      height={46}
                    />
                  </div>
                  <div className="w-[80px] h-[46px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="/stripe.svg"
                      alt="stripe"
                      width={80}
                      height={46}
                    />
                  </div>
                  <div className="w-[80px] h-[46px]">
                    <Image
                      className="w-full h-full object-contain"
                      src="/mastercard.svg"
                      alt="mastercard"
                      width={80}
                      height={46}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Product */}
        <div className="mt-[55.18px] sm:mt-[25px] lg:mt-[84.43px] xl:max-w-[1312px] w-full">
          <div className="hidden w-full sm:flex sm:justify-between sm:items-center">
            <p className="text-[38px] leading-[49.4px]">Add flowers</p>
            <p className="text-[21px] leading-[25.2px] font-normal pb-[7.99px] border-b-[2px] border-[#BBBBBB]">
              Browse all
            </p>
          </div>

          <div className="sm:mt-[52.6px] w-full grid grid-cols-2 xl:grid-cols-3 gap-x-[9px] gap-y-[41.46px] md:gap-x-[43.21px] md:gap-y-16 xl:gap-x-[49px] xl:gap-y-[48px]">
            {grobox.map((product, index) => (
              <Link className="w-full" key={index} href="/store/grobox/123">
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-[92.46px] sm:mt-[115px] xl:mt-[272.19px] xl:max-w-[1312px] w-full flex flex-col justify-center items-center">
          <p className="text-xl sm:text-[38px] leading-[49.4px] font-normal text-center text-[#0E0E0E]">
            What customers are saying
          </p>

          {/* Testimonial cards */}
          <div className="mt-10 sm:mt-[80.99px] xl:mt-[59.99px] w-full h-full flex gap-x-[30px] justify-center items-center overflow-x-scroll sm:overflow-hidden">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
