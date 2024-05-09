"use client";

import React, { useState } from "react";
import { Collapse } from "react-collapse";

interface FAQ {
  title: string;
  description: string;
}

const FAQs: React.FC<FAQ> = ({ title, description }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section>
      <div className="flex justify-center items-center ">
        <button
          onClick={() => setOpen(!open)}
          className={`w-[81rem] h-[4.1rem] font-semibold border-2 text-black ${
            open ? "bg-[#FF6B81] text-white" : "bg-[transparent] "
          } flex justify-start items-center px-8 rounded-lg`}
        >
          {title}
        </button>
      </div>
      <Collapse isOpened={open} className="flex justify-center py-4">
        <div className="flex justify-center items-center">
          <div className="rounded-xl">
            <p className="w-[81rem]  py-4 text-gray-400 bg-[#f9f9f9] px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consectetur sit amet ante nec vulputate. Nulla aliquam, justo
              auctor consequat tincidunt, arcu erat mattis lorem, lacinia
              lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac
              dictum tellus
              <p className="py-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute.
                non cupidatat skateboard dolor brunch. Foosd truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident.
              </p>
            </p>
          </div>
        </div>
      </Collapse>
    </section>
  );
};

function Accordion() {
  return (
    <section className="my-12 bg-white">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col">
          <h2 className="text-[#FF6B81]">FAQ</h2>
          <h1 className="text-[2rem] font-bold">Frequently Asked Questions</h1>
          <p className="w-[42rem] text-gray-500 pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      <div className="my-12 space-y-3">
        <FAQs title="How Do I Contact Customer Services?" description="" />
        <FAQs title="Material types can you work with?" description="" />
        <FAQs
          title="Can I have multiple activities in a single feature?"
          description=""
        />
        <FAQs title="Can I share resources between features?" description="" />
      </div>
    </section>
  );
}

export default Accordion;
