import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/GetinTouch.css";
import CC from "../Images/CC.png";
import FlowerR from "../Images/FlowerR.png";
const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, message } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const errorsCopy = { ...errors };

    switch (name) {
      case "name":
        errorsCopy.name = value.trim() === "" ? "Name is required" : "";
        break;
      case "message":
        errorsCopy.message = value.trim() === "" ? "Message is required" : "";
        break;
      case "email":
        errorsCopy.email = !isValidEmail(value) ? "Invalid email address" : "";
        break;
      default:
        break;
    }

    setErrors(errorsCopy);
  };

  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{0,}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields on submit

    const { name, email, message } = formData;
    validateField("name", name);
    validateField("email", email);
    validateField("message", message);

    // If there are no errors, submit the form
    if (!errors.name && !errors.email && !errors.message) {
      console.log("Form submitted:", formData);
      // You can make an API call or further processing here
    }
    toast.success("Successfully submitted!!");
  };

  return (
    <div>
      <div className="getintouch-container">
        <div className="get-form">
          <form onSubmit={handleSubmit}>
            <h1>Get in Touch</h1>
            <p>With us</p>
            <div className="form-inputs">
              <div className="error-getin-touch">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                {errors.name && (
                  <span style={{ color: "red" }}>*{errors.name}</span>
                )}
              </div>
              <div className="error-getin-touch">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>*{errors.email}</span>
                )}
              </div>
              <div className="getintouch-msg">
                <input
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  placeholder="Message"
                  required
                />
                {errors.message && (
                  <span style={{ color: "red" }}>*{errors.message}</span>
                )}
              </div>
            </div>
            <div className="agree-get">
              {/* <input type="checkbox" />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p> */}
              <button type="submit">Submit</button>
            </div>
          </form>
          <img src={CC} alt="" />
        </div>
        {/* <img src={FlowerR} alt="" /> */}
      </div>
    </div>
  );
};

export default GetinTouch;
