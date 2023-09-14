import Image from "next/image";
import "./aboutPage.css"; // Import your CSS file
import React, { useState } from "react";
import { info, text } from "./Infos";

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [overview, setOverview] = useState(true);
  const [history, setHistory] = useState(true);

  const teamMembers = [
    {
      name: "Lasha",
      title: "CEO",
      description:
        "Lasha is a visionary leader with a passion for innovation and technology. He leads our team towards excellence.",
      image: "/images/personfour.jpg",
      infoKey: "first",
    },
    {
      name: "Nika",
      title: "CTO",
      description:
        "Nika is our technical genius who drives our cutting-edge solutions. His expertise is unmatched.",
      image: "/images/personone.jpg",
      infoKey: "second",
    },
    {
      name: "Ani",
      title: "Lead Designer",
      description:
        "Ani's creativity knows no bounds. She crafts stunning designs that leave a lasting impression.",
      image: "/images/personfour.jpg",
      infoKey: "third",
    },
    {
      name: "Naina",
      title: "Marketing Manager",
      description:
        "Naina is our marketing guru. She knows how to reach our audience and build strong relationships.",
      image: "/images/personone.jpg",
      infoKey: "fourth",
    },
  ];

  const handleMemberClick = (index) => {
    if (selectedMember === index) {
      setSelectedMember(null);
    } else {
      setSelectedMember(index);
    }
  };

  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="section-heading center-team" onClick={() => setOverview(!overview)}>
          Company Overview
        </h2>
        {overview ? (
          <p className="company-description">{text.overview.overviewOne}</p>
        ) : (
          <p className="company-description">{text.overview.overviewTwo}</p>
        )}
      </div>
      <div className="history-side">
        <div className="about-container">
          <h2 className="section-heading center-team" onClick={() => setHistory(!history)}>
            Our History
          </h2>
          {history ? (
            <p className="company-description">{text.history.historyOne}</p>
          ) : (
            <p className="company-description">{text.history.historyTwo}</p>
          )}
        </div>
      </div>
      <div className="team-section">
        <div className="about-container">
          <h2 className="section-heading center-team" style={{ fontSize: "34px" }}>
            Introduce Our Team
          </h2>
          <p className="section-heading center-team" style={{ fontSize: "18px" }}>
            For More Information About Our Team, Click On Their Names
          </p>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <Image
                  src={member.image}
                  alt={member.name}
                  className="team-member-photo"
                  width={200}
                  height={160}
                />
                <h3 className="team-member-name" onClick={() => handleMemberClick(index)}>
                  {member.name}
                </h3>
                <p className="team-member-title">{member.title}</p>
                {selectedMember === index && (
                  <div className="custom-container">
                    <h1 style={{ textAlign: "center" }}>{member.name}</h1>
                    <div className="custom-child-div">{info[member.infoKey].first}</div>{" "}
                    <div className="custom-child-div">{info[member.infoKey].second}</div>{" "}
                    <div className="custom-child-div">{info[member.infoKey].third}</div>{" "}
                    <div className="custom-child-div">{info[member.infoKey].fourth}</div>{" "}
                    <div className="custom-child-div">{info[member.infoKey].fifth}</div>{" "}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
