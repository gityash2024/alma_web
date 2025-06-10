import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { ReactComponent as AlmaLogo } from '../../assets/images/almalogo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <AlmaLogo />
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-link"
              end
              onClick={handleNavClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-link"
              onClick={handleNavClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/events" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/donate" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/resources" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/gallery" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/get-involved" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Get Involved
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-link"
              onClick={handleNavClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div 
          className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          role="button"
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}
    </nav>
  );
};

export default Navbar;