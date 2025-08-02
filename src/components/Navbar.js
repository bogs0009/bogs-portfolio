// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <h1 className="logo">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            BOGS
          </Link>
        </h1>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to="services" smooth={true} duration={500} onClick={closeMenu}>Services</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="contacts" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

