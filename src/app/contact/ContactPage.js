import React from "react";
import "./contactPage.css";
import {
  sectionHeading,
  contactInfo,
  contactForm,
  locationMap,
  businessHours,
  socialMedia,
} from "./Element";
import useContactPageLogic from "./Functions";

const ContactPage = () => {
  const {
    text,
    message, // Make sure to include message in the destructuring
    showEmptyMessage,
    countdown,
    handleClick,
    setMessage,
  } = useContactPageLogic();

  return (
    <div className="contact-section">
      <div className="contact-container">
        {sectionHeading}
        {contactInfo}
        {contactForm({
          message, // Pass message as a prop
          showEmptyMessage,
          countdown,
          handleClick,
          setMessage,
        })}
        {locationMap}
        {businessHours}
        {socialMedia}
      </div>
    </div>
  );
};

export default ContactPage;
