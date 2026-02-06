import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import {Toaster} from "sonner";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="collections/:collection" element={<CollectionPage/>}/>
            <Route path="products/:id" element={<ProductDetails/>}/>
            <Route path="product/:id" element={<ProductDetails/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
            <Route path="order/:id" element={<OrderDetailsPage/>}/>
          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
