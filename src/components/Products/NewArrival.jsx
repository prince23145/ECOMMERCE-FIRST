import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewArrival() {
  const scrollref = useRef(null);
  const [isDragging, SetIsDragging] = useState(false);
  const [startx, setStartX] = useState(0);
  const [scrollLeft, serScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [cantScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollref.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  const updateScrollButton = () => {
    const container = scrollref.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);
    }
  };
  useEffect(() => {
    const container = scrollref.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }
  });

  const newArrivals = [
    {
      _id: "1",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=1",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylist jeans",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=2",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=3",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=4",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=5",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=6",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=7",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylist jacket",
      price: 200,
      image: [
        {
          url: "https://picsum.dev/500/500?random=8",
          altText: "Stylist Jacket",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto text-center mb-12 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p>
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* scrllbutton */}
        <div className="absolute right-0 bottom-[-30] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border cursor-pointer ${canScrollLeft ? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button 
          onClick={() => scroll("right")}
            disabled={!cantScrollRight}
         className={`p-2 rounded border cursor-pointer ${cantScrollRight ? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable content */}
      <div
        ref={scrollref}
        className="container mx-auto overflow-x-auto flex space-x-6 scroll-smooth  relative"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[28%] relative"
          >
            <img
              src={product.image[0]?.url}
              alt={product.image[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg block"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
