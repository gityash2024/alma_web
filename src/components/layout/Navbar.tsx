import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { ReactComponent as AlmaLogo } from '../../assets/images/almalogo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <AlmaLogo />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-link"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/events" 
              className="nav-link"
            >
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/donate" 
              className="nav-link"
            >
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/resources" 
              className="nav-link"
            >
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/gallery" 
              className="nav-link"
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/get-involved" 
              className="nav-link"
            >
              Get Involved
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;