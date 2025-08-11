import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#about" className="navbar-brand">Yan's Portfolio</a>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;