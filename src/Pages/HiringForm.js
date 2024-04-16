import React, { useState, useContext } from "react";
import "../Css/HiringForm.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import { useParams } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";

const HiringForm = (props) => {
  const navigate = useNavigate();
  const { position } = useParams();
  console.log(position);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: null,
    coverletter: "",
    position: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
    setErrors({ ...errors, [name]: "" }); // Clear error when user makes a change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateFormData(formData);
    console.log(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("kkkkk");
      console.log("Form submitted:", formData);
      toast.success("form submitted successfully!");
    } else {
      setErrors(newErrors);
    }
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    // } else {
    //   // Form submission logic here
    //   console.log(formData, "Sign up Form submitted successfully!");
    //   // const response = await axios.post("/user_registration", formData);
    //   const response = await axios.post("/application", formData);
    //   console.log(response, "this is the response of registration............");
    //   if (response) {
    //     console.log(response.data.message, "hhehheeeee");
    //     toast.success(response.data.message);
    //     navigate("/Login");
    //   }
    // }
  };

  const validateFormData = (data) => {
    const errors = {};
    // if (!data.name.trim()) {
    //   errors.name = "Full Name is required";
    // }
    // if (!data.position.trim()) {
    //   errors.position = "position is required";
    // }
    // if (!data.email.trim()) {
    //   errors.email = "Email is required";
    // } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    //   errors.email = "Email is invalid";
    // }
    // if (!data.mobile.trim()) {
    //   errors.mobile = "Mobile Number is required";
    // }
    // if (!data.resume) {
    //   errors.resume = "Resume is required";
    // }
    // if (!data.coverletter.trim()) {
    //   errors.coverletter = "coverletter is required";
    // }
    // if (!data.agree) {
    //   errors.agree =
    //     "You must agree to the Privacy Policy and Terms & Conditions";
    // }
    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="hiring-form-main">
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Join our Amazing</h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h4>
            <img src={Downarrow} className="down-arrow" alt="" /> Transformative
            support for those seeking clarity and understanding through active
            listening.
          </h4>
        </div>
        <div className="hiring-form-holeconatiner">
          <div className="container-form">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="position" value={position} />
              <span className="form-position">
                Position Applied For :{position}
              </span>
              <div className="form-first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>

                    <div className="input-field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>

                    <div className="input-field">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && (
                        <span className="error">{errors.mobile}</span>
                      )}
                    </div>
                    <div className="input-field">
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        placeholder="Enter position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                      {errors.position && (
                        <span className="error">{errors.position}</span>
                      )}
                    </div>

                    <div className="input-field">
                      <label>Add Resume</label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        style={{ marginTop: "0px" }}
                      />
                      {errors.resume && (
                        <span className="error">{errors.resume}</span>
                      )}
                    </div>

                    <div className="input-field">
                      <label>coverletter</label>
                      <input
                        type="text"
                        name="coverletter"
                        placeholder="Enter your coverletter"
                        value={formData.coverletter}
                        onChange={handleChange}
                        style={{ width: 800, height: 90 }}
                      />
                      {errors.coverletter && (
                        <span className="error">{errors.coverletter}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="agree-get">
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
                {/* {errors.agree && <span className="error">{errors.agree}</span>} */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HiringForm;
