import React from 'react';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import '../styles/Productos.css';


function Productos() {
const productos = [
  { id: 1, name: 'Baquetas 1', price: 1500, descripcion: 'Baquetas de alta calidad' },
  { id: 2, name: 'Baquetas 2', price: 2700, descripcion: 'Baquetas resistentes y balanceadas' },
  { id: 3, name: 'Redoblante 1', price: 200, descripcion: 'Redoblante con gran resonancia' },
  { id: 4, name: 'Redoblante 2', price: 200, descripcion: 'Ideal para ensayos y conciertos' },
  { id: 5, name: 'Platillo 1', price: 200, descripcion: 'Platillo brillante de sonido agudo' },
  { id: 6, name: 'Platillo 2', price: 200, descripcion: 'Platillo oscuro de sonido profundo' },
];

  const { cartItems, addToCart } = useCart();

  return (
    <div>
      <h1>Productos</h1>
<ul className="productos-lista">
  {productos.map(prod => (
    <li className="producto-item" key={prod.id}>
      <h3>{prod.name}</h3>
      <p>Precio: ${prod.price}</p>
        {prod.descripcion && <p className="descripcion">{prod.descripcion}</p>}
    <AddToCartButton onAdd={() => addToCart(prod)} />
    </li>
  ))}
</ul>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(({ id, name, price, quantity }) => (
            <li key={id}>
              {name} - ${price} x {quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Productos;