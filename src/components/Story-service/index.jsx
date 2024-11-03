import { Gift, icons, ShoppingCart, Truck, Vegan } from "lucide-react";
import React from "react";
import ScrollTop from "../../utils/Scrolltop";

export default function Service() {
  const service = [
    {
      icons: <Vegan />,
      text: "Catering",
      des: "Delight your guests with our flavors and  presentation",
    },
    {
      icons: <Truck />,
      text: "Fast delivery",
      des: "We deliver your order promptly to your door",
    },
    {
      icons: <ShoppingCart />,
      text: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering ",
    },
    {
      icons: <Gift />,
      text: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
    },
  ];
  return (
    <div className="font-Poppins ">
    <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5 gap-4">
        <h1 className="text-lg  border-l-2 border-black px-3 ">
          Our Story & Services
        </h1>
        <div className="flex flex-col justify-center items-center gap-5 xl:flex-row xl:justify-center xl:gap-24 xl:items-start xl:mt-5">
          <div className="flex flex-col justify-start items-start gap-4 xl:w-3/4">
            <h1 className="text-xl font-semibold  xl:text-[3.6em] xl:leading-[80px] ">
              Our Culinary Journey And Services
            </h1>
            <h1 className="text-sm xl:font-Poppins ">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {service.map((items, i) => {
              return (
                <div key={i} className="bg-white flex justify-center items-center flex-col p-4 gap-2 rounded-2xl">
                  <h1>{items.icons}</h1>

                  <h1 className="font-semibold ">{items.text}</h1>
                  <h1
                    className="text-sm text-center xl:font-Poppins xl:w-3/4">
                    {items.des}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
