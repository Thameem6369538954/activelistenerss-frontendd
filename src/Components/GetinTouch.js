import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/GetinTouch.css";
import CC from "../Images/CC.png";
import axios from "../Utils/Baseurl.js";

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-z]+[a-z0-9]*@gmail\.(com|in)$/;

    // Validate all fields on submit
    const formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
   if (!formData.email) {
     formErrors.email = "Email is required";
   } else if (!emailPattern.test(formData.email)) {
     formErrors.email = "Email address is invalid";
   }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const response = await axios.post("/get_in_touch", formData);
      if (response) {
        toast.success("Successfully submitted!!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit");
      }
    } catch (error) {
      toast.error("Failed to submit");
    }
  };

  return (
    <div>
      <div className="getintouch-container">
        <div className="get-form">
          <span>Phone Number : +91 78928 58593</span>
          <form onSubmit={handleSubmit}>
            <h1>Write to</h1>
            <p>us</p>
            <div className="form-inputs">
              <div className="error-getin-touch">
                <label> Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {errors.name && (
                  <span style={{ color: "red" }}>*{errors.name}</span>
                )}
              </div>
              <div className="error-getin-touch">
                <label>Email *</label>
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
                <label>Message *</label>
                <input
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  placeholder="Message"
                />
                {errors.message && (
                  <span style={{ color: "red" }}>*{errors.message}</span>
                )}
              </div>
            </div>
            <div className="agree-get">
              <button type="submit">Submit</button>
            </div>
          </form>
          <img src={CC} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GetinTouch;
