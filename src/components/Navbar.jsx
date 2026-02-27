import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic logo path helper
  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logoPath} alt="IZZI BS" className="logo-img" />
          <span className="logo-text" style={{display: 'none'}}>IZZI BS</span> 
        </Link>
      </div>
      
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isMobileMenuOpen ? "nav-links mobile-active" : "nav-links"}>
        {/* NavLink automatically handles the "active" state */}
        <li><NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink></li>
        <li><NavLink to="/domains" onClick={closeMobileMenu}>Domains</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink></li>
        <li><NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink></li>
      </ul>

      <div className="nav-icons">
        <a href="tel:+917383785636" className="icon-link"><FaPhoneAlt /></a>
        <a href="mailto:sales@izzibs.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://wa.me/917383785636" className="icon-link"><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default Navbar;