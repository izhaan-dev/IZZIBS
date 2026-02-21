import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Use the dynamic base URL for the logo image
  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* LEFT SECTION: Address & Contact */}
        <div className="footer-section left">
          <p className="address-text">
            4th floor, Royal Orchid, 12/4, Gandhi Nagar Main <br />
            Rd, Patel Colony, Jamnagar, Gujarat 361008
          </p>
          
          <div className="contact-row">
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+917383785636">+91 73837 85636</a>
          </div>
          <div className="contact-row">
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+919586696222">+91 95866 96222</a>
          </div>
          <div className="contact-row">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:sales@izzibs.com">sales@izzibs.com</a>
          </div>
        </div>

        {/* CENTER SECTION: Logo */}
        <div className="footer-section center">
          <img src={logoPath} alt="IZZI BS Logo" className="footer-logo" />
        </div>

        {/* RIGHT SECTION: Links & Socials */}
        <div className="footer-section right">
          <div className="social-icons">
            {/* Facebook (Placeholder link) */}
            <a 
              href="https://www.facebook.com/izzibusinessservices/"
              className="social-link"><FaFacebookF /></a>
            <a 
              href="https://wa.me/917383785636" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaWhatsapp />
            </a>
            {/* LinkedIn (Actual link) */}
            <a 
              href="https://www.linkedin.com/company/izzi-business-services" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="footer-nav">
            <Link to="/services">Services</Link> | 
            <Link to="/domains">Domains</Link> | 
            <Link to="/projects">Projects</Link> | 
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* <p className="copyright">
            © Izzi Business Services All Right Reserved.
          </p> */}
          <p className="credits">
            Crafted By: Izhaan Tatariya
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;