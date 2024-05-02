import React from "react";
import Settings from "@/asserts/icons/Settings.png";
import Image from "next/image";
import ImageTwo from "@/asserts/FeatureTwoImg.png";

function FeaturesTwo(): JSX.Element {
  return (
    <section className="bg-white py-12">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[41rem] space-y-5">
          <div className="w-[3.5rem] h-[3.5rem] bg-[#FF6B81] flex items-center justify-center rounded-lg">
            <Image src={Settings} alt="pic" />
          </div>
          <h1 className="w-[28rem] h-[5rem] text-[1.7rem] font-semibold">
            1,25,000 Customers Using The Application!
          </h1>
          <p className="w-[39rem] h-[4.5rem] text-gray-400 ">
            Collaborate over projects with your team and clients optimised for
            mobile and tablet don't let slow page speeds drive our innovative
            platform empowers anyone to convert clicks ou'll publish your first
            landing page in minutes.
          </p>
          <button className="text-white bg-[#FF6B81] w-[9rem] h-[3rem] rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <Image src={ImageTwo} alt="pic1" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesTwo;
