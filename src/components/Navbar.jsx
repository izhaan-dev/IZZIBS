import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/logo.png" alt="IZZI BS" className="logo-img" />
          {/* Fallback text if image doesn't load immediately */}
          <span className="logo-text" style={{display: 'none'}}>IZZI BS</span> 
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/domains">Domains</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-icons">
        <a href="tel:+911234567890" className="icon-link"><FaPhoneAlt /></a>
        <a href="mailto:info@izzibs.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://wa.me/911234567890" className="icon-link"><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default Navbar;