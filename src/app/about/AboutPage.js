import Image from "next/image";
import "./aboutPage.css"; // Import your CSS file
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="section-heading center-team">Company Overview</h2>
        <p className="company-description">
          Welcome to Cybervox Tech, your trusted partner in the world of
          technology and innovation. Founded in 2023, {"we've"} been on a
          journey to transform businesses and empower individuals through
          cutting-edge technology solutions. Our mission is to improve tech
          industry.
        </p>
        <p className="company-description">
          At Cybervox Tech, we believe in experience, our knowledge, and your
          business success. These values drive us to our main goal.
        </p>
      </div>
      <div className="history-side">
        <div className="about-container">
          <h2 className="section-heading center-team">Our History</h2>
          <p className="company-description">
            Since our inception in 2023, {"we've"} been dedicated to innovation
            and excellence. Over the years, {"we've"} achieved numerous
            milestones, launching groundbreaking products, expanding our global
            reach, and receiving industry recognition.
          </p>
          <p className="company-description">
            Our commitment to innovation and customer-centricity has driven our
            success and positioned us as a leader in the technology industry.
          </p>
        </div>
      </div>
      <div className="team-section">
        <div className="about-container">
          <h2 className="section-heading center-team" style={{fontSize:"34px"}}>Introduce Our Team</h2>
          <p className="section-heading center-team" style={{fontSize:"18px"}}>For More Information About Our Team, Click On Their Names</p>
          <div className="team-members">
            {/* Team Member 1 */}
            <div className="team-member">
              <Image
                src="/images/personfour.jpg"
                alt="Lasha"
                className="team-member-photo"
                width={200}
                height={160}
              />
              <h3 className="team-member-name">Lasha</h3>
              <p className="team-member-title">CEO</p>
              <p className="team-member-description">
                Lasha is a visionary leader with a passion for innovation and
                technology. He leads our team towards excellence.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member">
              <Image
                src="/images/personone.jpg"
                alt="Nika"
                className="team-member-photo"
                width={200}
                height={160}
              />
              <h3 className="team-member-name">Nika</h3>
              <p className="team-member-title">CTO</p>
              <p className="team-member-description">
                Nika is our technical genius who drives our cutting-edge
                solutions. His expertise is unmatched.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member">
              <Image
                src="/images/personfour.jpg"
                alt="Ani"
                className="team-member-photo"
                width={200}
                height={160}
              />
              <h3 className="team-member-name">Ani</h3>
              <p className="team-member-title">Lead Designer</p>
              <p className="team-member-description">
                {"Ani's"} creativity knows no bounds. She crafts stunning designs
                that leave a lasting impression.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="team-member">
              <Image
                src="/images/personone.jpg"
                alt="Naina"
                className="team-member-photo"
                width={200}
                height={160}
              />
              <h3 className="team-member-name">Naina</h3>
              <p className="team-member-title">Marketing Manager</p>
              <p className="team-member-description">
                Naina is our marketing guru. She knows how to reach our audience
                and build strong relationships.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
