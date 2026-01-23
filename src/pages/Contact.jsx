import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>We are actively serving our clients and partners internationally.</p>
        
        <div className="info-box">
          <h3>Office Address</h3>
          <p>
            4th floor, Royal Orchid, 12/4, <br/>
            Gandhi Nagar Main Rd, Patel Colony, <br/>
            Jamnagar, Gujarat 361008
          </p>
        </div>
      </div>
      
      <div className="contact-form-wrapper slide-up">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;