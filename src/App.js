// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Carrito from './components/carrito';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleIncreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  // NUEVA FUNCIÓN: Para vaciar el carrito y cerrar el dropdown
  const handleCheckout = () => {
    alert('¡Compra realizada con éxito! Gracias por tu compra.'); // Mensaje de confirmación
    setCartItems([]); // Vacía el carrito
    setShowCart(false); // Cierra el carrito desplegable
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/img/logo1.png" alt="Logo" />
          </div>
          <div className="left-section">
            <h1 className="title">Prendas y Accesorios DMLC</h1>
          </div>

          <div className="center-section">
            <input
              type="text"
              placeholder="Buscar productos por nombre..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="right-section">
            <Carrito
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              showCart={showCart}
              toggleCartVisibility={toggleCartVisibility}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </header>

      <main className="products-container">
        <ProductList searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;