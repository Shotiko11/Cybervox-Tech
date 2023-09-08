import React from "react";
import "./offering.css";
import Image from "next/image";

const Offering = () => {
  const services = [
    {
      name: "Partner 1", logo: "/images/computer.png", h3: "IT Support Service", p: "We offer comprehensive IT support to keep your systems running smoothly.",
    },
    {
      name: "Partner 2", logo: "/images/programmer.png", h3: "Programming Service", p: "Our expert programmers can develop custom software solutions tailored to your needs.",
    },
    {
      name: "Partner 2", logo: "/images/paint.png", h3: "Designing Service", p: "We create stunning designs for websites, apps, and more to enhance your brand.",
    },
    {
      name: "Partner 2", logo: "/images/cloudone.png", h3: "Cloud Computing", p: "Access scalable and secure cloud infrastructure for your data and applications.",
    },
    {
      name: "Partner 2", logo: "/images/data.png", h3: "Data Analytics", p: "Gain insights from your data with our advanced analytics and reporting solutions.",
    },
    {
      name: "Partner 2", logo: "/images/lock.png", h3: "Cybersecurity", p: "Protect your digital assets with our robust cybersecurity services and solutions.",
    },
    {
      name: "Partner 2", logo: "/images/mobile.png", h3: "Mobile App Development", p: "Create engaging and user-friendly mobile apps for various platforms.",
    },
    {
      name: "Partner 2", logo: "/images/ai.png", h3: "AI and Machine Learning", p: "Harness the power of artificial intelligence and machine learning for your business.",
    }
  ];

  return (
    <div>
      <div className="mainelement">
        <h1>Diverse Range of Professional Services</h1>
      </div>
      <div className="container">

        {services.map((services, index) => (
          <div key={index} className="service"> 
            <h3>{services.h3}  <Image src={services.logo} alt={services.name} width={29} height={29}/></h3>
            <p>{services.p}</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Offering;
