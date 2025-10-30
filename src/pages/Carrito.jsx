import Header from '../components/Header'; 
import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../components/cart';
import styles from '../styles/cart.module.css';

function Carrito() {
  return (
    <div>
      <h1><FaShoppingCart size={22} /></h1>
      <Cart />
    </div>
  );
}

export default Carrito;
