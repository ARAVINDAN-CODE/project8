
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="contact-info">Contact us: <a href="mailto:primepg@example.com">primepg@example.com</a></div>
      <div className="copyright">&copy; 2023 PRIME PG </div>
    </footer>
  );
};

export default Footer;
