import React from "react";
import ScrollTop from "../../utils/Scrolltop";

export default function Testimonials() {
  return (
    <div className=" font-Poppins ">
    <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="flex flex-col justify-start items-center xl:flex-row-reverse">
          <div className="flex flex-col gap-5 xl:w-1/2">
            <h1 className="text-sm  border-l-2 border-zinc-300 px-3">
              Testimonials
            </h1>
            <h1 className="text-[2.4em] xl:text-[3em] font-semibold  px-3 leading-none">
              What Our <span className="text-orange-600">Customers</span> Say
              About Us
            </h1>
            <p className="text-sm xl:font-Poppins">
              Last night, I had the pleasure of dining at Aldenaire Kitchen, and
              I'm still buzzing about the experience! The meticulous attention
              to detail in both presentation and service was truly outstanding,
              making for an unforgettable evening.
            </p>
            <div className="relative flex justify-between xl:justify-start xl:gap-36 items-center">
              <div>
                <img
                  src="Mask group.png"
                  alt=""
                  className=" h-[50px] absolute left-0 top-0"
                />
                <img
                  src="Mask group-1.png"
                  alt=""
                  className=" absolute left-8 h-[50px] top-0"
                />
                <img
                  src="Mask group-2.png"
                  alt=""
                  className="absolute left-16 h-[50px] top-0"
                />
              </div>
              <div>
                <h1 className="text-sm ">Customer Feedback</h1>
                <h1 className="text-xs"> ⭐4.5 (18.6k Reviews)</h1>
              </div>
            </div>
          </div>
          <div>
            <img src="/Group 18.png" alt="" className="pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
