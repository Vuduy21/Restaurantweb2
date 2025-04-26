import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(x => x.name === item.name);
      if (existing) {
        return prev.map(x =>
          x.name === item.name ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems(prev => {
      return prev
        .map(x =>
          x.name === item.name ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter(x => x.quantity > 0);
    });
  };

  const deleteFromCart = (item) => {
    setCartItems(prev => prev.filter(x => x.name !== item.name));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

