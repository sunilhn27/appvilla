"use client";
import { useParams } from "next/navigation";

export default function postID() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Post iD {params.id}</h1>
    </>
  );
}
