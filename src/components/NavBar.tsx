import React from "react";
import Logo from "@/asserts/Appvilla.svg";
import Image from "next/image";
import Link from "next/link";

function NavBar(): JSX.Element {
  // <Image src={Logo} alt="logo"/>

  return (
    <section className="bg-[#FF6B81]">
      <div className="flex justify-center items-center w-full ">
        <nav className="text-white flex items-center md:gap-x-48 2xl:gap-60 md:py-4 ">
          <Image src={Logo} alt="logo" className="w-[9.9rem] h-[2.2rem]" />
          <div className="flex gap-6 font-bold">
          <Link href={""}>Home</Link>
          <Link href={""}>Features</Link>
          <Link href={""}>Overview</Link>
          <Link href={""}>Pricing</Link>
          <Link href={""}>Team</Link>
          <Link href={""}>Blog</Link>
          <Link href={""}>Contact</Link>
          </div>
          <button className="text-white border-white border-2 py-2 px-4 rounded-md">Get it Now</button>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
