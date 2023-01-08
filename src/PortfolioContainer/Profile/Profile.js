import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare
} from "react-icons/fa";
import Typical from "react-typical";

import "./Profile.css";

const customStyle = {
  color: "white",
  padding: "8px",
  paddingLeft: "0px"
};

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#" style={customStyle}>
                <FaFacebookSquare className="fabs" />
              </a>
              <a href="#" style={customStyle}>
                <FaInstagram className="fabs" />
              </a>
              <a href="#" style={customStyle}>
                <FaLinkedinIn className="fabs" />
              </a>
              <a href="#" style={customStyle}>
                <FaTwitterSquare className="fabs" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Aafaq</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Web Design and Dev 💻",
                    1000,
                    "React Dev 🌐",
                    1000,
                    "MERN Stack Dev 👨‍💻",
                    1000
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-btn-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Resume_Aafaq.pdf" download="Aafaq Ahamd Resume_Aafaq.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
