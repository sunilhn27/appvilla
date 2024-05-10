"use client";
import React from "react";
import { Toaster, toast } from "sonner";

function Notificationpage() {
  return (
    <section className="my-12">
      <div className="flex justify-center items-center">
        <Toaster richColors position="top-right" expand={true} />
        <button
          className="w-[9rem] h-[3rem] border-2 rounded-lg bg-green-500 text-white"
          onClick={() => toast.success("Save in DB")}
        >
          Success
        </button>

        <button
          className="w-[9rem] h-[3rem] border-2 rounded-lg bg-red-500 text-white"
          onClick={() => toast.error("Internal Server Error")}
        >
          Error
        </button>

        <button
          className="w-[9rem] h-[3rem] border-2 rounded-lg bg-green-500 text-white"
          onClick={() => toast.loading("Save in DB")}
        >
          Loading
        </button>
        <button
          className="w-[9rem] h-[3rem] border-2 rounded-lg bg-blue-500 text-white"
          onClick={() => toast.info("Save in DB")}
        >
          info
        </button>
      </div>
    </section>
  );
}

export default Notificationpage;
