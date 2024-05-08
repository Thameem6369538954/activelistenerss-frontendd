import React, { useState,useEffect } from 'react'
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import { useParams } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.js"
import Breadcrumps from "../Components/Breadcrumps.js"
const Ngoform = () => {
  const [formData, setFormData] = useState({
    name_of_organization: "",
    year_of_establishment: "",
    number_of_offices: "",
    email_id: "",
    telephoneNumber: "",
    websiteURL: "",
    contact_person_name: "",
    contact_person_designation: "",
    contact_person_phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  console.log(formData,"data,daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  const [candidateProfile, setCandidateProfile] = useState(null);
  const [resume, setResume] = useState(null);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value || "", // Set value to an empty string if it's removed
  });
  setErrors({
    ...errors,
    [name]: "", // Clear the error for the current field
  });
};
const validate = (data) => {
  let errors = {};

  if (!data.name_of_organization) {
    errors.name_of_organization = "Name of Organization is required";
  }

  // Add more validation rules for other fields here
  // For example:

  if (!data.email_id) {
    errors.email_id = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email_id)) {
    errors.email_id = "Email is invalid";
  }

  if (!data.telephoneNumber) {
    errors.telephoneNumber = "Mobile Number is required";
  } else if (!/^\d{10}$/.test(data.telephoneNumber)) {
    errors.telephoneNumber = "Mobile Number is invalid";
  }

   if (!data.year_of_establishment) {
     errors.year_of_establishment = "Please Enter Year of Establishment";
   }
   if (!data.number_of_offices) {
     errors.number_of_offices = "Please Enter Number of offices";
   }
   if (!data.websiteURL) {
     errors.websiteURL = "Please Enter website URL";
   }
   if (!data.contact_person_name) {
     errors.contact_person_name = "Please Enter Contact Person Name";
   }
   if (!data.contact_person_designation) {
     errors.contact_person_designation =
       "Please Enter Contact Person Designation";
   }
   if (!data.contact_person_phoneNumber) {
     errors.contact_person_phoneNumber = "Please Enter Contact Person Phone Number";
   }

  // Add more validation rules for other fields as needed

  return errors;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    if(validate){
      try {
        const response = await axios.post("/ngo_joining", formData);
        console.log(response, "psycoooooooooooooooooooooooooooo");
        if (response && response.data.message) {
          if (response.data.message === "NGO already registered!!") {
            toast.error("NGO already registered!!");
          } else if (response.data.message === "cant find psychologyst!") {
            toast.error("cant find Psychologist!");
          } else if (response.data.message === "something went wrong") {
            toast.error("something went wrong");
          } else {
            toast.success(
              " Your Form Submitted successfully !! Thanks for your interest in joining our team."
            );
          }
        }
      } catch (error) {
        console.log(error, "iaaaaaaaaaaaaaammmm the errrrrrrrrroorr ");
        if (error && error.response.data.message) {
          if (error.response.data.message === "Psychologyst already existing") {
            toast.error("Psychologyst already existing");
          } else if (
            error.response.data.message === "cant find psychologyst!"
          ) {
            toast.error("cant find Psychologist!");
          } else if (error.response.data.message === "something went wrong") {
            toast.error("something went wrong");
          } else {
            toast.success("successfully added Psychologist!!");
          }
        }
      }
    }
    
  };

  return (
    <div>
      <Navbar />
      <Breadcrumps />
      <div className="hiring-form-main">
        <div className="therapy-heading">
          <p>Your Applying For</p>
          <h1>NGO </h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          {/* <div className="down-arrow-conatiner">
              <img src={Downarrow} className="down-arrow" alt="" />{" "}
            <p>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p>
          </div> */}
        </div>
        <div className="hiring-form-holeconatiner">
          <div className="container-form">
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="form-affilate"
            >
              {/* Your form fields */}
              <div className="input-field">
                <label>Name of Organization </label>
                <input
                  type="text"
                  name="name_of_organization"
                  placeholder="Enter your Organization name"
                  value={formData.name_of_organization}
                  onChange={handleChange}
                />
                {errors.name_of_organization && (
                  <span className="error">{errors.name_of_organization}</span>
                )}
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email_id"
                  placeholder="Enter your email"
                  value={formData.email_id}
                  onChange={handleChange}
                />
                {errors.email_id && (
                  <span className="error">{errors.email_id}</span>
                )}
              </div>

              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="telephoneNumber"
                  accept='[0-9]'
                  placeholder="Enter mobile number"
                  value={formData.ngomobile}
                  onChange={handleChange}
                />
                {errors.telephoneNumber && (
                  <span className="error">{errors.telephoneNumber}</span>
                )}
              </div>
              <div className="input-field">
                <label> Year of establishment</label>
                <input
                  type="text"
                  name="year_of_establishment"
                  placeholder="Year of establishment"
                  value={formData.year_of_establishment}
                  onChange={handleChange}
                />
                {errors.number_of_offices && (
                  <span className="error">{errors.year_of_establishment}</span>
                )}
              </div>
              <div className="input-field">
                <label>Number of offices</label>
                <input
                  type="text"
                  name="number_of_offices"
                  placeholder="Number of offices"
                  value={formData.number_of_offices}
                  onChange={handleChange}
                />
                {errors.number_of_offices && (
                  <span className="error">{errors.number_of_offices}</span>
                )}
              </div>
              <div className="input-field">
                <label>website link</label>
                <input
                  type="text"
                  name="websiteURL"
                  placeholder="Enter mobile website link"
                  value={formData.websiteURL}
                  onChange={handleChange}
                />
                {errors.websiteURL && (
                  <span className="error">{errors.websiteURL}</span>
                )}
              </div>
              <div className="input-field">
                <label>Your Name</label>
                <input
                  type="text"
                  name="contact_person_name"
                  placeholder="Enter mobile number"
                  value={formData.contact_person_name}
                  onChange={handleChange}
                />
                {errors.contact_person_phoneNumber && (
                  <span className="error">{errors.contact_person_name}</span>
                )}
              </div>
              <div className="input-field">
                <label>Your number</label>
                <input
                  type="text"
                  name="contact_person_phoneNumber"
                  placeholder="Enter mobile number"
                  value={formData.contact_person_phoneNumber}
                  onChange={handleChange}
                />
                {errors.contact_person_phoneNumber && (
                  <span className="error">
                    {errors.contact_person_phoneNumber}
                  </span>
                )}
              </div>
              <div className="input-field">
                <label>Contact Person Designation</label>
                <input
                  type="text"
                  name="contact_person_designation"
                  placeholder="Enter mobile number"
                  value={formData.contact_person_designation}
                  onChange={handleChange}
                />
                {errors.contact_person_designation && (
                  <span className="error">
                    {errors.contact_person_designation}
                  </span>
                )}
              </div>

              {/* <div className="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="input-field">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>Candidate Profile</label>
                <input
                  type="file"
                  name="candidateProfile"
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label>Add Resume</label>
                <input type="file" name="resume" onChange={handleChange} />
              </div> */}

              <div className="agree-get">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ngoform