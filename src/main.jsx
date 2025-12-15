import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import "./styles/index.css";
import { CartProvider } from "./context/CartContext.jsx";

axios.defaults.withCredentials = true; 
// Permite que el navegador: 
// envíe cookies de sesión, 
// reciba cookies del backend, 
// mantenga la sesión viva entre requests
// Sin eso, el carrito parecería “vaciarse” en cada request


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);


