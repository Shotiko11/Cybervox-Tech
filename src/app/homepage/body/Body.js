import React from "react";
import "./body.css";
import itserviceImage from '../../../images/itservice.jpg'; 

const Body = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Cybervox Tech</h1>
          <p>Your trusted technology partner</p>
          <a href="#contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-card">
            <img src={itserviceImage} alt="IT Service" />

            <h3>Service Title 1</h3>
            <p>
              Description of the service goes here. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="service-card">
            <img src="service-icon-2.png" alt="Service 2" />
            <h3>Service Title 2</h3>
            <p>
              Description of the service goes here. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="service-card">
            <img src="service-icon-3.png" alt="Service 3" />
            <h3>Service Title 3</h3>
            <p>
              Description of the service goes here. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
