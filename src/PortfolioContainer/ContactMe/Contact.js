import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
  FaRegPaperPlane,
  FaEnvelope
} from "react-icons/fa";
import Typical from "react-typical";
const customStyle = {
  color: "white",
  padding: "8px",
  paddingLeft: "0px"
};

function Contact() {
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d0revn9",
        "template_r17c3f8",
        form.current,
        "UiLdyuLBSf_-F322o"
      )
      .then(
        (result) => {
          console.log(result.text);
          inputRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me">
      <div className="further-details">
        <h1>Contact Me</h1>
        <h5>Lets Keep In Touch</h5>
      </div>
      <div
        style={{
          display: "flex",
          width: "10%",
          alignItems: "center",
          margin: "10px auto 40px"
        }}
      >
        <div className="hrs" />
        <div className="center-ball" />
        <div className="hrs" />
      </div>
      <div className="contact-sec">
        <div className="contact-image">
          <div className="innerdata">
            <h2 className="gic">
              Get In Contact <FaEnvelope />
              <Typical loop={Infinity} steps={[" ", 1000]} wrapper="span" />
            </h2>
            <div className="colz colz1">
              <div className="colz-icon">
                <a href="#" style={customStyle}>
                  <FaFacebookSquare className="fabs icn" />
                </a>
                <a href="#" style={customStyle}>
                  <FaInstagram className="fabs icn" />
                </a>
                <a href="#" style={customStyle}>
                  <FaLinkedinIn className="fabs icn" />
                </a>
                <a href="#" style={customStyle}>
                  <FaTwitterSquare className="fabs icn" />
                </a>
              </div>
            </div>
          </div>
          <div className="mail-img" />
          <div className="syeh">Send Your Email Here!</div>
        </div>
        <div className="contact-form">
          <div className="form-bg">
            <div className="main-formm">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name:</label>
                <br />
                <input type="text" name="name" ref={inputRef} />
                <br />
                <label>Email:</label>
                <br />
                <input type="email" name="email" ref={emailRef} />
                <br />
                <label>Message:</label>
                <br />
                <textarea name="message" ref={messageRef}></textarea>
                <br />
                <button className="primary-btn form-btn" type="submit">
                  Send
                  <FaRegPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
