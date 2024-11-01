import React from "react";
import ScrollTop from "../../utils/Scrolltop";

export default function About() {

  return (
    <div className="xl:font-Playfair font-Poppins min-h-screen ">
    <ScrollTop/>
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="relative mt-20 xl:mt-0 xl:w-full flex flex-col  gap-16">
          <h1 className="xl:text-[16em] text-[6em] font-Poppins tracking-wider opacity-5 absolute">
            Crust
          </h1>
          <div className=" xl:mt-20 flex flex-col justify-start items-center gap-10 xl:flex-row xl:justify-around xl:items-start xl:gap-10">
            <div className="flex flex-col justify-start items-start gap-5 xl:w-1/2">
              <h1 className="text-xl     font-semibold border-l-2 border-black px-3">
                About us
              </h1>
              <p className="font-Poppins">
                At Crust Bakery Delight, we are passionate about creating
                delicious bakery treats that will make your taste buds dance
                with joy. We offer a wide variety of delightful goodies,
                including cakes, cupcakes, milkshakes, donuts, croissants, and
                more. Our talented bakers use the finest ingredients and blend
                them with authentic Asian flavors to bring you unique and
                mouthwatering creations. Each item is carefully crafted to
                ensure a perfect balance of taste and texture.
              </p>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1675103910494-e32d2945729e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="xl:h-[420px] object-cover h-[420px] rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* chef */}

          <div className=" flex flex-col justify-start items-center xl:justify-between xl:items-center gap-10 xl:gap-0 xl:flex-row-reverse relative bg-white rounded-t-3xl ">
            <h1 className="xl:text-[16em] text-[6em] font-Poppins tracking-wider opacity-5 absolute">
              Chef
            </h1>
            <div className="xl:w-1/2 flex flex-col gap-5 p-5">
              <h1 className="text-xl xl:text-2xl xl:font-bold border-l-2 border-black px-3">
                Oven-fresh baked goods, baked just for you
              </h1>
              <p className="font-Poppins xl:font-semibold">
                We bake delicious treats with the finest ingredients. From warm
                chocolate chip cookies to flaky croissants, every bite is filled
                with warmth and flavor. Come experience the magic of our bakery.
              </p>
            </div>
            <div className="p-2">
              <img
                src="/chef.jpg"
                alt=""
                className="rounded-3xl xl:h-[520px] w-[400px] object-cover "
              />
            </div>
          </div>

          {/* delevery */}
          <div className="overflow-hidden flex flex-col justify-start items-center xl:justify-between xl:items-center gap-10 xl:gap-0 xl:flex-row relative  bg-white rounded-b-3xl bottom-[65px]">
            <h1 className="xl:text-[16em] text-[6em] font-Poppins tracking-wider opacity-5 absolute uppercase">
              Delevery
            </h1>
            <div className="xl:w-1/2 flex flex-col gap-5 p-5">
              <h1 className="text-xl xl:text-2xl xl:font-bold border-l-2 border-black px-3">
                Freshly Baked Delights, Delivered with Care
              </h1>
              <p className="font-Poppins xl:font-semibold">
                We deliver freshly baked goods to your doorstep, ensuring they
                arrive hot and delicious. Our skilled bakers use high-quality
                ingredients to craft each item with care. Enjoy the convenience
                of our fast and reliable delivery service.
              </p>
            </div>
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1515182629504-727d7753751f?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-3xl xl:h-[520px]   object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
