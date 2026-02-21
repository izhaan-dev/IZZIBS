import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  // Dynamic logo path helper
  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logoPath} alt="IZZI BS" className="logo-img" />
          <span className="logo-text" style={{display: 'none'}}>IZZI BS</span> 
        </Link>
      </div>
      
      <ul className="nav-links">
        {/* NavLink automatically handles the "active" state */}
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/domains">Domains</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
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