import React from "react";
import { FaBoxOpen, FaClipboard, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
const navigate=useNavigate()
    const handelLogout=()=>{
        navigate("/")
    }


  return (
    <div className="p-6  ">
      <div className="mb-6 ">
      <h2 className="text-2xl font-medium">Rabbit</h2>
      </div>
      <h2>
        <Link to="/admin" className="text-xl font-medium mb-6 text-center">
          Admin Dashboard
        </Link>
        </h2>   
     
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      
      </nav>

      <div className="mt-6">
        <button onClick={handelLogout} className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 ">
            <FaSignOutAlt/>
            <span>LogOut</span>
        </button>
      </div>
    </div>
  );
}
