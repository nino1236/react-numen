import React from "react";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/AddToCartButton";
import "../styles/Productos.css";

import baquetascali from "../assets/baquetascalidad.png";
import ensayo from "../assets/ensayo.png";
import brillante from "../assets/brillante.jpg";
import oscuro from "../assets/oscuro.png";
import redonegro from "../assets/redonegro.jpeg";
import redoplateado from "../assets/Redoplateadoo.png";

function Productos() {
  
  const productos = [
    {
      id: 1,
      name: "Baquetas1",
      price: 1500,
      descripcion: "Baquetas de alta calidad para todo tipo de bateristas",
      imagen: baquetascali,
    },

    {
      id: 2,
      name: "Baquetas2",
      price: 2700,
      descripcion: "Baquetas resistentes y balanceadas",
      imagen: ensayo,
    },

    {
      id: 3,
      name: "Redoblante1",
      price: 2890,
      descripcion: "Redoblante con cuerpo de acero y acabado negro.",
      imagen: redonegro,
    },
    {
      id: 4,
      name: "Redoblante2",
      price: 3400,
      descripcion: "Ideal para estudios y escenarios profesionales.",
      imagen: redoplateado,
    },

        {
      id: 5,
      name: "Platillo1",
      price: 5100,
      descripcion: "Platillo de sonido agudo y brillante.",
      imagen: brillante,
        },

    {
      id: 6,
      name: "Platillo2",
      price: 4850,
      descripcion: "Platillo oscuro de sonido más profundo y cálido.",
      imagen: oscuro,
    },
    
  ];

  const { cartItems, addToCart } = useCart();

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
