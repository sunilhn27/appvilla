import React from "react";
import Settings from "@/asserts/icons/Settings.png";
import Image from "next/image";
import Image3 from "@/asserts/FeatureThree.png";
function FeaturesThree(): JSX.Element {
  return (
    <section className="py-12">
      <div className="flex justify-center items-center gap-12">
        <div className="">
          <Image src={Image3} alt="pic1" />
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-[#FF6B81] rounded-lg">
            <Image src={Settings} alt="pic" />
          </div>
          <h1 className="font-semibold text-[1.5rem]">Seamless Loyalty</h1>
          <p className="w-[37rem] h-[4.5rem] text-gray-400 ">
            Collaborate over projects with your team and clients optimised for
            mobile and tablet don't let slow page speeds drive our innovative
            platform empowers anyone to convert clicks ou'll publish your first
            landing page in minutes.
          </p>
          <button className="bg-[#FF6B81] text-white w-[9rem] h-[3rem] rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesThree;
