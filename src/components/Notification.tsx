import Image from "next/image";
import React from "react";
import Img1 from "@/asserts/Images/Person1.png";
import AddtoCartpage from "@/app/(marketing)/addtocart/page";

function Notification() {
  console.log("client component");
  return (
    <section className="flex justify-center items-center mx-auto my-12">
      <div className="border-2 w-[20rem] h-[20rem]">
        <Image src={Img1} alt="pic" />
        <AddtoCartpage />
      </div>
    </section>
  );
}

export default Notification;
