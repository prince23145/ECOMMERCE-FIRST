import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
export default function Navbar() {
const [drawerOpen,setDrawerOpen]=useState(false);
  
  const toggelCartDrawer= ()=>{
    setDrawerOpen(!drawerOpen);
  }

  return (
   <>
   <nav className='conatiner  mx-auto flex item-center justify-between py-4 px-6'>
    <div>
        <Link to='/' className='text-2xl font-medium'>
        Rabbit
        </Link>
    </div>
    {/* center navigation link */}
    <div className='hidden md:flex space-x-6'>
        <Link to="#" className='text-gray-700 text-sm font-medium uppercase '>
            MEN
        </Link>
        <Link to="#" className='text-gray-700 text-sm font-medium uppercase '>
            WOMEN
        </Link>
        <Link to="#" className='text-gray-700 text-sm font-medium uppercase '>
            TOPWEAR
        </Link>
        <Link to="#" className='text-gray-700 text-sm font-medium uppercase '>
            BOTTOM WEAR
        </Link>
</div>

    <div className='flex items-center space-x-4'>
        <Link to="/profile" className=' hover:text-black'>
        <HiOutlineUser className='h-6 w-6 text-gray-70000'/>
        </Link>
        <button onClick={toggelCartDrawer} className='relative hover text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
            <span className='absolute  -top-1 bg-[#ea2e0e] text-white text-xs px-2 rounded-full py-0.5'>4</span>
        </button>

        {/* search  */}
        <div className='overflow-hidden'>
        <SearchBar/>
        </div>

        <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
        </button>
    </div>
   </nav>
   <CartDrawer drawerOpen={drawerOpen} toggelCartDrawer={toggelCartDrawer}/>
   </>
  )
}
