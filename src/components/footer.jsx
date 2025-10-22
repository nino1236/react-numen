import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <ul className='datos'>
        <li>UBICACION: Calle falsa 123, Mendoza</li>
        <li>MAIL: Mundobateria@gmail.com</li>
        <li>TELEFONO: 2612657585</li>
      </ul>
      <a  href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Facebook">
        <FaFacebookF size={24} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="WhatsApp">
        <FaWhatsapp size={24} />
      </a>

    </footer>
  );
};

export default Footer;
