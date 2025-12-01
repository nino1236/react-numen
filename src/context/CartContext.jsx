import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar carrito desde servidor al montar
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch("/api/cart");
        if (res.ok) {
          const data = await res.json();
          setCartItems(data);
        }
      } catch (error) {
        console.error("Error cargando carrito:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, []);

  // Guardar carrito en servidor cuando cambie (excepto en loading)
  useEffect(() => {
    if (loading) return;
    async function saveCart() {
      try {
        await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItems),
        });
      } catch (error) {
        console.error("Error guardando carrito:", error);
      }
    }
    saveCart();
  }, [cartItems, loading]);

  // Funciones para modificar carrito
  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
}
