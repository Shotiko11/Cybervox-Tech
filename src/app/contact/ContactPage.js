import React from "react";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="section-heading">Contact Us</h2>
        <div className="contact-info">
          <p className="contact-address">1234 Elm Street</p>
          <p className="contact-address">Cityville, ST 12345</p>
          <p className="contact-phone">Phone: (555) 123-4567</p>
          <p className="contact-email">Email: info@example.com</p>
        </div>
        <div className="contact-form">
          {/* Include your contact form component here */}
          {/* Sample form fields */}
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" className="yourmessage"></textarea>
          <button>Send Message</button>
        </div>
        <div className="location-map">
          {/* Embed your location map here */}
          {/* Sample map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11250.861635055342!2d-74.00594184337008!3d40.71277602561734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE5JzA4LjAiTiA3NMKwNTAnMDIuNiJX!5e0!3m2!1sen!2sus!4v1601671792154!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Sample Location Map"
          ></iframe>
        </div>
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="social-media">
          {/* Include links to your social media profiles here */}
          {/* Sample social media links */}
          <a href="#" className="social-media-link">
            Facebook
          </a>
          <a href="#" className="social-media-link">
            Twitter
          </a>
          <a href="#" className="social-media-link">
            LinkedIn
          </a>
          <a href="#" className="social-media-link">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
