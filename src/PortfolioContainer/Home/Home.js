import React from "react";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Contact from "../ContactMe/Contact";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Profile />
        <Footer />
      </div>
      <div className="AboutMe-container">
        <AboutMe />
      </div>
      <div className="Resume-container">
        <Resume />
      </div>
      <div className="Resume-container">
        <Contact />
      </div>
      <p> Copyright @ 2023 Aafaq Ahmad </p>
    </>
  );
}
