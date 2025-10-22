import Header from '../components/Header'; 
import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Cart from '../components/cart';
import styles from '../styles/cart.module.css';

function Carrito() {
  return (
    <div>
      <h1>Carrito</h1>
      <Cart />
    </div>
  );
}

export default Carrito;
