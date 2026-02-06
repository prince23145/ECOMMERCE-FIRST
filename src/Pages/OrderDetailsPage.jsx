import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      ShippingAddress: { city: "Delhi", Country: "India" },
      OrderItems: [
        {
          _id: 1,
          name: "Stylish Jacket",
          price: 120,
          quantity: "1",
          image: "https://picsum.dev/500/500?random=2",
        },
        {
          _id: 2,
          name: "jeans",
          price: 150,
          quantity: "2",
          image: "https://picsum.dev/500/500?random=1",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className=" max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Order Details</h2>
      {!orderDetails ? (
        <p> No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8 ">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order Id: #{orderDetails._id}
              </h3>
              <p className="text-gray-600 ">
                {new Date(orderDetails.createdAt).toDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Aproved" : "Pending"}
              </span>
              <span
                className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>
          {/* customer shipping info */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method :{orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "UnPaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method :{orderDetails.shippingMethod}</p>
              <p>Address:{" " } {`${orderDetails.ShippingAddress.city}, ${orderDetails.ShippingAddress.Country}` }</p>
            </div>
          </div>
        {/* product list  */}
        
        </div>

      )}
    </div>
  );
}
