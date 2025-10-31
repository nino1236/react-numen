
import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/iconositio.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // 
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa

  const { cartItems } = useCart();
  const itemCount = cartItems.length; // Cantidad de items en el carrito

  const toggleMenu = () => setMenuOpen(!menuOpen); // Alterna el estado del menú hamburguesa
  const closeMenu = () => setMenuOpen(false);  // Cierra el menú al hacer clic en un enlace

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-title">MUNDO BATERIA</h1>
      </div>

      {/* menú hamburguesa */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navegación */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>INICIO</Link>
        <Link to="/productos" className="nav-link" onClick={closeMenu}>PRODUCTOS</Link>
        <Link to="/carrito" className="nav-link cart-icon" onClick={closeMenu}>
        <FaShoppingCart size={22} />{itemCount > 0 && <span className="cart-count">{itemCount}</span>}</Link>
      </nav>
    </header>
  );
}

export default Header;