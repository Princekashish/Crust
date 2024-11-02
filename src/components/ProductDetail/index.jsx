import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Bakeryss from "../../../Bakery.json";
import { productAdd } from "../../Redux/feature/Cart/CartSlice";
import ScrollTop from "../../utils/Scrolltop";
import { ChevronRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Bakeryss.find((items) => items.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast.success("Succers fully added", {
      position: "bottom-left",
    });
    setTimeout(() => {
      dispatch(productAdd(product));
    }, 1000);
  };
  return (
    <div className=" font-Poppins min-h-screen relative">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5 ">
        <div className="mt-20  xl:w-full  xl:mt-20 xl:gap-2 flex flex-col ">
          {/* productinfo */}
          <div className="xl:flex xl:justify-around items-center xl:h-[70vh]  rounded-3xl">
            <div className="xl:h-[500px]  xl:w-[630px] flex justify-center ">
              <img
                src={product.img}
                alt=""
                className="xl:h-[460px] h-[320px]  object-contain"
              />
            </div>
            <div className=" xl:p-5  flex flex-col justify-center items-start   xl:w-1/2 gap-4 h-full  xl:mt-10 ">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <h1 className="text-sm font-Poppins ">{product.description}</h1>
              <div className="flex gap-2 font-Poppins justify-start items-center">
                <h1 className="text-sm xl:text-base font-light line-through">
                  $ {product.discount || 0.1}
                </h1>
                <h1 className="text-lg">$ {product.price}</h1>
              </div>

              <div className="w-full xl:w-1/2 ">
                <button
                  onClick={handleAddToCart}
                  className="bg-black text-white px-12 py-3 rounded-2xl w-full  xl:w-full"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {/* recemondation */}
          <div className="flex justify-between items-end xl:items-center ">
            <h1 className="text-xl xl:text-2xl  xl:font-bold border-l-2 border-black px-3 mt-10">
              Best Recommendations
            </h1>
            <Link to={"/bakery-list"}>
              <h1 className="underline font-Poppins xl:text-sm text-xs flex justify-center items-center ">
                more <ChevronRight size={15} />
              </h1>
            </Link>
          </div>
          <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-3 xl:h-[40vh] gap-5 mt-3">
            {Bakeryss.sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 group relative "
                >
                  <img
                    onClick={() => navigate(`/bakery-list/${item.id}`)}
                    src={item.img}
                    alt={item.name}
                    className="h-[200px] object-contain "
                  />
                  <div className="xl:group-hover:bg-gray-50 xl:duration-500 xl:p-5 xl:rounded-b-3xl">
                    <h1 className="text-xs font-medium xl:text-base xl:font-Poppins">
                      {item.name}
                    </h1>
                    <div className="flex justify-between w-full items-end">
                      <h1 className="text-xs absolute top-0 right-0 px-1 py-1 bg-[#d9dbdb] xl:bg-white xl:font-Poppins font-medium rounded-l-lg">
                        ⭐ {item.rating}
                      </h1>
                      <h1 className="text-sm font-medium xl:text-base xl:font-Poppins">
                        ${item.price}
                      </h1>
                      <button
                        onClick={() => dispatch(productAdd(item))}
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
      </div>
      <Toaster />
    </div>
  );
}
