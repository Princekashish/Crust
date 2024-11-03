import React, { useState } from "react";

import Bakeryss from "../../../Bakery.json";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../../utils/Scrolltop";

export default function Tranding() {
  const [filters, setFilters] = useState({});

  const navigate = useNavigate();

  const uniqueCategories = Array.from(
    new Set(Bakeryss.map((item) => item.category))
  ).map((category) => {
    return Bakeryss.find((item) => item.category === category); // Get the first item for the unique category
  });
  const handleCategoryClick = (category) => {
    navigate(`/bakery-list`, { state: { selectedCategory: category } });
  };

  return (
    <div className=" font-Poppins ">
    <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="flex flex-col justify-start  gap-5 ">
          <h1 className="text-xl font-semibold border-l-2 border-black px-3">
            Customer Favorites
          </h1>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5 ">
            {Bakeryss.slice(0, 4).map((items, i) => {
              return (
                <div key={i} className=" relative gap-4  flex flex-col justify-between items-center font-Poppins group ">
                  <div>
                    <h1 className="absolute top-2 bg-red-600 text-white text-sm z-10 px-2 rounded">
                      {items.discount || 0.01}% off
                    </h1>
                    <img
                      onClick={() => navigate(`/bakery-list/${items.id}`)}
                      src={items.img}
                      alt=""
                      className="object-contain group-hover:scale-105 group-hover:duration-500 h-[130px] xl:h-[300px]"
                    />
                  </div>
                  <div className="flex  w-full  text-xs gap-5 group-hover:bg-white  rounded-b-3xl xl:justify-center xl:items-center p-5 duration-500">
                    <h1 className="xl:text-base font-semibold  w-full">{items.name}</h1>
                    <div className=" w-1/2 flex justify-center items-center">
                      <h1 className="xl:text-lg font-semibold ">
                        {items.price} $
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* catogary */}
        <div className="mt-10">
          <h1 className="text-xl font-semibold border-l-2 border-zinc-300 px-3">
            Popular Catagories
          </h1>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5 mt-5">
            {uniqueCategories.map((items, i) => {
              return (
                <div key={i}
                  onClick={() => handleCategoryClick(items)}
                  className=" relative gap-4 flex flex-col justify-between items-center font-Poppins group bg-white rounded-2xl xl:p-4"
                >
                  <div>
                    <img
                      src={items.img}
                      alt=""
                      className="object-contain group-hover:scale-105 group-hover:duration-500 pointer-events-none h-[140px]  xl:h-[320px]"
                    />
                  </div>
                  <div className="flex  text-xs gap-5 p-2 duration-500">
                    <h1 className="xl:text-base font-semibold font-Poppins">
                      {items.category}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
