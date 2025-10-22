
import React from 'react';
import '../styles/Header.css'; 
import logo from '../assets/iconositio.png'
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>MUNDO BATERIA</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">INICIO</Link>
        <Link to="/productos" className="nav-link">PRODUCTOS</Link>
        <Link to="/carrito" className="nav-link">CARRITO</Link>
      </nav>
    </header>
  );
}

export default Header;
