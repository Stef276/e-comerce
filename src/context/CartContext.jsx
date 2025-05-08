import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existing = cart.find(prod => prod.id === item.id);
    if (existing) {
      existing.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = id => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + (Number(item.precio) * Number(item.quantity)), 0);
  };

  const cantidadTotal = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
};
