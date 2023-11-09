import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCart([]);
  }
  
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const totalProduct = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, calculateTotalPrice, totalProduct }}>
      {children}
    </CartContext.Provider>
  );
};