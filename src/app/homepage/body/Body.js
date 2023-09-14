import React, { useState } from "react";
import "./body.css";

const Body = () => {

  const [p, setp] = useState(false)

  const handleClick = () => {
    setp(!p)
  }

  const myNum = "+(995) 574-312-441"

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Cybervox Tech</h1>
          <p>Your trusted technology partner</p>
          <a href="#contact" className="cta-button" onClick={handleClick}>
            Contact Us
          </a>
          {p ? <p style={{paddingTop:"10px", fontSize:"20px"}}>{myNum}</p> : null}
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>What we offer to your company</h2>
          <div className="service-card">
            <img src="/images/itsupport.jpg" alt="IT Service"/>
            <div className="Under">
              <h3>IT Service </h3>
              <p>
              Experience seamless operations with our expert IT support. Fast, reliable, and tailored solutions to keep your systems running smoothly, so you can focus on your core business.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="/images/softwareservice.png" alt="Service 2" />
            <div className="Under">
              <h3>Software Service</h3>

              <p>
                Embrace innovation with out comprehensive software services. From development to implementation, we provide cutting-edge solutions to optimize your business process.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="/images/designservice.png" alt="Service 3" />
            <div className="Under">
              <h3>3D Design Service</h3>
              <p>
                Unleash creativity without limits through our 3D design expertise. Bring your ideas to life with precision and imagination. Elevate yiur visual content ...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;