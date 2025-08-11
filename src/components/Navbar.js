import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#about" className="navbar-brand">Yan Gonzalez</a>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;