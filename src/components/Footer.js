import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/YanNazzim" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yangonzalez/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; 2025 Yan Gonzalez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;