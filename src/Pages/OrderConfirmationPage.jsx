import React from "react";
const Checkout = {
  _id: "12354",
  createdAt: new Date(),
  CheckoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: "1",
      image: "https://picsum.dev/200?random=1",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "white",
      size: "M",
      price: 250,
      quantity: "1",
      image: "https://picsum.dev/200?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Alipur street",
    city: "Delhi",
    country: "India",
  },
};
export default function OrderConfirmationPage() {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 3); //add 3 days

    return orderDate.toLocaleDateString("en-IN");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order !
      </h1>

      {Checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order id and date  */}
            <div>
              <h2 className="text-xl font-semibold">Order ID:{Checkout._id}</h2>
              <p className="text-gray-500">
                Order Date:
                {new Date(Checkout.createdAt).toLocaleDateString("en-IN")}
              </p>
            </div>
            {/* estimated delivery  */}
            <div>
              <p className="text-emerald-700 text-sm ">
                Estimated Delivery:
                {calculateEstimatedDelivery(Checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* order items  */}
          <div className="mb-20">
            {Checkout.CheckoutItems.map((items) => (
              <div key={items.productId} className="flex items-center mb-4">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold ">{items.name}</h4>
                  <p className=" text-sm text-gray-500 ">
                    {items.color}|{items.size}
                  </p>
                </div>
                <div className="ml-auto text-right "> 
                    <p className="text-md ">${items.price}</p>
                    <p className="text-sm  text-gray-500"> Qty:{items.quantity}</p>
                

                </div>
              </div>
            ))}
          </div>
          {/* payment and Delivery info */}

            <div className="grid grid-cols-2 gap-8">
                <div >
                    <h4 className="text-lg font-semibold mb-2 ">Payment</h4>
                    <p className="text-gray-600"> PayPal</p>
                </div>
                {/* delivery info  */}
                <div >
                    <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                    <p  className="text-gray-600">{Checkout.shippingAddress.address}</p>
                    <p className="text-gray-600">{Checkout.shippingAddress.city},{" "} {Checkout.shippingAddress.country}</p>
                </div>
            </div>

        </div>
      )}
    </div>
  );
}
