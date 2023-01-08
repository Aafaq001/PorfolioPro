import React, { useState } from "react";
import {
  FaUserGraduate,
  FaClock,
  FaCode,
  FaChartBar,
  FaPalette,
} from "react-icons/fa";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Prog from "./components/Programming/Prog";
import Project from "./components/Project/Project";
import Interest from "./components/Interest/Interest";
import "./Resume.css";


function Resume() {
  const [visibility, setVisibility] = useState(1);
  function handleClick(e){
    setVisibility(e);
  }

  return (
    <div className="main-resume">
      <div className="further-details">
        <h1>Resume</h1>
        <h5>My Formal Details</h5>
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
        <div className="formal-details">
          <div className="fabs-icons">
            <FaUserGraduate className="icon" />
            <FaClock className="icon" />
            <FaCode className="icon" />
            <FaChartBar className="icon" />
            <FaPalette className="icon" />
          </div>
          <div className="icons-headings">
            <h6>
              <button className="resume-btn" onClick={()=>handleClick(1)}>Education</button>
            </h6>
            <h6>
              <button className="resume-btn" onClick={()=>handleClick(2)}>Work History</button>
            </h6>
            <h6>
              <button className="resume-btn" onClick={()=>handleClick(3)}>Programming Skills</button>
            </h6>
            <h6>
              <button className="resume-btn" onClick={()=>handleClick(4)}>Projects</button>
            </h6>
            <h6>
              <button className="resume-btn" onClick={()=>handleClick(5)}>Interests</button>
            </h6>
          </div>
          <div class="or-spacer-vertical left">
            <div class="mask"></div>
          </div>
          <div className="data">
            {visibility === 1 ? <Education /> : null }
            {visibility === 2 ? <Work /> : null}
            {visibility === 3 ? <Prog /> : null}
            {visibility === 4 ? <Project /> : null}
            {visibility === 5 ? <Interest /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
