import React from "react";
import Img1 from "@/asserts/Images/Person1.png";
import Img2 from "@/asserts/Images/Person2.png";
import Img3 from "@/asserts/Images/Person3.png";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface Members {
  image: StaticImageData;
  title: string;
  designation: string;
}

const Teams: React.FC<Members> = ({ image, title, designation }) => {
  return (
    <section>
      <div className="w-[26rem] h-[24rem] border-2 rounded-lg">
        <Image src={image} alt="person1" />
        <div className="flex flex-col mt-6">
          <div className="flex flex-row justify-around items-center">
            <div>
              <h1 className="text-[1.2rem] font-bold">{title}</h1>
              <p className="text-[#FF6B81]">{designation}</p>
            </div>
            <div className="flex space-x-4">
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function OurTeam(): JSX.Element {
  return (
    <section className="bg-[#FFFFFF] my-12">
      <div className="flex flex-row justify-center items-center text-center">
        <div className="flex flex-col ">
          <h3 className="text-[#FF6B81] font-bold ">TEAM</h3>
          <h1 className="font-bold text-[2.3rem]">Meet our team</h1>
          <p className="w-[42rem] text-gray-500 mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-3 mt-6 gap-10 ">
          <Teams
            image={Img1}
            title="Leonard Krasner"
            designation="Senior Designer"
          />
          <Teams
            image={Img2}
            title="Leonard Krasner"
            designation="UI Designer"
          />
          <Teams
            image={Img3}
            title="Leonard Krasner"
            designation="Manager"
          />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
