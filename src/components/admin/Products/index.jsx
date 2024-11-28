import { Bell, CirclePlus, UserRound, X } from "lucide-react";
import React, { useState } from "react";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  // State to hold product data
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
    category: "",
  });

  // Handle changes for the input fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      // If the field is a file input, we need to handle it differently
      setProductData({
        ...productData,
        [name]: files[0], // Save the first selected file
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };

  // Function to clear the image selection
  const clearImage = () => {
    setProductData({
      ...productData,
      image: "", // Reset the image
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", productData);
    setProductData({
      image: "",
      name: "",
      price: "",
      description: "",
      category: "",
    });
  };

  const products = [
    {
      id: 1,
      name: "Chocolate Croissant",
      price: 2.5,
      img: "/birthday-cake-removebg-preview.png",
      rating: 4.7,
      discount: 0.5,
      description: "A flaky and buttery croissant filled with rich chocolate.",
      category: "Pastries",
    },
    {
      id: 2,
      name: "Blueberry Muffin",
      price: 1.75,
      img: "/Cake_Image.png",
      rating: 4.5,
      discount: 0.25,
      description:
        "Moist muffin packed with fresh blueberries and a hint of lemon.",
      category: "Pastries",
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: 5.0,
      img: "/cat (1).png",
      rating: 4.8,
      discount: 1.0,
      description:
        "Artisan sourdough with a crispy Crust and tangy flavor.",
      category: "Breads",
    },
    {
      id: 4,
      name: "Carrot Cake",
      price: 3.5,
      img: "/cat (3).png",
      rating: 4.6,
      description:
        "Moist and spiced carrot cake topped with cream cheese frosting.",
      category: "Cakes",
    },
    {
      id: 5,
      name: "Vanilla Cupcake",
      price: 2.0,
      img: "/tran1 (1).png",
      rating: 4.4,
      discount: 0.5,
      description:
        "Light and fluffy vanilla cupcake with a rich buttercream frosting.",
      category: "Cakes",
    },
    {
      id: 6,
      name: "Almond Biscotti",
      price: 1.5,
      img: "/cat (2).png",
      rating: 4.5,
      description: "Crunchy almond biscotti, perfect for dipping in coffee.",
      category: "Pastries",
    },
    {
      id: 7,
      name: "Raspberry Danish",
      price: 2.75,
      img: "/tran1 (2).png",
      rating: 4.6,
      description:
        "Flaky pastry filled with sweet raspberry jam and cream cheese.",
      category: "Pastries",
    },
    {
      id: 8,
      name: "Cheese Bread",
      price: 3.0,
      img: "/tran1 (3).png",
      rating: 4.3,
      discount: 0.3,
      description: "Savory bread made with a blend of cheeses and herbs.",
      category: "Breads",
    },
    {
      id: 9,
      name: "Chocolate Cake",
      price: 4.0,
      img: "/tran1 (4).png",
      rating: 4.9,
      description:
        "Rich and moist chocolate cake layered with velvety chocolate frosting.",
      category: "Cakes",
    },
    {
      id: 10,
      name: "Cinnamon Roll",
      price: 2.25,
      img: "/tran1 (5).png",
      rating: 4.8,
      description: "Soft and gooey cinnamon rolls drizzled with sweet icing.",
      category: "Pastries",
    },
  ];

  return (
    <div className="font-Poppins min-h-screen">
      <div className="xl:p-10 p-5">
        <div className="flex gap-10 justify-start items-start flex-col relative">
          <div className="flex justify-between w-full items-center ">
            <h1 className="text-2xl font-semibold">Product Details</h1>
            {/* <button
              className="bg-black text-white px-5 py-2 rounded-xl flex justify-center items-center gap-2"
            >
              <CirclePlus /> Add Product
            </button> */}
          </div>

          <div className="flex flex-col xl:flex-row gap-4 w-full justify-around items-center ">
            {/* Image Upload or Image Preview */}
            <div className="xl:h-[520px] xl:w-[430px] h-[320px] w-full border border-dashed border-blue-600 rounded-xl flex items-center justify-center">
              {productData.image ? (
                // If an image is selected, show the preview
                <div className="relative w-full h-full">
                  <img
                    src={URL.createObjectURL(productData.image)}
                    alt="Product Preview"
                    className="w-full h-full object-contain rounded-xl"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X />
                  </button>
                </div>
              ) : (
                // If no image is selected, show the file input
                <label
                  htmlFor="fileInput"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    id="fileInput"
                    name="image"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/jfif"
                    onChange={handleChange}
                    className="file:bg-gray-100 file:border-none file:rounded-xl hidden " // Hide input itself
                  />
                  <span className="text-blue-600">Select Image</span>
                </label>
              )}
            </div>

            <div className="xl:w-1/2 flex flex-col gap-3 w-full">
              {/* Product Name */}
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter product name"
                  required
                  className="mt-1 block w-full bg-white h-10 px-5 rounded-lg text-sm outline-none"
                />
              </div>

              {/* Product Price */}
              <div>
                <label
                  htmlFor="productPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  id="productPrice"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter product price"
                  required
                  className="mt-1 block w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm outline-none"
                />
              </div>

              {/* Product Description */}
              <div>
                <label
                  htmlFor="productDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="productDescription"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  required
                  className="mt-1 block w-full bg-white h-24 px-5 pr-16 rounded-lg text-sm outline-none py-5"
                ></textarea>
              </div>

              {/* Product Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Breads">Breads</option>
                  <option value="Pastries">Pastries</option>
                  <option value="Cakes">Cakes</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-black text-white py-2 px-5 rounded-xl mt-5"
              >
                Add Product
              </button>
            </div>
          </div>

          <div className="flex w-full sticky top-0">
            <div className="bg-white w-full h-screen rounded-xl p-5  overflow-hidden overflow-y-scroll">
              <h1 className="text-2xl mb-4">Product List</h1>

              {/* Table for Product Data */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto ">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="p-3">ID</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="hover:bg-gray-50 border-b"
                      >
                        <td className="p-3 ">{product.id}</td>
                        <td className="p-3 flex items-center">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded-full mr-2"
                          />
                          {product.name}
                        </td>
                        <td className="p-3">{product.category}</td>
                        <td className="p-3">${product.price.toFixed(2)}</td>
                        <td className="p-3">{product.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
