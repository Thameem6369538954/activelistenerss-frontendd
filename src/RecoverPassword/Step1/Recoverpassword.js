import React, { useState } from "react";
import "../Step1/Recoverpassword.css";
import Navbar from "../../Components/Navbar.js";
import EmojiA from "../../Images/EmojiA.png";
import Tbox from "../../Images/Tbox.png";
import Key from "../../Images/Key.png";
import Warm from "../../Images/Warm.png";
import EllipseGreen from "../../Images/EllipseGreen.png";
import Yellowline from "../../Images/Yellowline.png";
import Downarrow from "../../Images/Downarrow.png";
import { NavLink } from "react-router-dom";

const Recoverpassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Valid email, submit form or proceed to next step
      // For now, let's just navigate to "/Verify"
      window.location.href = "/Verify";
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div>
      <Navbar />
      <div className="recover-main-container">
        <div className="recover-topimage-container">
          <img src={EmojiA} alt="" />
          <img src={Tbox} alt="" />
        </div>
        <div className="recover-pass">
          <img src={Downarrow} alt="" />
          <div className="recoverpass-heading">
            <p>Active Listeners</p>
            <h1>recover</h1>
            <h2>Password</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <p>Please enter your email address to recover your password</p>
          <form onSubmit={handleSubmit}>
            <div className="email-in">
              <label>
                Email <span>*</span>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>
            <p style={{ margin: "10px" }}>
              Try Using <span style={{ color: "brown" }}>Mobile Number?</span>
            </p>
            <div className="pass-sub">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="recover-bottomimage-container">
          <img src={Warm} alt="" />
          <img src={Key} alt="" />
          <img src={EllipseGreen} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recoverpassword;
