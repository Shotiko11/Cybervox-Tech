import Image from "next/image";
import "./aboutPage.css"; // Import your CSS file
import React, { useState } from "react";
import { info, text } from "./Infos";

const AboutPage = () => {
  const [Lasha, setLasha] = useState(false);
  const [nika, setNika] = useState(false);
  const [ani, setAni] = useState(false);
  const [naina, setNaina] = useState(false);
  const [overview, setOverview] = useState(true);
  const [history, setHistory] = useState(true);

  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="section-heading center-team" onClick={() =>{ setOverview(!overview) }}>Company Overview</h2>
        {overview ? <p className="company-description">{text.overview.overviewOne}</p> : <p className="company-description">{text.overview.overviewTwo}</p>}
      </div>
      <div className="history-side">
        <div className="about-container">
          <h2 className="section-heading center-team" onClick={() => { setHistory(!history) }}>Our History</h2>
          {history ? <p className="company-description">{text.history.historyOne}</p> : <p className="company-description">{text.history.historyTwo}</p>}
        </div>
      </div>
      <div className="team-section">
        <div className="about-container">
          <h2
            className="section-heading center-team"
            style={{ fontSize: "34px" }}
          >
            Introduce Our Team
          </h2>
          <p
            className="section-heading center-team"
            style={{ fontSize: "18px" }}
          >
            For More Information About Our Team, Click On Their Names
          </p>
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
              <h3
                className="team-member-name"
                onClick={() => {
                  setLasha(!Lasha);
                }}
              >
                Lasha
              </h3>
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
              <h3
                className="team-member-name"
                onClick={() => {
                  setNika(!nika);
                }}
              >
                Nika
              </h3>
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
              <h3
                className="team-member-name"
                onClick={() => {
                  setAni(!ani);
                }}
              >
                Ani
              </h3>
              <p className="team-member-title">Lead Designer</p>
              <p className="team-member-description">
                {"Ani's"} creativity knows no bounds. She crafts stunning
                designs that leave a lasting impression.
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
              <h3
                className="team-member-name"
                onClick={() => {
                  setNaina(!naina);
                }}
              >
                Naina
              </h3>
              <p className="team-member-title">Marketing Manager</p>
              <p className="team-member-description">
                Naina is our marketing guru. She knows how to reach our audience
                and build strong relationships.
              </p>
            </div>
          </div>
        </div>
        {Lasha ? (
          <div className="custom-container">
            <h1 style={{ textAlign: "center" }}>1. Lasha</h1>
            <div className="custom-child-div">{info.first.first}</div>{" "}
            <div className="custom-child-div">{info.first.second}</div>{" "}
            <div className="custom-child-div">{info.first.third}</div>{" "}
            <div className="custom-child-div">{info.first.fourth}</div>{" "}
            <div className="custom-child-div">{info.first.fifth}</div>{" "}
          </div>
        ) : null}
        {nika ? (
          <div className="custom-container">
            <h1 style={{ textAlign: "center" }}>2. Nika</h1>
            <div className="custom-child-div">{info.second.first}</div>{" "}
            <div className="custom-child-div">{info.second.second}</div>{" "}
            <div className="custom-child-div">{info.second.third}</div>{" "}
            <div className="custom-child-div">{info.second.fourth}</div>{" "}
            <div className="custom-child-div">{info.second.fifth}</div>{" "}
          </div>
        ) : null}
        {ani ? (
          <div className="custom-container">
            <h1 style={{ textAlign: "center" }}>3. Ani</h1>
            <div className="custom-child-div">{info.third.first}</div>{" "}
            <div className="custom-child-div">{info.third.second}</div>{" "}
            <div className="custom-child-div">{info.third.third}</div>{" "}
            <div className="custom-child-div">{info.third.fourth}</div>{" "}
            <div className="custom-child-div">{info.third.fifth}</div>{" "}
          </div>
        ) : null}
        {naina ? (
          <div className="custom-container">
            <h1 style={{ textAlign: "center" }}>4. Naina</h1>
            <div className="custom-child-div">{info.fourth.first}</div>{" "}
            <div className="custom-child-div">{info.fourth.second}</div>{" "}
            <div className="custom-child-div">{info.fourth.third}</div>{" "}
            <div className="custom-child-div">{info.fourth.fourth}</div>{" "}
            <div className="custom-child-div">{info.fourth.fifth}</div>{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AboutPage;
