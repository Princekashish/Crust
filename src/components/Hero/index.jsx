import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bakeryss from "../../../Bakery.json";
import ScrollTop from "../../utils/Scrolltop";

function Hero() {
  const herobg = [
      { img: "./croissant-with-chocolate.png" },
    { img: "./with-g.png"},
    { img: "./Cake_Image.png" },
  ];
  const navigate = useNavigate()
  const handlenavigate = ()=>{
    navigate("/bakery-list")
  }
  
  return (
    <div className="font-Poppins pt-20 xl:pt-16">
    <ScrollTop />
      <div className="flex xl:p-10 xl:justify-center xl:items-center flex-col ">
        <div className="relative flex flex-col justify-start items-start xl:gap-5 gap-2  p-5  xl:justify-center xl:items-center  ">
          <h1 className="font-Playfair text-6xl xl:text-[5em] capitalize font-bold  ">
            The ideal{" "}
            <span className="text-orange-600 relative inline-block">
              prepared
              <svg
                className="absolute -bottom-8 left-0 w-full hidden xl:block"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5"
                  fill="none"
                  stroke="#F15316"
                  strokeWidth="1"
                />
              </svg>
            </span>{" "}
            cake regular!
          </h1>
          <p className="text-sm xl:text-lg xl:text-center xl:w-3/4 xl:font-Poppins">
            These cakes are made with butter or another fat, like vegetable
            shortening. The common way is to mix the fat and sugar, then add
            eggs, and then add flour.{" "}
          </p>
          <img
            src="/Maskgroup1.png"
            alt=""
            className="absolute left-20 top-40 hidden xl:block h-[80px]"
          />
          <img
            src="/freepik-export-202410270339470Nfb.png"
            alt=""
            className="absolute right-10 top-16 hidden xl:block h-[120px]"
          />
        </div>
        <div className=" w-full flex justify-center relative p-2 ">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper   w-full relative"
          >
            {herobg.map((items, i) => {
              return (
                <div key={i}>
                 
                 <SwiperSlide onClick={handlenavigate} className="relative ">
                    <img
                      src={items.img}
                      alt=""
                      className={`xl:h-[550px]  relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain `}
                    />
                  </SwiperSlide>

                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-3 xl:flex-row  xl:gap-5">
        <h1 className="font-Poppins font-semibold text-xl xl:text-[3em]">Our Best Sellers...</h1>
        <p className="border-l-2 border-black px-3 text-sm xl:w-1/2 font-Poppins">
          We proudly present our most beloved creations, universally adored by
          all. The delectable lightness and sweetness of our cakes will leave
          you craving for more. Explore our diverse range of cakes, breads, and
          other delectable offerings.
        </p>
      </div>
    </div>
  );
}

export default Hero;
