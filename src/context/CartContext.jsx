import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const API_URL = "http://localhost:3000/cart";

  // Cargar carrito desde API
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Error cargando carrito:", err));
  }, []);

  // Agregar al carrito
  const addToCart = async (product) => {
    try {
      // Buscar si ya existe en el carrito usando productId
      const existing = cartItems.find((item) => item.productId === product.id);

      if (existing) {
        // Aumentar cantidad
        const updated = { ...existing, quantity: existing.quantity + 1 };
        await axios.put(`${API_URL}/${existing.id}`, updated);

        setCartItems((items) =>
          items.map((i) => (i.id === existing.id ? updated : i))
        );
      } else {
        // Crear un nuevo item
        const newItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };

        const res = await axios.post(API_URL, newItem);

        setCartItems((items) => [...items, res.data]);
      }
    } catch (err) {
      console.error("Error agregando:", err);
    }
  };

  // Eliminar del carrito
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCartItems((items) => items.filter((i) => i.id !== id));
    } catch (err) {
      console.error("Error eliminando:", err);
    }
  };

  // Actualizar cantidad
  const updateQuantity = async (id, quantity) => {
    try {
      const existing = cartItems.find((i) => i.id === id);
      const updated = { ...existing, quantity };

      await axios.put(`${API_URL}/${id}`, updated);

      setCartItems((items) =>
        items.map((i) => (i.id === id ? updated : i))
      );
    } catch (err) {
      console.error("Error actualizando cantidad:", err);
    }
  };

  const clearCart = async () => {
    try {
      for (const item of cartItems) {
        await axios.delete(`${API_URL}/${item.id}`);
      }
      setCartItems([]);
    } catch (err) {
      console.error("Error vaciando carrito:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}