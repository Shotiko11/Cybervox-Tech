import React, { useEffect, useState } from "react";
import "./contactPage.css";

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contact-item">
      <p className="contact-label">Address:</p>
      <p className="contact-value">ㅤTbilisi, Chavchavadze Street N54</p>
    </div>
    <div className="contact-item">
      <p className="contact-label">Phone:</p>
      <p className="contact-value">ㅤ{"+(995) 555455986"}</p>
    </div>
    <div className="contact-item">
      <p className="contact-label">Email:</p>
      <p className="contact-value">ㅤcyber@welcome.com</p>
    </div>
  </div>
);

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [text, setText] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleClick = () => {
    if (message.trim() === "") {
      setShowEmptyMessage(true);
    } else {
      setText(true);
      setShowEmptyMessage(false);

      // Start the countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear the countdown and success message after 5 seconds
      setTimeout(() => {
        clearInterval(countdownInterval);
        setText(false);
        setCountdown(5);
      }, 5000);
    }
  };

  useEffect(() => {
    setCountdown(5);
    setText(false);
  }, [message]);

  return (
    <div className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea
        placeholder="Your Message"
        className="yourmessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={() => handleClick()}>Send Message</button>
      {showEmptyMessage && (
        <p style={{ color: "red" }}>Your message must not be empty </p>
      )}
      {text && (
        <p style={{ color: "green" }}>
          Your form has been sent Successfully!!! {countdown - 1}
        </p>
      )}
    </div>
  );
};

const SectionHeading = () => (
  <h2 className="section-heading">Contact Us Here</h2>
);

const LocationMap = () => (
  <div className="location-map">
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
);

const BusinessHours = () => (
  <div className="business-hours">
    <h3>Business Hours</h3>
    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
    <p>Saturday: 10:00 AM - 2:00 PM</p>
    <p>Sunday: Closed</p>
  </div>
);

const SocialMedia = () => (
  <div className="social-media">
    <h1 className="social-media-title">Our Social Medias</h1>
    <div className="sociallinks">
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
);

export {
  SectionHeading,
  ContactInfo,
  ContactForm,
  LocationMap,
  BusinessHours,
  SocialMedia,
};
