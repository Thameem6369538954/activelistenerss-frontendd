import React, { useState } from "react";
import "./Verify.css";
import Navbar from "../../Components/Navbar.js";
import EmojiA from "../../Images/EmojiA.png";
import Tbox from "../../Images/Tbox.png";
import Key from "../../Images/Key.png";
import Warm from "../../Images/Warm.png";
import EllipseGreen from "../../Images/EllipseGreen.png";
import Yellowline from "../../Images/Yellowline.png";
import Downarrow from "../../Images/Downarrow.png";
import { NavLink } from "react-router-dom";

const Verify = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]); // State to hold OTP values
  const [otpError, setOtpError] = useState("");

  const handleChange = (index, e) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = e.target.value.replace(/\D/, ""); // Remove non-digit characters
    setOtpValues(updatedOtpValues);

    // Automatically move to the next input field after entering a digit
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine OTP values into a single string
    const otp = otpValues.join("");

    // Basic validation: Check if all fields are filled
    if (otp.length !== 6) {
      setOtpError("Please enter a valid OTP");
      return;
    }

    // Perform your OTP validation logic here
    // For demonstration, let's simply navigate to "/Createpassword"
    window.location.href = "/Createpassword";
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
            <h1>verify</h1>
            <h2>Email</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <p>Please enter the 6-digits code sent to metalmahesh@gmail.com</p>
          <form onSubmit={handleSubmit}>
            <div className="email-in">
              <div className="password">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    maxLength="1"
                    className="input"
                    name={`otp-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                  />
                ))}
              </div>
              {otpError && <div style={{ color: "red" }}>{otpError}</div>}
            </div>
            <p style={{ margin: "10px" }}>
              Didn’t receive the code?{" "}
              <span style={{ color: "brown", margin: "10px" }}>Resend</span>
            </p>
            <div className="pass-sub">
              <button type="submit">Verify</button>
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

export default Verify;
