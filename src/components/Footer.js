import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Mi Tienda</h3>
          <p>Tu tienda favorita para encontrar los mejores productos con calidad y garantía.</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: soporte@mitienda.com</p>
          <p>Teléfono: +57 303847475</p>
          <p>Dirección: Calle 64a #123, Ciudad, País</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61558035903837" aria-label="Facebook" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
