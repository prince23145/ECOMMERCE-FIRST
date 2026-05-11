import React from "react";

export default function OrderManagment() {
  const orders = [
    {
      _id: 65665,
      user: {
        name: "Prince",
      },
      totalPrice: 451,
      status: "Processing",
    },
  ];
  const handelStausChange = (orderid, status) => {
    console.log({order:orderid,status})
  };

  return (
    <div className="max-w-7xl  mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-6">Order Managment</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order_Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Total_Price</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className=" text-left text-gray-800  min-w-full">
            {orders.length > 0
              ? orders.map((order) => (
                  <tr key={order._id}>
                    <td className="py-3 px-4"># {order._id}</td>
                    <td className="py-3 px-4">{order.user?.name}</td>
                    <td className="py-3 px-4 ">$ {order.totalPrice}</td>
                    <td className="py-3 px-4">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handelStausChange(order._id, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block focus:bordblue500 p-2.5"
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Deleverd">Delevered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="p-4"  >
                      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={()=>handelStausChange(order._id,"Delivered")}>Mark as Delivered </button>
                    </td>
                  </tr>
                ))
              : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500"> No Order Found</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
