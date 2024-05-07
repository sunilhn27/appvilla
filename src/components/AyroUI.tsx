import React from "react";
import LOGO from "@/asserts/AyroUI.png";
import Image from "next/image";
import Img4 from "@/asserts/Images/Person4.png";

function AyroUI(): JSX.Element {
  return (
    <section className="bg-[#F9F9F9] w-full h-[32rem] py-24">
      <div className="flex flex-col justify-center items-center text-center space-y-3">
        <Image src={LOGO} alt="Logo" />
        <div className="flex flex-col text-center">
          <p className="font-semibold w-[45rem]">
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has"
          </p>
          <div className="flex flex-col justify-center items-center mt-6">
            <Image src={Img4} alt="pic3" className="mb-2" />
            <h1 className="font-bold">Musharof Chowdhury</h1>
            <p className="text-gray-500">CEO - Ayro UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AyroUI;
