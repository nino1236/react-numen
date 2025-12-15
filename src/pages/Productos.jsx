import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/AddToCartButton";
import "../styles/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Llamada a tu API (usa proxy de Vite o URL completa si no hay proxy)
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log("PRODUCTOS recibidos:", res.data)
        setProductos(res.data);
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="productos-container">
      <h1 className="titulo-principal">Productos</h1>

      {productos.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <ul className="productos-lista">
          {productos.map((prod) => (
            <li className="producto-item" key={prod._id}>
              <img
                src={prod.imagen} 
                alt={prod.name} 
                className="producto-imagen"
              />
              <h3>{prod.name}</h3>
              <p className="descripcion">{prod.descripcion}</p>
              <p className="precio">${prod.price}</p>
              <AddToCartButton onAdd={() => addToCart(prod)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Productos;