import React, { useState } from "react";
import "./Craetepassword.css";
import Navbar from "../../Components/Navbar.js";
import EmojiA from "../../Images/EmojiA.png";
import Tbox from "../../Images/Tbox.png";
import Key from "../../Images/Key.png";
import Warm from "../../Images/Warm.png";
import EllipseGreen from "../../Images/EllipseGreen.png";
import Yellowline from "../../Images/Yellowline.png";
import Downarrow from "../../Images/Downarrow.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Createpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordc, setShowPasswordc] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const handleClickc = () => setShowPasswordc(!showPasswordc);

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    // Reset password match status if passwords are being retyped
    if (!passwordsMatch) setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
    // Reset password match status if passwords are being retyped
    if (!passwordsMatch) setPasswordsMatch(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordValue !== confirmPasswordValue) {
      // If passwords don't match, set passwordsMatch to false
      setPasswordsMatch(false);
      return;
    }

    // Proceed with form submission
  };

  return (
    <div>
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
              <h1>Create new</h1>
              <h2>Password</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>
                  Password
                  <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
                </label>
                <div className="pass-in">
                  <input
                    required
                    placeholder="Enter Password"
                    type={passwordVisibility ? "text" : "password"}
                    value={passwordValue}
                    onChange={handlePasswordChange}
                  />
                  <div className="pass-icons-re">
                    {passwordVisibility ? (
                      <FaRegEyeSlash onClick={togglePasswordVisibility} />
                    ) : (
                      <FaRegEye onClick={togglePasswordVisibility} />
                    )}
                  </div>
                </div>
              </div>

              <div className="input-container">
                <label>
                  Retype Password
                  <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
                </label>
                <div className="pass-in">
                  <input
                    required
                    placeholder="Retype Password"
                    type={confirmPasswordVisibility ? "text" : "password"}
                    value={confirmPasswordValue}
                    onChange={handleConfirmPasswordChange}
                  />
                  <div className="pass-icons-re">
                    {confirmPasswordVisibility ? (
                      <FaRegEyeSlash
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    ) : (
                      <FaRegEye onClick={toggleConfirmPasswordVisibility} />
                    )}
                  </div>
                </div>
                {/* Conditionally render error message if passwords don't match */}
                {!passwordsMatch && (
                  <span style={{ color: "red" }}>Passwords don't match</span>
                )}
              </div>
              <div className="email-para">
                <p>
                  Please enter the 6-digit code sent to metalmahesh@gmail.com
                </p>
              </div>
              <div className="email-in"></div>
              <p style={{ margin: "10px", color: "brown" }}>
                Didn’t receive the code ?{" "}
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Resend
                </span>
              </p>
              <div className="pass-sub">
                <button type="submit">Save</button>
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
    </div>
  );
};

export default Createpassword;
