// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/fakeStoreApi';
import './ProductList.css'; // Asegúrate de tener este archivo CSS

const ProductList = ({ searchTerm, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos. Intenta de nuevo más tarde.");
        setLoading(false);
      });
  }, []);

  // Filtra los productos basados en el término de búsqueda
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FUNCIÓN PARA MANEJAR EL CLIC EN "COMPRAR AHORA"
  // Reutiliza onAddToCart para añadir el producto y mostrar el carrito.
  const handleBuyNow = (product) => {
    onAddToCart(product);
    // Si en el futuro quieres una lógica diferente (ej. ir directo a una página de checkout),
    // aquí es donde la implementarías, quizás con una nueva prop como onDirectCheckout.
  };

  if (loading) {
    return <div className="loading-message">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p className="no-products-found">No se encontraron productos que coincidan con tu búsqueda.</p>
      ) : (
        filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">${product.price.toFixed(2)}</p>
            {/* EL BOTÓN "COMPRAR AHORA" AHORA LLAMA A handleBuyNow */}
            <button
              className='buy-button'
              onClick={() => handleBuyNow(product)} // <--- ESTE ES EL CAMBIO CLAVE
            >
              Comprar Ahora
            </button>
            {/* El botón "Agregar Al Carrito" sigue llamando a onAddToCart directamente */}
            <button
              className='add-to-cart-button'
              onClick={() => onAddToCart(product)}
            >
              Agregar Al Carrito
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;