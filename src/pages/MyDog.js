import React from "react";
import "./myDog.css";
import Image from "next/image";
import Header from "@/app/homepage/header/Header";

const MyDog = () => {
  return (
    <div className="mydog-section">
        <Header />
      <div className="mydog-container">
        <h2 className="section-heading">Meet My Dog</h2>
        <div className="dog-image">
          <Image src="/images/mydog.jpg" alt="My Dog" width={450} height={800} />
        </div>
        <p className="dog-description">
          This is my beloved dog, chorna. He is always by my side, bringing joy and happiness to my life. He loves playing football.
        </p>
      </div>
    </div>
  );
};

export default MyDog;
