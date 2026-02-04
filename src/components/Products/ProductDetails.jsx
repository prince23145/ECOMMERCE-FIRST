import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

export default function ProductDetails() {
  const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    orignalPrice: 150,
    description: "this is a stylish jacket perfect for any occasion",
    brand: "fashionBrand",
    material: "leather",
    sizes: ["S", "M", "L", "XL"],
    color: ["Black", "White", "Blue"],
    images: [
      {
        url: "https://picsum.dev/500/500?random=1",
        altText: "Stylist Jacket  1",
      },
      {
        url: "https://picsum.dev/500/500?random=2",
        altText: "Stylist Jacket 2",
      },
    ],
  };

  const similarProducts=[
    { 
      _id:1,
      name: "Products 1",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=2"}]
    },
    { 
      _id:2,
      name: "Products 2",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=2"}]
    },
    { 
      _id:3,
      name: "Products 3",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=3"}]
    },
    { 
      _id:4,
      name: "Products 4",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=4"}]
    },
  ]
  const [mainImage, setMainImage] = useState(" ");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setquantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("please select color and size before add to cart", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product Added Successfully", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setquantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setquantity((prev) => prev - 1);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row ">
          {/* leftcolumn */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                key={index}
                alt={image.altText || `thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* main image */}
          <div className=" mb:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="main product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnail */}

          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                key={index}
                alt={image.altText || `thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* right side */}

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 ">
              {selectedProduct.name}
            </h1>
            <p className=" text-lg text-gray-800 mb-1 line-through">
              {selectedProduct.orignalPrice &&
                `${selectedProduct.orignalPrice}`}
            </p>
            <p className=" text-xl text-gray-500 mb-2">
              {selectedProduct.price}
            </p>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <div className="mb-4 ">
              <p className="text-gray-700 ">color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((sizes) => (
                  <button
                    key={sizes}
                    className={`px-4 py-2 rounded border cursor-pointer ${selectedSize === sizes ? "bg-black text-white" : ""}`}
                    onClick={() => setSelectedSize(sizes)}
                  >
                    {sizes}
                  </button>
                ))}
              </div>
            </div>

            <div className=" mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1  bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">1</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              disabled={isButtonDisabled}
              onClick={handleAddToCart}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50 " : "hover:bg-gray-900"}`}
            >
              {isButtonDisabled ? "Adding....." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4"> Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
}
