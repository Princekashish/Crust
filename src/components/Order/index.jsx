import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ScrollTop from "../../utils/Scrolltop";

export default function Order() {
  const orderDetails = useSelector((state) => state.order);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter orders based on search query
  const filteredOrders = orderDetails && orderDetails.orderhistory
    ? orderDetails.orderhistory.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="font-Poppins min-h-screen">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="relative mt-20 xl:mt-20 xl:w-full flex flex-col gap-16">
          <div className="flex justify-center items-center relative">
            <SearchIcon className="absolute left-2 md:hidden" size={20} />
            <input
              type="text"
              placeholder="search your order here"
              className="py-2 px-10 shadow-md w-full xl:w-3/4 rounded-xl bg-transparent border border-black outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex flex-col gap-5">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-around shadow-sm bg-[#F2F2F2] rounded-2xl p-2 gap-3"
                >
                  <img src={item.img} alt="" className="h-[70px]" />
                  <div className="w-1/2 xl:w-3/4">
                    <h1 className="text-sm font-semibold">{item.name}</h1>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-light text-[#4d4c4c]">
                          Quantity: {item.quantity}
                        </p>
                        <p>$ {item.price}</p>
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <div className="h-[8px] w-[8px] bg-green-600 rounded-full" />
                        <p className="font-poppins text-sm">Status</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No orders found.</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
