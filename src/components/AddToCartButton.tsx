"use client";

import React from "react";

function AddToCart() {
  const handleclick = () => {
    console.log("client component");
  };

  return (
    <button
      className="text-white bg-[#FF6B81] w-[9rem] h-[3rem] rounded-lg"
      onClick={handleclick}
    >
      Get Started
    </button>
  );
}

export default AddToCart;
