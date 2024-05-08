"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

function useSearchparams() {
  const useparams = useSearchParams();

  console.log(useparams.get("name"));
  return <div>useSearchparams</div>;
}

export default useSearchparams;
