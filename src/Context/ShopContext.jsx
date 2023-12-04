import React, { createContext, useState } from "react";
import all_menu from "../../public/assets/menu/all_menu";

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_menu.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const ShopContextProvider = (props) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());

  // const addToCart = (cardId) => {
  //   setCartItems((prev) => ({ ...prev, [cardId]: prev[cardId] + 1 }));
  //   console.log(cartItems)
  // };

  // const removeFromCart = (cardId) => {
  //   setCartItems((prev) => ({ ...prev, [cardId]: prev[cardId] - 1 }));
  // };
  // const contextValue = { all_menu, cartItems, addToCart, removeFromCart };

  const contextValue = {all_menu}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
