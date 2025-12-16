import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const API_CART = "http://localhost:3000/api/cart"; // URL completa del carrito

  // Cargar carrito al iniciar la app
  useEffect(() => {
    axios
      .get(API_CART)
      .then((res) => {
        console.log("CARRITO recibido:", res.data);
        setCartItems(res.data);
      })
      .catch((err) => console.error("Error cargando carrito:", err));
  }, []);

  // Agregar producto al carrito
  const addToCart = async (product) => {
    try {
      const existing = cartItems.find((item) => item.productId === product._id);

      if (existing) {
        const res = await axios.put(`${API_CART}/${existing._id}`, {
          quantity: existing.quantity + 1,
        });

        setCartItems((items) =>
          items.map((i) => (i._id === existing._id ? res.data : i))
        );
      } else {
        const res = await axios.post(API_CART, {
          productId: product._id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });

        setCartItems((items) => [...items, res.data]);
      }
    } catch (err) {
      console.error("Error agregando al carrito:", err);
    }
  };

  // Eliminar item
  const removeFromCart = async (_id) => {
    try {
      await axios.delete(`${API_CART}/${_id}`);
      setCartItems((items) => items.filter((i) => i._id !== _id));
    } catch (err) {
      console.error("Error eliminando del carrito:", err);
    }
  };

  // Actualizar cantidad
  const updateQuantity = async (_id, quantity) => {
    if (quantity < 1) return;
    try {
      const res = await axios.put(`${API_CART}/${_id}`, { quantity });
      setCartItems((items) =>
        items.map((i) => (i._id === _id ? res.data : i))
      );
    } catch (err) {
      console.error("Error actualizando cantidad:", err);
    }
  };

  // Vaciar carrito
  const clearCart = async () => {
    try {
      for (const item of cartItems) {
        await axios.delete(`${API_CART}/${item._id}`);
      }
      setCartItems([]);
    } catch (err) {
      console.error("Error vaciando carrito:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}