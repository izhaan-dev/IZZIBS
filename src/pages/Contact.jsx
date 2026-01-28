import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      {/* Background Decorative Circle */}
      <div className="contact-bg-shape"></div>

      <div className="contact-container">
        
        {/* LEFT COLUMN: Info */}
        <div className="contact-info slide-up">
          <span className="sub-header">Get in Touch</span>
          <h1>Let's Start a Conversation</h1>
          <p className="contact-desc">
            Whether you have a question about our services, pricing, or just want to say hello, 
            our team is ready to answer all your questions.
          </p>
          
          <div className="contact-details">
            {/* Address */}
            <div className="detail-item">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div className="detail-text">
                <h3>Visit Us</h3>
                <p>
                  4th floor, Royal Orchid, 12/4, <br/>
                  Gandhi Nagar Main Rd, Patel Colony, <br/>
                  Jamnagar, Gujarat 361008
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="detail-item">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div className="detail-text">
                <h3>Call Us</h3>
                <p><a href="tel:+917383785636">+91 73837 85636</a></p>
                <p><a href="tel:+919586696222">+91 95866 96222</a></p>
              </div>
            </div>

            {/* Email */}
            <div className="detail-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="detail-text">
                <h3>Email Us</h3>
                <p><a href="mailto:sales@izzibs.com">sales@izzibs.com</a></p>
                <p><a href="mailto:info@izzibs.com">info@izzibs.com</a></p>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h3>Connect with us:</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/izzi-business-services" target="_blank" rel="noreferrer" className="social-btn linkedin"><FaLinkedinIn /></a>
              <a href="https://wa.me/917383785636" target="_blank" rel="noreferrer" className="social-btn whatsapp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        
        {/* RIGHT COLUMN: Form */}
        <div className="contact-form-wrapper slide-up" style={{animationDelay: '0.2s'}}>
          <form className="contact-form">
            <h2>Send a Message</h2>
            
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;