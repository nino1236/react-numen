import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/AddToCartButton";
import "../styles/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="productos-container">
      <h1 className="titulo-principal">Productos</h1>

      <ul className="productos-lista">
        {productos.map((prod) => (
          <li className="producto-item" key={prod.id}>
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
    </div>
  );
}

export default Productos;