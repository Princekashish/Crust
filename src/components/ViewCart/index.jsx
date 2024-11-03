import { ArrowRight, Trash2 } from "lucide-react";
import React, { useState } from "react";
import ScrollTop from "../../utils/Scrolltop";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  selectCartTotal,
  productRemoveComplete,
  clearCart,
} from "../../Redux/feature/Cart/CartSlice";
import { useNavigate } from "react-router-dom";
import { saveOrderDetails } from "../../Redux/feature/Order/OrderSlice";

export default function ViewCart() {
  const price = useSelector(selectCartTotal);
  const cart = useSelector((pre) => pre.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    toast.success("Item successfully removed", {
      position: "bottom-center",
    });

    setTimeout(() => {
      dispatch(productRemoveComplete(itemId));
    }, 500);
  };

  // State to manage the delivery option
  const [deliveryOption, setDeliveryOption] = useState("standard");

  const deliveryCharge = deliveryOption === "standard" ? 6.99 : 0; // Set delivery charge based on selected option
  const handleReviewAndPay = () => {
    const orderDetails = {
      orderhistory: cart,
    };
    dispatch(saveOrderDetails(orderDetails));
    console.log("Order details being saved:", orderDetails);
    dispatch(clearCart());
    navigate("/order_product");
  };

  return (
    <div className=" font-Poppins min-h-screen relative">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="mt-20 xl:w-full xl:mt-20 xl:gap-5 flex flex-col-reverse xl:flex-row xl:justify-between gap-5 ">
          <div className="flex flex-col gap-2  xl:w-3/4">
            <h1 className="text-sm underline font-serif">
              Login and Checkout faster
            </h1>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold tracking-wide ">
                Contact Details
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  We will use these details to keep you informed about your
                  delivery.
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-3 rounded-xl bg-transparent border border-black xl:w-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-medium ">Shipping Address</h1>
              <div className="flex flex-col gap-3 xl:flex-row xl:w-full ">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="py-2 px-3 rounded-xl bg-transparent border border-black xl:w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="py-2 px-3 rounded-xl bg-transparent border border-black xl:w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Find Delivery Address*"
                className="py-2 px-3 rounded-xl bg-transparent border border-black"
              />
              <p className="text-[10px]">
                Start typing your street address or zip code for suggestion
              </p>
              <input
                type="text"
                placeholder="Phone Number*"
                className="py-2 px-3 rounded-xl bg-transparent border border-black xl:w-1/2"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-base font-medium">Delivery Options</h1>
              <div className="flex flex-col gap-3">
                <div
                  className={`flex p-4 justify-between rounded-2xl cursor-pointer ${
                    deliveryOption === "standard"
                      ? "bg-[#F2F2F2] shadow-lg"
                      : "border border-black"
                  }`}
                  onClick={() => setDeliveryOption("standard")}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-medium">Standard Delivery</h1>
                    <p className="text-sm ">
                      Enter your address to see when you'll get your order
                    </p>
                  </div>
                  <div>
                    <h1 className="text-orange-600 font-bold">$6.00</h1>
                  </div>
                </div>
                <div
                  className={`flex p-4 justify-between rounded-2xl cursor-pointer ${
                    deliveryOption === "collect"
                      ? "bg-[#F2F2F2]  shadow-lg"
                      : "border border-black"
                  }`}
                  onClick={() => setDeliveryOption("collect")}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-medium">Collect in store</h1>
                    <p className="text-sm ">Pay now, collect in store</p>
                  </div>
                  <div>
                    <h1 className="font-bold">Free</h1>
                  </div>
                </div>
              </div>

              {/* box */}
              <div className="flex flex-col gap-3 ">
                <label className="flex items-center gap-2 font-Poppins ">
                  <input
                    type="checkbox"
                    className="form-checkbox border-none"
                  />
                  <span className="ml-3 block text-sm font-medium text-gray-700">
                    My billing and delivery information are the same
                  </span>
                </label>
                <label className="flex items-center gap-2 font-Poppins ">
                  <input
                    type="checkbox"
                    className="form-checkbox border-none"
                  />
                  <span className="ml-3 block text-sm font-medium text-gray-700">
                    I’m 13+ years old
                  </span>
                </label>
                <h1 className="text-sm font-semibold ">
                  Also want product updates with our newsletter?
                </h1>
                <label className="flex items-center gap-2 font-Poppins ">
                  <input
                    type="checkbox"
                    className="form-checkbox border-none"
                  />
                  <span className="ml-3 block text-sm font-medium text-gray-700">
                    Yes, I’d like to receive emails about exclusive sales and
                    more.
                  </span>
                </label>
              </div>
              <button
                onClick={handleReviewAndPay}
                className="bg-black py-4 rounded-lg text-white flex uppercase px-4 items-center justify-between xl:w-[202px] xl:py-2"
              >
                Review AND PAY <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* ordersummery */}
          <div className="flex flex-col-reverse xl:flex-col gap-3 xl:w-1/2  xl:sticky xl:top-24 xl:h-1/2 ">
            <div className="bg-[#F2F2F2] p-5 rounded-2xl">
              <h1 className="text-lg font-semibold tracking-wide ">
                Order Summary
              </h1>
              <div className="flex justify-between items-center mt-3">
                <h1 className="font-medium text-sm">{cart.length} ITEM</h1>
                <h1 className="text-sm">${price.toFixed(2)}</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-sm">Delivery</h1>
                <h1 className="text-sm">${deliveryCharge.toFixed(2)}</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-sm">Sale Tax</h1>
                <h1 className="text-sm">$7</h1>
              </div>
              <div className="flex justify-between items-center pt-2">
                <h1 className="font-medium ">Total</h1>
                <h1 className="text-sm">
                  ${(price + deliveryCharge + 7).toFixed(2)}
                </h1>
              </div>
            </div>
            <div className="bg-[#F2F2F2] p-5 rounded-2xl xl:h-[45vh] overflow-hidden overflow-y-auto">
              <h1 className="text-lg font-semibold tracking-wide  sticky top-0 bg-[#F2F2F2]">
                Order Details
              </h1>
              <div className="mt-3 flex flex-col justify-start items-start ">
                {cart.map((items) => {
                  return (
                    <div
                      className="flex justify-start items-start gap-3 "
                      key={items.id}
                    >
                      <img
                        onClick={() => navigate(`/bakery-list/${items.id}`)}
                        src={items.img}
                        alt=""
                        className="h-[8vh] object-contain w-[100px]"
                      />
                      <div className="flex flex-col justify-center items-start p-2">
                        <h1 className="text-sm font-Poppins">{items.name}</h1>
                        <div className="flex justify-between items-center w-[150px] xl:w-[340px] gap-5">
                          <p className="text-sm text-zinc-400">
                            Quantity: {items.quantity}
                          </p>
                          <button onClick={() => handleRemoveItem(items.id)}>
                            <Trash2 size={20} />
                          </button>
                        </div>
                        <p className="text-sm  font-bold ">
                          $ {(items.price * items.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
