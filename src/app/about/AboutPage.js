import "./aboutPage.css";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="section-heading">Company Overview</h2>
        <p className="company-description">
          Welcome to Cybervox Tech, your trusted partner in the world of
          technology and innovation. Founded in 2023, {"we've"} been on a
          journey to transform businesses and empower individuals through
          cutting-edge technology solutions. Our mission is to improve tech
          industry.
        </p>
        <p className="company-description">
          At Cybervox Tech, we believe in experience, our knowledge, and your
          buisness success. These values drive us to our main goal.
        </p>
      </div>
      <div className="history-side">
        <div className="about-container">
          <h2 className="section-heading">Our History</h2>
          <p className="company-description">
            Since our inception in 2023, {"we've"} been dedicated to innovation
            and excellence. Over the years, {"we've"} achieved numerous
            milestones, launching groundbreaking products, expanding our global
            reach, and receiving industry recognition.
          </p>
          <p className="company-description">
            Our commitment to innovation and customer-centricity has driven our success and positioned us as a leader in the technology industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
