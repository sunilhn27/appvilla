import React from "react";
import Img1 from "@/asserts/Images/Person1.png";
import Image from "next/image";
import AddToCart from "@/components/AddToCartButton";

function AddtoCartpage() {
  console.log("server");

  return (
    <section className="flex justify-center items-center mx-auto my-12">
      <div className="border-2 w-[20rem] h-[20rem]">
        <Image src={Img1} alt="pic" />
        <AddToCart />
      </div>
    </section>
  );
}

export default AddtoCartpage;
