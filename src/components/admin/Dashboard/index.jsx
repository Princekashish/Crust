import { ShoppingCart } from "lucide-react";
import React from "react";

export default function Dashboard() {
  const Dashboardviews = [
    {
      text: "NewOrder",
      icon: <ShoppingCart />,
      total: "+12",
      growth: "+19% from last month",
    },
    {
      text: "Total Order",
      icon: <ShoppingCart />,
      total: "+12,234",
      growth: "+19% from last month",
    },
  ];

  const orders = [
    {
      Order: "ORD1001",
      Customer: "Alice Johnson",
      Product: "Chocolate Cake",
      Status: "Baked",
      Amount: 15.75,
    },
    {
      Order: "ORD1002",
      Customer: "Bob Smith",
      Product: "Croissants",
      Status: "Pending",
      Amount: 5.99,
    },
    {
      Order: "ORD1003",
      Customer: "Charlie Davis",
      Product: "Assorted Pastries",
      Status: "Delivered",
      Amount: 20.5,
    },
    {
      Order: "ORD1004",
      Customer: "David Brown",
      Product: "Vanilla Cupcakes",
      Status: "Baked",
      Amount: 12.25,
    },
  ];

  return (
    <div className="font-Poppins min-h-screen">
      <div className=" xl:p-5 p-5">
        <div className=" flex gap-10 flex-col justify-start items-start">
          <h1 className="text-2xl">Dashboard</h1>
          <div className="flex flex-col xl:flex-row  w-full  justify-start items-center gap-10">
            {Dashboardviews.map((items, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl border flex flex-col items-start justify-between p-4 gap-2  xl:h-[15vh] xl:w-[320px] w-full bg-white  shadow-sm"
                >
                  <h1 className="text-start w-full text-base font-semibold">
                    {items.text}
                  </h1>
                  <div className="flex justify-between items-center gap-5">
                    <h1 className="bg-blue-500 text-white p-2 rounded-xl">
                      {items.icon}
                    </h1>
                    <h1 className="text-xl"> {items.total}</h1>
                  </div>
                  <h1 className="text-xs w-full text-end">{items.growth}</h1>
                </div>
              );
            })}
          </div>
          <div className="bg-white w-full p-5 rounded-xl overflow-hidden overflow-x-scroll xl:overflow-x-hidden">
            <h1 className="font-semibold ">Recent Orders</h1>
            <table className=" w-full bg-white  ">
              <thead className="border-b p-2">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Order
                  </th>
                  <th className="py-3 xl:px-6 text-left text-sm font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="py-3 xl:px-6 text-left text-sm font-medium text-gray-600">
                    Product
                  </th>
                  <th className="py-3 xl:px-6 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="py-3 xl:px-6 text-left text-sm font-medium text-gray-600">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={`border-b ${index % 2 === 0 ? "" : "bg-white"}`}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-700">
                      {order.Order}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {order.Customer}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {order.Product}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {order.Status}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      ${order.Amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
