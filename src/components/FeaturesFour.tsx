import React from "react";

function FeaturesFour(): JSX.Element {
  return (
    <section className="bg-[#FF6B81] w-[100%] h-[32rem] text-white my-12">
      <div className="flex justify-center items-center py-24">
        <div className="flex flex-col">
          <h1 className="w-[46rem] h-[8rem] text-[2.4rem] font-semibold text-center ">
            Trusted by developers from over 80 planets
          </h1>
          <p className="text-center mt-2 mb-12 text-gray-50">
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
          <div className="flex justify-evenly">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold">100%</h1>
              <p>Satification</p>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold">120K</h1>
              <p>Happy Users</p>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold">125k+</h1>
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFour;
