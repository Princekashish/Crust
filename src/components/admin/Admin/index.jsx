import { AlignJustify, Bell, Search, UserRound } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the sidebar, close the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-Poppins">
      <div className="flex flex-col items-center">
        {/* Sidebar */}
        <div className="flex bg-white w-full justify-between items-center p-6">
          <div className="flex justify-center items-center gap-5">
            <AlignJustify onClick={() => setIsOpen((prev) => !prev)} />
            <h1 className="text-2xl leading-none tracking-tighter font-bold text-orange-600">
              Crusty
            </h1>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <Search />
            <Bell />
            <UserRound />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col w-full ">
          <Outlet />
        </div>
      </div>

      {/* Sidebar menu (overlay) */}
      {isOpen && (
        <div className="bg-black/60 fixed top-0 w-full h-screen">
          <div
            ref={sidebarRef} // Attach the ref to the sidebar div
            className="flex flex-col gap-3 p-5 h-screen text-xl bg-white xl:w-[320px]"
          >
            <h1 className="text-2xl leading-none tracking-tighter mt-2 font-bold text-orange-600">
              Crusty
            </h1>
            {/* Dashboard Link */}
            <NavLink
              to="/admin/dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 bg-[#F2F2F2] "
                  : "rounded-lg p-2 hover:bg-gray-100 "
              }
            >
              Dashboard
            </NavLink>
            {/* Orders Link */}
            <NavLink
              to="/admin/order"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 bg-[#F2F2F2] "
                  : "rounded-lg p-2 hover:bg-gray-100 "
              }
            >
              Orders
            </NavLink>
            {/* Products Link */}
            <NavLink
              to="/admin/product"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg p-2 bg-[#F2F2F2] "
                  : "rounded-lg p-2 hover:bg-gray-100 "
              }
            >
              Products
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
