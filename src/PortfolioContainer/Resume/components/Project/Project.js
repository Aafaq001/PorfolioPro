import React from "react";
import "./Project.css";

function Project() {
  return (
    <div>
      <div className="center-ball1" />
      <h5 className="proj-name">Personal Portfolio Website</h5>
      <h5 className="proj-dur">2022</h5>
      <h5 className="tech-used">Technologies used: React, Bootstrap, Node</h5>
      <h6 className="proj-details">
        A personal Portfolio website to showcase all my details and projects at
        one place.
      </h6>
      <div className="center-ball1" />
      <h5 className="proj-name">TinDog Website</h5>
      <h5 className="proj-dur">2022</h5>
      <h5 className="tech-used">Technologies used: HTML, CSS, Bootstrap</h5>
      <h6 className="proj-details">
        A personal fun project to show case the base knowledge of all of website
        design in details built from scrap.
      </h6>
      <div className="center-ball1" />
      <h5 className="proj-name">Keeper App</h5>
      <h5 className="proj-dur">2022</h5>
      <h5 className="tech-used">
        Technologies used: React, Node, MongoDB, Mongoose
      </h5>
      <h6 className="proj-details">
        A personal project to have a better grip on the
        backend and database.
      </h6>
    </div>
  );
}

export default Project;
