import React from "react";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

function UseApp(): JSX.Element {
  return (
    <section className="w-full h-[27rem] bg-[#FF6B81] text-white">
      <div className="flex justify-center items-center text-center py-24">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[2.2rem] font-bold">
            Install Appvilla and Start Using
          </h1>
          <p className="w-[40rem] h-[4.5rem] text-[#FFF]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex justify-center items-center text-center pt-8">
            <div className="flex space-x-3">
              <div className="flex justify-center items-center bg-white w-[9.8rem] h-[3rem] rounded-lg">
                <IoLogoApple className=" text-[1.6rem] text-[#FF6B81]" />
                <h1 className="text-[#FF6B81]"> App Store</h1>
              </div>

              <div className="flex justify-center items-center bg-[#FF6B81] w-[9.8rem] h-[3rem] rounded-lg border-2 border-y-white">
                <IoLogoApple className=" text-[1.6rem] " />
                <h1> App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseApp;
