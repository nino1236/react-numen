
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(({ id, name, price, quantity }) => (
            <li key={id}>
              {name} - ${price} x {quantity}
              <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(id, quantity - 1)} disabled={quantity === 1}>-</button>
              <button onClick={() => removeFromCart(id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
