import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggelCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggelNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  return (
    <>
      <nav className="conatiner  mx-auto flex item-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* center navigation link */}
        <div className="hidden md:flex space-x-6">
          <Link to="/collections/all" className="text-gray-700 text-sm font-medium uppercase ">
            MEN
          </Link>
          <Link to="#" className="text-gray-700 text-sm font-medium uppercase ">
            WOMEN
          </Link>
          <Link to="#" className="text-gray-700 text-sm font-medium uppercase ">
            TOPWEAR
          </Link>
          <Link to="#" className="text-gray-700 text-sm font-medium uppercase ">
            BOTTOM WEAR
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile" className=" hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-70000" />
          </Link>
          <button
            onClick={toggelCartDrawer}
            className="relative hover text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer " />
            <span className="absolute  -top-1 bg-[#ea2e0e] text-white text-xs px-2 rounded-full py-0.5">
              4
            </span>
          </button>

          {/* search  */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggelNavDrawer} className="md:hidden cursor-pointer ">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggelCartDrawer={toggelCartDrawer} />

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full  bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}  `}
      >
        <div onClick={toggelNavDrawer} className="flex justify-end p-4">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              rel="#"
              onClick={toggelNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              rel="#"
              onClick={toggelNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Wommen
            </Link>
            <Link
              rel="#"
              onClick={toggelNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              rel="#"
              onClick={toggelNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
