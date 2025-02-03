// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PhysioCare</h3>
          <p>Helping you regain strength and live pain-free with expert physiotherapy services.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 123 Health Street, Wellness City</p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ support@physiocare.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PhysioCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
