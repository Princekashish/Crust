import React, { useState } from "react";
import Bakeryss from "../../../Bakery.json";
import { useDispatch } from "react-redux";
import { productAdd } from "../../Redux/feature/Cart/CartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ListFilter, X } from "lucide-react";
import ScrollTop from "../../utils/Scrolltop";
import "./bakery.css";
function Bakery() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory;

  const handleAddToCart = (item) => {
    dispatch(productAdd(item));
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.value]: e.target.checked,
    });
  };

  // Create a set of unique categories from the JSON
  const categories = Array.from(new Set(Bakeryss.map((item) => item.category)));

  const filteredProducts = Bakeryss.filter((item) => {
    if (Object.values(filters).every((value) => !value)) {
      return true; // No filters selected, show all products
    }
    return filters[item.category] || false; // Filter based on selected categories
  });

  return (
    <div className=" font-Poppins min-h-screen relative">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="mt-20 xl:w-full xl:flex xl:justify-between xl:mt-10">
          <div className="flex justify-between items-end md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="border border-black flex justify-center items-end gap-2 px-5 py-2 rounded-xl text-sm font-medium "
            >
              Filter
              <ListFilter size={20} />
            </button>
            <p className="text-xs font-Poppins">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="z-30 xl:h-[50vh]  xl:sticky top-28  desktop">
            <div className="flex flex-col p-2 ">
              <h1 className="text-neutral-800 text-xl font-semibold">
                Bakery Products
              </h1>
              <p className="opacity-80 text-neutral-800 text-sm font-semibold font-Poppins">
                {filteredProducts.length} items
              </p>
            </div>
            <div className="flex justify-center gap-5 ">
              <div className=" xl:block mt-5 ">
                <div className="w-[315px]  sticky top-0 flex flex-col gap-5">
                  <div className="flex xl:flex-col gap-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 border border-black rounded-xl px-3 py-4 font-Poppins w-3/4"
                      >
                        <input
                          type="checkbox"
                          name="filter"
                          value={category}
                          checked={!!filters[category]}
                          onChange={handleFilterChange}
                          className="form-checkbox h-5 w-5 border-none"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}

          <div className="xl:w-full">
            <div className="grid grid-cols-2 gap-5 mt-10 xl:grid-cols-3">
              {filteredProducts.map((items) => (
                <div
                  key={items.id}
                  className="relative flex flex-col justify-start gap-5 xl:rounded xl:p-3 group"
                >
                  <div
                    onClick={() => navigate(`/bakery-list/${items.id}`)}
                    className="xl:flex xl:justify-center xl:items-center"
                  >
                    <img
                      src={items.img}
                      alt={items.name}
                      className="object-contain flex justify-center items-center h-[160px] w-[220px] backdrop-blur-2xl bg-gray-50 xl:bg-transparent rounded-2xl group-hover:scale-105 group-hover:duration-500"
                    />
                  </div>

                  <div className="xl:group-hover:bg-gray-50 xl:duration-500 xl:p-5 xl:rounded-b-3xl">
                    <h1 className="text-xs font-medium xl:text-base xl:font-Poppins">
                      {items.name}
                    </h1>
                    <div className="flex justify-between w-full items-end">
                      <h1 className="text-xs absolute top-0 right-0 px-1 py-1 bg-[#d9dbdb] xl:bg-white xl:font-Poppins font-medium rounded-l-lg">
                        ⭐ {items.rating}
                      </h1>
                      <h1 className="text-sm font-medium xl:text-base xl:font-Poppins">
                        ${items.price}
                      </h1>
                      <button
                        onClick={() => handleAddToCart(items)}
                        className="text-sm font-medium border border-black px-3 xl:text-base py-1 rounded-md"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* mobile */}

          {isOpen && (
            <div className="xl:p-5  bg-black/50  min-h-[100vh]  fixed top-0 left-0 right-0 bottom-0 overflow-hidden">
              <div className=" bg-white h-[70vh] absolute -bottom-10 w-full  rounded-t-3xl xl:bottom-0 xl:top-0 xl:w-1/2 xl:h-screen xl:right-0 ">
                <div className="p-5">
                  <div className="flex justify-between items-center ">
                    <h1 className="text-xl font-medium ">Filter</h1>
                    <X
                      onClick={() => setIsOpen((pre) => !pre)}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="border-b mt-10 p-5">
                    <h1>Catogery</h1>
                  </div>
                  <div className="flex flex-wrap gap-5 mt-5">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-4 font-Poppins w-3/4"
                      >
                        <input
                          type="checkbox"
                          name="filter"
                          value={category}
                          checked={!!filters[category]}
                          onChange={handleFilterChange}
                          className="form-checkbox  border-none"
                        />
                        <span className="ml-3 block text-sm font-medium text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bakery;
