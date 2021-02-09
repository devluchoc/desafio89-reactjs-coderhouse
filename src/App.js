import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import Form from "./Form";
import ShopContextProvider from "./Context";
import ShopingContextProvider from "./ShopContext";
import "./style.css";

export default function ShopContainer() {
  return (
    <ShopingContextProvider>
      <ShopContextProvider>
        <Shop />
        <Cart />
        <Form />
      </ShopContextProvider>
    </ShopingContextProvider>
  );
}
