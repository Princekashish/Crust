import { motion } from "framer-motion";
import { Menu, Minus, Plus, ShoppingBasket, ShoppingCart, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  productAdd,
  productRemove,
  selectCartTotal,
} from "../../Redux/feature/Cart/CartSlice";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartisOpen, setCartisOpen] = useState(false);
  const [userisOpen, setUserisOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const cart = useSelector((pre) => pre.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userisOpen);

  const price = useSelector(selectCartTotal);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleviewcart = () => {
    setCartisOpen(false);
    navigate("/bakery-list/viewcart");
  };

  const menu = [
    { text: "Home" },
    { text: "About us", link: "/about" },
    { text: "Bakery", link: "/bakery-list" },
    { text: "Contact us", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollTop(currentScrollTop);

      // Toggle scrolled styling based on scroll position
      if (currentScrollTop > 200) {
        setIsScrolled(true);
      } else if (currentScrollTop < 200) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.div
      // initial={{ y: 0 }}
      // animate={{ y: isVisible ? 0 : -40 }} // Disable animation based on visibility
      // transition={{ duration: 0.3 }}
      className={` fixed top-0 w-full z-50 `}
    >
      {/* mobile */}
      <div
        className={`flex justify-between items-center p-6 bg-white relative ${
          isOpen ? "rounded-t-3xl" : "rounded-b-3xl"
        } md:hidden `}
      >
        <div onClick={toggle} className="transition duration-500 ease-in-out">
          {isOpen ? (
            <h1 className="transform scale-100">
              <X />
            </h1>
          ) : (
            <h1 className="transform scale-100">
              <Menu />
            </h1>
          )}
        </div>
        <div>
          <Link to={"/"}>
            <h1 className="text-lg font-bold tracking-wide">Bakery Bound</h1>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          <User onClick={() => setUserisOpen((pre) => !pre)} />
          <ShoppingBasket onClick={() => setCartisOpen((pre) => !pre)} />
        </div>
      </div>

      {/* disktop */}
      <div className="hidden md:block ">
        <div className="flex justify-between items-center p-5 bg-white rounded-xl">
          <Link to={"/"}>
            <h1 className="text-lg font-bold tracking-wide">Bakery Bound</h1>
          </Link>
          <div className="flex justify-center items-center gap-5">
            {menu.map((item, index) => (
              <Link key={index} to={item.link}>
                <h1 key={index}>{item.text}</h1>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3 relative">
            <User
              onClick={() => setUserisOpen((pre) => !pre)}
              className="cursor-pointer"
            />
            <ShoppingBasket
              onClick={() => {
                setCartisOpen((pre) => !pre);
                setUserisOpen(false);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* mobile */}

      {isOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="h-[30vh] bg-white rounded-b-2xl "
        >
          <div className="flex justify-center items-center gap-5 flex-col">
            {menu.map((item, index) => (
              <Link key={index} to={item.link}>
                <h1
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-Poppins"
                >
                  {item.text}
                </h1>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {cart.length === 0 ? (
        ""
      ) : (
        <h1 className="flex justify-center items-center bg-red-600 text-sm rounded-lg h-[20px] w-[20px] text-white absolute right-3  top-3 ">
          {cart.length}
        </h1>
      )}

      {cartisOpen && (
        <div className="xl:p-5  bg-black/50  min-h-[100vh]  fixed top-0 left-0 right-0 bottom-0 overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45 }}
            className=" bg-white h-[70vh] absolute -bottom-10 w-full  rounded-t-3xl xl:bottom-0 xl:top-0 xl:w-1/2 xl:h-screen xl:right-0   "
          >
            <div className="p-5 ">
              <div className="flex justify-between items-center ">
                <h1 className="text-xl font-medium ">Your Cart</h1>
                <X
                  onClick={() => setCartisOpen((pre) => !pre)}
                  className="cursor-pointer"
                />
              </div>
              <div className=" relative xl:h-[85vh] h-[50vh] overflow-hidden overflow-y-auto ">
                {cart.length === 0 ? (
                  <div className="flex flex-col justify-center items-center mt-14">
                    <h1 className="text-2xl leading-none text-zinc-400">
                      Add Some Breade 🥲
                    </h1>
                    <img
                      src="/contactchef.png"
                      alt=""
                      className="xl:h-[550px] pointer-events-none"
                    />
                  </div>
                ) : (
                  <div className="mt-7     xl:p-5 ">
                    <div className="flex flex-col justify-center gap-1   ">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-zinc-50 rounded-lg h-[12vh] gap-3 "
                        >
                          <img
                            src={item.img}
                            alt=""
                            className="h-[10vh] object-contain w-[100px]"
                          />
                          <div>
                            <h1 className="text-sm font-Poppins">
                              {item.name}
                            </h1>
                            <p className="text-xs text-zinc-400">
                              {item.price} x {item.quantity}
                            </p>
                          </div>
                          <div className="flex flex-col justify-end items-end p-1 gap-1">
                            <div className="flex justify-center items-center bg-zinc-100 border px-1 gap-2 py-1 rounded-lg">
                              <button
                                onClick={() => {
                                  dispatch(productRemove(item.id));
                                }}
                                className="text-lg font-medium"
                              >
                                <Minus size={15} />
                              </button>
                              <h1 className="text-sm font-medium">
                                {item.quantity}
                              </h1>
                              <button
                                onClick={() => dispatch(productAdd(item))}
                                className="text-lg font-medium"
                              >
                                <Plus size={15} />
                              </button>
                            </div>
                            <h1 className="text-xs text-end pr-2 leading-none tracking-tighter">
                              $ {(item.price * item.quantity).toFixed(2)}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-green-800 sticky bottom-0    mt-5    rounded-2xl">
                      <div className="p-2">
                        <div className="flex justify-between items-center w-full gap-3  text-white rounded-xl p-2">
                          <div className="flex gap-2 justify-center items-center ">
                            <h1 className="text-xs">Total: </h1>
                            <h1 className="text-base font-medium">
                              $ {price.toFixed(2)}
                            </h1>
                          </div>

                          <button
                            onClick={handleviewcart}
                            className="text-base font-medium flex justify-center items-center"
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* userlogginde */}
      {userisOpen && (
        <div
          onClick={() => setUserisOpen(false)}
          className="bg-white absolute  right-16 min-h-[5vh] p-2 flex-col flex gap-4   rounded-b-lg w-[120px] text-center duration-500 transition ease-in-out"
        >
          {userLoggedIn ? (
            <div className="flex flex-col gap-3">
              <Link to={'/order_product'}>
              <h1 className="font-semibold  flex justify-center items-center gap-2"><ShoppingCart /> Order</h1>
              </Link>
              <h1 className="font-semibold ">Log out</h1>
            </div>
          ) : (
            <Link to={"/login"}>
              <h1 className="font-semibold ">Login</h1>
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
