import React from 'react';
import '../styles/AddToCartButton.css';


const AddToCartButton = ({ onAdd, disabled }) => {
  return (
    <button
      className="add-to-cart-button"
      onClick={onAdd}
      disabled={disabled}
    >
      Agregar al carrito
    </button>
  );
};

export default AddToCartButton;
