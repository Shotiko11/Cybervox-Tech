import React, { useState, useEffect } from "react";
import "./contactPage.css";
import { sectionHeading, contactInfo, contactForm, locationMap, businessHours, socialMedia } from "./Element";
import useContactPageLogic from "./Functions";



const ContactPage = () => {

  const {
    text,
    message,
    showEmptyMessage,
    countdown,
    handleClick
  } = useContactPageLogic();

  return (
    <div className="contact-section">
      <div className="contact-container">
        {sectionHeading}
        {contactInfo}
        {contactForm}
        {locationMap}
        {businessHours}
        {socialMedia}
      </div>
    </div>
  );

};

export default ContactPage;
