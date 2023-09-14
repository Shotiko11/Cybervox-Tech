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
    message,
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
          message={message} 
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
