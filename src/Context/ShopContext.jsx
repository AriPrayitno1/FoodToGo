import React, { createContext, useState } from "react";
import all_menu from "../assets/menu/all_menu";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_menu.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (cardId) => {
    setCartItems((prev) => ({ ...prev, [cardId]: prev[cardId] + 1 }));
  };

  const removeFromCart = (cardId) => {
    setCartItems((prev) => ({ ...prev, [cardId]: prev[cardId] - 1 }));
  };
  const contextValue = { all_menu, cartItems, addToCart, removeFromCart };

  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
