import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // 2. State for submission status
  const [status, setStatus] = useState(""); // "", "submitting", "success", "error"

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // 3. Prepare data for Web3Forms
    // REPLACE 'YOUR_ACCESS_KEY_HERE' with the key sent to sales@izzibs.com
    const object = {
      ...formData,
      access_key: "9d619e4f-1796-4f0a-bd0f-230addcc9227" 
    };
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page fade-in">
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry" 
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..." 
                rows="5" 
                required
              ></textarea>
            </div>

            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="status-msg success">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="status-msg error">Something went wrong. Please try again.</p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;