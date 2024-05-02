import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import Lock from "@/asserts/icons/Push.png";
import DataBase from "@/asserts/icons/DataBase.png";
import Refresh from "@/asserts/icons/Refresh.png";
import SSL from "@/asserts/icons/SSL.png";
import Security from "@/asserts/icons/Security.png";
import Settings from "@/asserts/icons/Settings.png";

interface Headers {
  image: StaticImageData;
  title: string;
  para: string;
}

const HeaderCard: React.FC<Headers> = ({ image, title, para }) => {
  return (
    <section className=" w-[26rem] h-[17rem] border-2 rounded-lg  text-white shadow-md">
      <div className="flex flex-col p-8 space-y-4">
        <div className="w-[3.5rem] h-[3.5rem] bg-[#FF6B81] rounded-lg flex items-center justify-center">
          <Image src={image} alt="lock" />
        </div>
        <h1 className="text-black font-bold text-[1.1rem]">{title}</h1>
        <p className="w-[22rem] h-[4rem] text-gray-500">{para}</p>
      </div>
    </section>
  );
};

function FeaturesOne(): JSX.Element {
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h3 className="text-[#FF6B81] ">FEATURES</h3>
          <h1 className="w-[41rem] h-[5.2rem] text-[2rem] font-bold text-center">
            Your Experience Gets Better And Better Over Time.
          </h1>
          <p className="text-gray-500 md:w-[46rem] md:h-[3rem] 2xl:w-[46rem] 2xl:h-[3rem] text-center py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className="flex justify-center items-center py-12 ">
        <div className="grid grid-cols-3 gap-5">
          <HeaderCard
            image={Lock}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
          <HeaderCard
            image={SSL}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
          <HeaderCard
            image={DataBase}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
          <HeaderCard
            image={Settings}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
          <HeaderCard
            image={Security}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
          <HeaderCard
            image={Refresh}
            title="Push to Deploy"
            para="It is a long established fact that a reader will be
            distracted by the readable content of a page at
            its layout."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesOne;
