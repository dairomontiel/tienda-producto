// src/components/Carrito.js
import React from 'react';
import './Carrito.css';

// Asegúrate de recibir la nueva prop 'onCheckout'
function Carrito({ cartItems = [], onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, showCart, toggleCartVisibility, onCheckout }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="carrito-container">
      {/* Botón/Icono del carrito en el header */}
      <button
        className="carrito-button"
        onClick={toggleCartVisibility}
        aria-label={`Ver carrito de compras, ${totalItems} artículos`}
        title="Ver carrito de compras"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="carrito-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 001 1.2h12a1 1 0 001-1.2L17 13M7 13L5.4 5M17 13l1.3 5.2M9 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        {totalItems > 0 && <span className="carrito-contador">{totalItems}</span>}
      </button>

      {/* Menú desplegable del carrito */}
      {showCart && (
        <div className="carrito-dropdown">
          <h3>Tu Carrito de Compras</h3>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul className="cart-items-list">
                {cartItems.map(item => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <span className="cart-item-title">{item.title}</span>
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                      <div className="cart-item-quantity-controls">
                        <button onClick={() => onDecreaseQuantity(item.id)} className="quantity-button">-</button>
                        <span className="item-quantity">{item.quantity}</span>
                        <button onClick={() => onIncreaseQuantity(item.id)} className="quantity-button">+</button>
                      </div>
                    </div>
                    <button onClick={() => onRemoveFromCart(item.id)} className="remove-item-button">
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p>Total de artículos: <span className="total-items-count">{totalItems}</span></p>
                <p>Total a pagar: <span className="total-price-display">${totalPrice.toFixed(2)}</span></p>
                {/* CAMBIO CLAVE AQUÍ: Llama a la función onCheckout pasada por App.js */}
                <button className="checkout-button" onClick={onCheckout}>
                  Proceder al pago
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Carrito;