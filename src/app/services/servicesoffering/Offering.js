import React from "react";
import "./offering.css";

const Offering = () => {
  return (
    <div>
      <div className="mainelement">
        <h1>Diverse Range of Professional Services</h1>
      </div>
      <div className="container">
        <div className="service">
          <h3>IT Support Service</h3>
          <p>
            We offer comprehensive IT support to keep your systems running
            smoothly.
          </p>
        </div>
        <div className="service">
          <h3>Programming Service</h3>
          <p>
            Our expert programmers can develop custom software solutions
            tailored to your needs.
          </p>
        </div>
        <div className="service">
          <h3>Designing Service</h3>
          <p>
            We create stunning designs for websites, apps, and more to enhance
            your brand.
          </p>
        </div>
        <div className="service">
          <h3>Cloud Computing</h3>
          <p>
            Access scalable and secure cloud infrastructure for your data and
            applications.
          </p>
        </div>
        <div className="service">
          <h3>Data Analytics</h3>
          <p>
            Gain insights from your data with our advanced analytics and
            reporting solutions.
          </p>
        </div>
        <div className="service">
          <h3>Cybersecurity</h3>
          <p>
            Protect your digital assets with our robust cybersecurity services
            and solutions.
          </p>
        </div>
        <div className="service">
          <h3>Mobile App Development</h3>
          <p>
            Create engaging and user-friendly mobile apps for various platforms.
          </p>
        </div>
        <div className="service">
          <h3>AI and Machine Learning</h3>
          <p>
            Harness the power of artificial intelligence and machine learning
            for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
