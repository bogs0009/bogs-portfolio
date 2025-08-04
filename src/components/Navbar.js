import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scroll.scrollToTop({ duration: 500 });
    } else {
      navigate('/');
    }
    closeMobileMenu();
  };

  const scrollSections = ['home', 'services', 'portfolio', 'about', 'contacts'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={handleLogoClick} className="logo-link" style={{ cursor: 'pointer' }}>
          <img src="/images/Logo-bogs.png" alt="bogs" className="logo-img" />
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {scrollSections.map((section) =>
            location.pathname === '/' ? (
              <ScrollLink
                key={section}
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                onClick={closeMobileMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ) : (
              <RouterLink
                key={section}
                to="/"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </RouterLink>
            )
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


