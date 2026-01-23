import React, { useEffect, useRef, useState } from "react";
import {FaFilter} from 'react-icons/fa'
import FilterSlidbar from "../components/Products/FilterSlidbar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const sideBarRef=useRef(null)
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen)
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=2" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=2" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=3" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=4" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=5" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=6" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=7" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 120,
          image: [{ url: "https://picsum.dev/500/500?random=8" }],
        },
      ];
      setProducts(fetchProducts)
    },1000);
  }, []);

const handleClickOutside=(e)=>{
    // closing sidebar if user click outside
    if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
        setIsSidebarOpen(false)
    }

}
useEffect(() => {
  // Add listener
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup function to remove listener when component unmounts
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []); // empty dependency = run only once


  return <div className="flex flex-col lg:flex-row">
    {/* mobile filter row */}
    <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2"/> Filter
    </button>

    {/* filter slidebar */}
    <div ref={sideBarRef} className={`${isSidebarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0
    left-0 w-64 z-50  bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0  `}>
      
        <FilterSlidbar/>
        
    </div>
    <div className="grow  p-4">
            <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort option */}
        <SortOptions/>
        {/* ProductGrid */}
        <ProductGrid products={products}/>

    </div>

  </div>;
}
