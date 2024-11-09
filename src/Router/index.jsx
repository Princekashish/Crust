import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Layout from "../container";
import HomePage from "../page/HomePage";
import About from "../components/About";
import Contact from "../components/Contact";
import Product from "../page/Products";
import ViewCart from "../components/ViewCart";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Listing from "../page/Listing";
import Order from "../components/Order";
import Admin from "../components/admin/Admin";
import Dashboard from "../components/admin/Dashboard";
import AdminOrder from "../components/admin/Order";
import AdminProduct from "../components/admin/Products";
const route = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/bakery-list", Component: Listing },
      { path: "/bakery-list/:id", Component: Product },
      { path: "/bakery-list/viewcart", Component: ViewCart },
      { path: "/order_product", Component: Order },
      { path: "/login", Component: Login },
      { path: "/singup", Component: Signup },
    ],
  },
  {
    path: "/admin",
    Component: Admin,
    children:[
      {path:'/admin/dashboard',Component:Dashboard},
      {path:'/admin/order',Component:AdminOrder},
      {path:'/admin/product',Component:AdminProduct},
    ]

  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default Router;
