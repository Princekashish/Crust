import React from "react";

export default function Order() {
  const orders = [
    {
      Order: "ORD12345",
      Customer: "Alice Johnson",
      Product: "Laptop",
      Status: "Shipped",
      Amount: 1200.5,
    },
    {
      Order: "ORD12346",
      Customer: "Bob Smith",
      Product: "Smartphone",
      Status: "Processing",
      Amount: 799.99,
    },
    {
      Order: "ORD12347",
      Customer: "Charlie Davis",
      Product: "Wireless Headphones",
      Status: "Delivered",
      Amount: 150.75,
    },
  ];
  return (
    <div className="font-Poppins min-h-screen">
      <div className=" xl:p-5 p-5">
        <div className=" flex gap-10 flex-col justify-start items-start">
          <h1 className="text-2xl">Recent Orders</h1>
          <div className="bg-white w-full p-5 rounded-xl overflow-hidden overflow-x-scroll xl:overflow-x-hidden">
            <table className=" w-full bg-white  ">
              <thead className="border-b p-2">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Order
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Product
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
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
