import React, { useState } from "react";
import "./contactPage.css";
import {
  SectionHeading,
  ContactInfo,
  ContactForm,
  LocationMap,
  BusinessHours,
  SocialMedia,
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
        <SectionHeading />
        <ContactInfo />
        <ContactForm
          message={message} // Pass message as a prop
          showEmptyMessage={showEmptyMessage}
          countdown={countdown}
          handleClick={handleClick}
          setMessage={setMessage}
        />
        <LocationMap />
        <BusinessHours />
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactPage;
