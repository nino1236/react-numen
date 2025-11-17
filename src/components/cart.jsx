
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css"



const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">El carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(({ id, name, price, quantity }) => (
            <li key={id} className="cart-item">
              <div className="cart-info">
                <p className="cart-name">{name}</p>
                <p className="cart-details">
                  ${price} x {quantity} = <strong>${price * quantity}</strong>
                </p>
              </div>

              <div className="botones-cart">
                <button
                  className="btn-sumar"
                  onClick={() => updateQuantity(id, quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn-restar"
                  onClick={() => updateQuantity(id, quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => removeFromCart(id)}
                >
                  Eliminar
                </button>
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