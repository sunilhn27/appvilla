import Image from "next/image";
import React from "react";
import Phone from "@/asserts/phone.png";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

function Hero(): JSX.Element {
  return (
    <section className="bg-[#FF6B81] w-[100%] h-[50rem] py-16">
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-white ">
          <div className="space-y-8">
            <h1 className=" w-[32rem] h-[6.2rem] text-[2.6rem] font-bold">
              A powerful app for your Business.
            </h1>
            <p className="w-[35rem]">
              From open source to pro services, Piqes helps you to build,
              deploy, test, and monitor apps.
            </p>
            <div className="flex flex-row items-center space-x-7 ">
              <button className="flex justify-center items-center w-[9.8rem] h-[3rem] border-2 bg-white text-[#FF6B81] rounded-xl ">
                <IoLogoApple className=" text-[1.6rem] " />
                App Store
              </button>

              <button className="flex justify-center items-center w-[9.8rem] h-[3rem] border-2  bg-[#FF6B81] rounded-xl">
                <BiLogoPlayStore className=" text-[1.6rem] " />
                Google Play
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={Phone} alt="phone" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
