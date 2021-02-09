import React, { useState, useEffect, createContext } from "react";
import json from "./data.json";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = productId => {
    const prodAlCart = products.filter(prod => prod.id === productId)[0];
    if (!prodAlCart.quantity) {
      console.log("Funciono en true");
      prodAlCart.quantity = 1;
      setCart([...cart, prodAlCart]);
    } else {
      cart[cart.indexOf(prodAlCart)].quantity++;
      setCart([...cart]);
    }
  };

  const deleteFromCart = productId => {
    const prodFueraDeCart = cart.filter(prod => prod.id !== productId);
    setCart(prodFueraDeCart);
  };

  const deleteAll = () => setCart([]);

  useEffect(() => {
    setProducts(json);
    console.log("Productos:");
    console.log(products);
    console.log("carrito:");
    console.log(cart);
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        cart,
        products,
        addToCart,
        deleteFromCart,
        deleteAll
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
