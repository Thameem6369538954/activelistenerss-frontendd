import React, { useState } from "react";
import "../Css/Signup.css";
import EmojiA from "../Images/EmojiA.png";
import ALlogo from "../Images/ALlogo.png";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import GreenRound from "../Images/GreenRound.png";
import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import CoffieCup from "../Images/CoffieCup.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    function isValidEmail(email) {
      // Regular expression pattern for a valid email address
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

      // Check if the email matches the pattern
      return emailPattern.test(email);
    }

    // Check if the email field is not empty
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    const phonePattern = /^[6-9]\d{9}$/;

    // Check if the phone number field is not empty and matches the pattern
    if (
      formData.phoneNumber.trim() &&
      phonePattern.test(formData.phoneNumber.trim())
    ) {
      // Phone number is valid
    } else {
      // Phone number is invalid
      newErrors.phoneNumber =
        "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    // if (!formData.agree) {
    //   newErrors.agree = "You must agree to the Terms & Conditions";
    // }

    // If there are errors, set them and prevent form submission

    // backend connectin part

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form submission logic here
      console.log(formData, "Sign up Form submitted successfully!");
      // const response = await axios.post("/user_registration", formData);
      const response = await axios.post("/user_registration", formData);
      console.log("this is the response of registration............");
      // toast.success("User Registered successfully");
      if (response) {
        console.log(response.data.message,"hhehheeeee");
        if (response.data.message == "user Exist!please login!!") {
          toast.error("User Already Exist,Please Login!!");
        }else{
          toast.success("User Registered successfully");
          navigate("/Login");
        }
      }
    }
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className="signup-main">
        <div className="signup-top">
          <img src={EmojiA} alt="" />

          <img
            src={ALlogo}
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
            alt=""
          />
        </div>
        <div className="sigin-heading">
          <div>
            <img src={ElementB} className="ElementB" alt="" />
          </div>
          <div>
            <p>Our Goals</p>
            <h1 style={{ marginTop: "-22%" }}>Signup</h1>
            <h2 style={{ marginTop: "-22%", marginLeft: "30%" }}>Now</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <div>
            <img src={GreenRound} className="GreenRound" alt="" />
          </div>
        </div>
      </div>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="inside-sigup-from">
            <div className="form-input-a">
              <label>
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={errors.name ? "error-input" : ""}
              />
              {errors.name && <span className="error">{errors.name}</span>}
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={errors.email ? "error-input" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <label>
                Phone Number<span>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className={errors.phoneNumber ? "error-input" : ""}
              />
              <div style={{ width: "80%" }}>
                {errors.phoneNumber && (
                  <span className="error">{errors.phoneNumber}</span>
                )}
              </div>
            </div>
            <div className="form-input-b">
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={errors.password ? "error-input" : ""}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <label>
                Confirm Password<span>*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={errors.confirmPassword ? "error-input" : ""}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          </div>
          <div className="signup-aggry-form">
            <div>
              {/* <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p> */}
              {errors.agree && <span className="error">{errors.agree}</span>}
            </div>
            <button type="submit">Signup</button>
          </div>
        </form>
        <div className="other-signup">
          <p>or Sign up using </p>
          <div className="ggl-fc-athentication">
            <div className="fb">
              <LiaFacebookF />
            </div>
            <div className="ggl">
              <FcGoogle />
            </div>
          </div>
          <p>
            Already have an Account?{" "}
            <NavLink to="/Login">
              <span style={{ color: "#256C55" }}>Log in</span>
            </NavLink>
          </p>
          <img src={CoffieCup} alt="" />
        </div>
      </div>
    </div>
  );
};
function isValidEmail(email) {
  // Email validation logic
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export default Signup;
