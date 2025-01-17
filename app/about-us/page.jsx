"use client";

import Image from "next/image";
import React from "react";
import AboutUsCard from "../ui/About Us/AboutUsCard";
import { aboutUs } from "../constant/data";
import FAQ from "../ui/About Us/FAQ";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const AboutUs = () => {
  return (
    <div className="w-full px-4 pt-[44px] pb-[124px] md:px-[28px] md:py-[116px] xl:px-[119.99px] xl:pt-[114px] xl:pb-[151px] 2xl:px-[200px] 2xl:py-[116px] bg-[#FFFCF8] flex flex-col justify-center items-center">
      {/* Title */}
      <div className="max-w-[219px] md:max-w-[382px] w-full relative">
        <div>
          <Image
            className="object-contain absolute -top-[20.5px] -left-[70px] md:top-6 md:-left-[120px] xl:-left-[247px] -rotate-45 md:rotate-45 transform scale-x-100 md:-scale-x-100"
            src="/leaf.png"
            alt="leaf"
            width={58}
            height={41}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[40px] md:text-[70px] leading-[48px] md:leading-[80px] -tracking-[1px] md:-tracking-[1.75px] font-normal text-primaryGrayscale">
            <p>About Us</p>
          </div>
          <div className="mt-3 md:mt-6 text-base font-medium">
            <p className="text-secondaryGrayscale">
              <Link href="/">
                <span className="text-primaryMain">Home</span>
              </Link>{" "}
              / About Us
            </p>
          </div>
        </div>
        <div>
          <Image
            className="object-contain absolute top-[38.5px] -right-[70px] md:-top-[10px] md:-right-[118px] xl:top-[41.5px] xl:-right-[222px] rotate-45 md:-rotate-45"
            src="/leaf.png"
            alt="leaf"
            width={58}
            height={41}
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="mt-16 md:mt-[72px] xl:mt-[72.5px] w-full border-[1px] border-black border-opacity-[11%]" />

      {/* About Us Content */}
      <div className="mt-[45px] md:mt-[100.5px] w-full">
        <div className="xl:pr-[156px] xl:flex">
          <div className="w-full md:px-[32px] xl:px-0">
            <div className="w-full md:text-center xl:text-left">
              <p className="text-[50px] leading-[60px] -tracking-[1.25px] font-normal text-primaryGrayscale">
                Experience the perfect <br /> harmony{" "}
              </p>
              <p className="mt-5 pr-[27px] md:px-0 text-sm font-normal leading-6 text-secondaryGrayscale">
                Perfection has no end, but we are dedicated to a long-term
                commitment in India to work for continuous improvement and
                innovation for our clientele. We will be glad if you choose
                Autoverdure and promise you a captivating experience. work for
                continuous improvement and innovation for our clientele. We will
                be glad if you choose Autoverdure and promise you a captivating
                experience.
              </p>
              <p className="mt-6 pr-[27px] md:px-0 text-sm font-normal leading-6 text-secondaryGrayscale">
                Our knowledgeable staff are dedicated to helping our customers
                find the perfect plant for their needs, whether it&apos;s a
                low-maintenance succulent or a lush indoor tree. We also offer a
                range of plant care products and accessories to help our
                customers keep their plants healthy and thriving.
              </p>
            </div>

            <div className="mt-[37px] w-full">
              <div className="w-full flex gap-6 justify-center xl:justify-start items-center">
                <div className="w-full md:w-[132px] px-[12.04px] py-[11.28px] gap-[6.02px] flex flex-col justify-center items-center rounded-[9.03px] bg-[#F5F5F5]">
                  <p className="text-[18.054px] md:text-2xl leading-[21.665px] md:leading-[28.8px] -tracking-[0.451px] md:-tracking-[0.6px] font-[600] text-primaryGrayscale">
                    12+
                  </p>
                  <p className="text-xs md:text-sm text-center leading-[18.054px] md:leading-6 font-normal text-secondaryGrayscale">
                    Year Experience
                  </p>
                </div>
                <div className="w-full md:w-[132px] px-[12.04px] py-[11.28px] gap-[6.02px] flex flex-col justify-center items-center rounded-[9.03px] bg-[#F5F5F5]">
                  <p className="text-[18.054px] md:text-2xl leading-[21.665px] md:leading-[28.8px] -tracking-[0.451px] md:-tracking-[0.6px] font-[600] text-primaryGrayscale">
                    35+
                  </p>
                  <p className="text-xs md:text-sm text-center leading-[18.054px] md:leading-6 font-normal text-secondaryGrayscale">
                    Store
                  </p>
                </div>
                <div className="w-full md:w-[132px] px-[12.04px] py-[11.28px] gap-[6.02px] flex flex-col justify-center items-center rounded-[9.03px] bg-[#F5F5F5]">
                  <p className="text-[18.054px] md:text-2xl leading-[21.665px] md:leading-[28.8px] -tracking-[0.451px] md:-tracking-[0.6px] font-[600] text-primaryGrayscale">
                    321+
                  </p>
                  <p className="text-xs md:text-sm text-center leading-[18.054px] md:leading-6 font-normal text-secondaryGrayscale">
                    Satisfied client
                  </p>
                </div>
              </div>

              <div className="mt-[37.3px] md:mt-8 w-full text-base font-medium flex gap-7 justify-center xl:justify-start items-center">
                <button className="px-[42px] py-[18px] text-white rounded-[100px] bg-primaryMain">
                  Shop now
                </button>
                <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[63px] md:mt-[128.5px] xl:mt-0 w-full flex flex-col gap-[17.66px] md:gap-[21px] justify-center items-center overflow-hidden xl:overflow-visible">
            <div className="w-full h-[209.376px] md:h-[249px] flex relative">
              <div className="object-contain w-[315.326px] h-[209.376px] md:w-[379px] md:h-[249px] md:ml-[15%] lg:ml-[25%] rounded-2xl">
                <Image
                  className="rounded-2xl w-full h-full"
                  src="/aboutUs1.png"
                  alt="img"
                  width={315.326}
                  height={209.376}
                />
              </div>
              <Image
                className="hidden md:flex xl:hidden object-contain absolute top-[72.46px] right-[100px] lg:right-[180px] -rotate-45 transform -scale-y-100"
                src="/leaf.png"
                alt="leaf"
                width={58}
                height={41}
              />
            </div>
            <div className="w-full h-[209.376px] md:h-[249px] flex relative">
              <Image
                className="object-contain absolute top-[61.38px] md:top-[73px] md:left-[110px] lg:left-[250px] xl:left-[100px] rotate-45 transform -scale-x-100"
                src="/leaf.png"
                alt="leaf"
                width={58}
                height={41}
              />
              <div className="w-[315.326px] h-[209.376px] md:w-[379px] md:h-[249px] xl:w-full ml-[136.22px] md:ml-[35%] lg:ml-[45%] rounded-2xl">
                <Image
                  className="w-full h-full rounded-2xl"
                  src="/aboutUs2.jpg"
                  alt="img"
                  width={315.326}
                  height={209.376}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[62.59px] md:mt-[80px] xl:mt-[116px] w-full flex flex-col gap-8">
          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="text-[40px] md:text-[50px] leading-[48px] -tracking-[1px] md:leading-[60px] md:-tracking-[1.25px] md:text-center text-primaryGrayscale font-normal">
              Our Mission to Provide{" "}
              <br className="hidden md:block xl:hidden" /> High-Quality Plants
            </p>
            <p className="md:w-[461px] xl:w-[882px] text-sm md:text-base leading-6 md:leading-6 font-normal md:text-center text-secondaryGrayscale">
              Perfection has no end, but we are dedicated to a long-term
              commitment in India to work for continuous improvement and
              innovation for our clientele.
            </p>
          </div>

          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <div className="w-[100%] overflow-hidden h-[180.5px] md:w-[692px] md:h-[346px] xl:w-[1202px] xl:h-[601px] rounded-[14.1px] md:rounded-[27px]">
              <CldVideoPlayer
                className="w-full h-full"
                autoplay={true}
                loop={true}
                width="361"
                height="180.5"
                src="https://res.cloudinary.com/dcwlomcob/video/upload/v1712181909/aboutUsVideo_ozaxok.mov"
                colors={{
                  accent: "#f0f10f0",
                  base: "#f0f1f0",
                  text: "#000000",
                }}
              />
            </div>

            <div className="w-full flex md:hidden gap-[21.47px] justify-between">
              <Image
                src="/aboutImg4.png"
                alt="img"
                width={171.765}
                height={183.395}
              />
              <Image
                src="/aboutImg4.png"
                alt="img"
                width={171.765}
                height={183.395}
              />
            </div>

            <button className="md:mt-4 px-[42px] py-[18px] text-base font-normal text-white rounded-[100px] bg-primaryMain">
              Shop now
            </button>
          </div>
        </div>

        <div className="mt-[63.9px] md:mt-[131px] xl:mt-[119.5px] md:pl-[71px] md:mr-[29px] w-full flex flex-col md:flex-row md:gap-[35px] lg:gap-[150px] xl:gap-[449px]">
          <Image
            className="hidden xl:block object-contain absolute left-0"
            src="leaves1.svg"
            alt="leaves"
            width={138.798}
            height={154.544}
          />
          <div className="w-full flex justify-between pr-[21.41px]">
            <div className="hidden md:flex h-fit relative ">
              <div className="hidden md:flex flex-col gap-4 sticky top-0">
                <Image
                  className="object-contain"
                  src="/star.svg"
                  alt="star"
                  width={48}
                  height={49}
                />
                <p className="text-[50px] leading-[60px] -tracking-[1.25px] font-normal">
                  About
                  <br /> US
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 relative">
              {aboutUs.map((item, index) => (
                <AboutUsCard key={index} aboutDetails={item} />
              ))}
            </div>
          </div>
          <Image
            className="hidden xl:block object-contain absolute right-0 rotate-[360deg]"
            src="leaves2.svg"
            alt="leaves"
            width={138.798}
            height={154.544}
          />
        </div>

        <div className="mt-[106.5px] md:mt-[130.59px] w-full px-[43.5px] flex flex-col justify-center items-center">
          <div className="w-full md:w-[646px] flex flex-col justify-center items-center">
            <p className="md:w-[630px] text-[40px] md:text-[50px] leading-[48px] md:leading-[60px] -tracking-[1px] md:-tracking-[1.25px] md:text-center font-normal text-primaryGrayscale">
              We look forward to catering to anybody who
            </p>

            <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-y-[60px] md:gap-x-[130px]">
              <div className="w-full px-[8.6px] flex flex-col gap-4 items-center">
                <Image
                  className="object-contain"
                  src="/luxury.png"
                  alt="img"
                  width={80}
                  height={80}
                />

                <p className="md:w-[294px] text-xl leading-6 -tracking-[0.5px] text-center text-primaryGrayscale font-medium">
                  Desires to add stunning & luxurious plants to complement their
                  indoor & outdoor.
                </p>
              </div>
              <div className="w-full h-full px-[8.6px] flex flex-col gap-4 items-center">
                <Image
                  className="object-contain"
                  src="/planetEarth.png"
                  alt="img"
                  width={80}
                  height={80}
                />

                <p className="md:w-[294px] text-xl leading-6 -tracking-[0.5px] text-center text-primaryGrayscale font-medium">
                  Cares for the Environment.
                </p>
              </div>
              <div className="w-full px-[8.6px] flex flex-col gap-4 items-center">
                <Image
                  className="object-contain"
                  src="/bio.png"
                  alt="img"
                  width={80}
                  height={80}
                />

                <p className="md:w-[294px] text-xl leading-6 -tracking-[0.5px] text-center text-primaryGrayscale font-medium">
                  Wants an organic and fresh Produce.
                </p>
              </div>
              <div className="w-full px-[8.6px] flex flex-col gap-4 items-center">
                <Image
                  className="object-contain"
                  src="/agriculture.png"
                  alt="img"
                  width={80}
                  height={80}
                />

                <p className="md:w-[294px] text-xl leading-6 -tracking-[0.5px] text-center text-primaryGrayscale font-medium">
                  Wants easy to use planters for urban gardening.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[52px] md:mt-8 w-full text-base font-medium flex gap-7 justify-center items-center">
          <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
            Shop now
          </button>
          <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
            Learn More
          </button>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default AboutUs;
