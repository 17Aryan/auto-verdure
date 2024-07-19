import Input from "@/app/ui/Input";
import Link from "next/link";
import React from "react";
import { BsApple, BsGoogle } from "react-icons/bs";

const Shipping = () => {
  return (
    <div className="mb-[95px] sm:mb-[58px] xl:mb-[105px] w-full px-11 sm:px-0 flex flex-col justify-center items-center">
      {/* Title */}
      <div className="mb-[42px] sm:mb-[52px] max-w-[560px] w-full flex flex-col gap-y-3 sm:justify-center sm:items-center">
        <p className="text-[32px] leading-8 font-normal capitalize text-[#070707]">
          Shipping Details
        </p>
        <p className="w-[266px] sm:w-full text-sm leading-[22.4px] font-medium text-[#8E8F94] sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-[560px] w-full">
        <form className="w-full flex flex-col gap-y-6">
          <Input label="Full Name" placeholder="Samath Bhardwaj" type="text" />
          <Input label="Street Name" placeholder="123 Street Name" type="tel" />
          <div className="w-full flex flex-row gap-x-4 gap-y-6 sm:gap-y-0">
            <Input label="House Number" placeholder="123" type="text" />
            <Input label="City" placeholder="Gurugram" type="text" />
          </div>
          <Input label="Phone" placeholder="8987456212" type="Tel" />
          <div className="w-full flex flex-row gap-x-4 gap-y-6 sm:gap-y-0">
            <Input label="Country" placeholder="India" type="text" />
            <Input label="ZIP Code" placeholder="400024" type="Number" />
          </div>

          <button
            type="submit"
            className="mt-[42px] sm:mt-[52px] w-full text-base px-6 py-[17px] rounded-[30px] border-[1px] bg-[#070707] border-[#070707] text-[#FFFFFF] font-bold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
