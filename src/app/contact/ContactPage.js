import React, { useState, useEffect } from "react";
import "./contactPage.css";
import { sectionHeading, contactInfo, contactForm, locationMap, businessHours, socialMedia } from "./Element";

const ContactPage = () => {
  const [text, setText] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;
    if (countdown > 0 && text) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
      setCountdown(5);
      setText(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, text]);

  const handleClick = () => {
    if (message.trim() === "") {
      setShowEmptyMessage(true);
    } else {
      setText(true);
      setShowEmptyMessage(false);
      setCountdown(5);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        
      </div>
    </div>
  );
};

export default ContactPage;
