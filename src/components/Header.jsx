// Header.jsx
import React from 'react';
import '../styles/Header.css'; 
import logo from '../assets/iconositio.png'


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de la empresa" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/productost">Producto</a></li>
          <li><a href="/carrito">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
