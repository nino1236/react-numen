
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.module.css"
import "../styles/cart.css"

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
              {name} - ${price} x {quantity} = ${price * quantity}
              <div className="botones-cart">
              <button className="btn-sumar" onClick={() => updateQuantity(id, quantity + 1)}>+</button>
              <button className="btn-restar" onClick={() => updateQuantity(id, quantity - 1)} disabled={quantity === 1}>-</button>
              <button className="btn-eliminar" onClick={() => removeFromCart(id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="total">
      <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
