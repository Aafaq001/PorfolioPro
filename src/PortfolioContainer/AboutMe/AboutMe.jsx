import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe-container">
      <div className="AboutMe-parent">
        <div className="AboutMe-Details">
          <h1>About Me</h1>
          <h5>Why Choose Me?</h5>
          <div
            style={{
              display: "flex",
              width: "10%",
              alignItems: "center",
              margin: "10px auto 40px",
            }}
          >
            <div className="hrs" />
            <div className="center-ball" />
            <div className="hrs" />
          </div>
          <div className="main-aboutme">
          <div className="picturee" />
          <div className="AboutMe-description">
            <p className="aboutme-para">
              Full stack web development with background knowledge of MERN Stacks with redux, along with a knack of building applications with utmost efficiency. Strongly Professional with BSCS willing to be an asset for and organization.
            </p>
            <h3 className="aboutme-head">Here are Few Highlights:</h3>
            <ul>
              <li>Full Stack web development</li>
              <li>Interactive Front End as per the design</li>
              <li>React and React Native</li>
              <li>Database management</li>
              <li>Back End Development</li>
            </ul>
            <div className="profile-btn-options">
            <button className="btn primary-btn btn1">Hire Me</button>
            <a href="Resume_Aafaq.pdf" download="Aafaq Ahamd Resume_Aafaq.pdf">
              <button className="btn highlighted-btn btn2">Get Resume</button>
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
