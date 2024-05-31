import React,{useState,useEffect} from 'react'
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import { useParams } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../Css/Form.css";
import Navbar from "../Components/Navbar.js";
const Collegeandschoolform = () => {

      // COLLEGE FORM VALIDATE...................................................................................

 const [formData, setFormData] = useState({
   name: "",
   email_id: "",
   telephoneNumber: "",
   pincode: "",
   state: "",
   city: "",
   country: "",
   dob: "",
   qualification: "",
   yearOfPassing: "",
   college: "",
 });

 const [errors, setErrors] = useState({});

 const validate = () => {
   let tempErrors = {};
   if (!formData.name) tempErrors.name = "Name is required";
   if (!formData.email) tempErrors.email = "Email is required";
   if (!/\S+@\S+\.\S+/.test(formData.email))
     tempErrors.email = "Email is invalid";
   if (!formData.mobile) tempErrors.mobile = "Mobile number is required";
   if (!/^\d{10}$/.test(formData.mobile))
     tempErrors.mobile = "Mobile number is invalid";
   if (!formData.pincode) tempErrors.pincode = "Pincode is required";
   if (!/^\d{6}$/.test(formData.pincode))
     tempErrors.pincode = "Pincode is invalid";
   if (!formData.state) tempErrors.state = "State is required";
   if (!formData.city) tempErrors.city = "City is required";
   if (!formData.country) tempErrors.country = "Country is required";
   if (!formData.dob) tempErrors.dob = "Date of Birth is required";
   if (!formData.qualification)
     tempErrors.qualification = "Qualification is required";
   if (!formData.yearOfPassing)
     tempErrors.yearOfPassing = "Year of Passing is required";
   if (!formData.college) tempErrors.college = "College is required";
   if (!formData.cgpa) tempErrors.cgpa = "CGPA is required";
   if (!formData.internship) tempErrors.internship = "Internship is required";
   if (!formData.internshipDetails)
     tempErrors.internshipDetails = "Internship details are required";
   if (!formData.github) tempErrors.github = "Github is required";
   if (!formData.linkedIn) tempErrors.linkedIn = "LinkedIn is required";
   if (!formData.otherSocialMedia)
     tempErrors.otherSocialMedia = "Other Social Media is required";

   setErrors(tempErrors);
   return Object.keys(tempErrors).length === 0;
 };

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   if (validate()) {
     // Form is valid, proceed with form submission
     console.log(formData, "formdata");
     
    try {
      const response = await axios.post("/graduates_joining", formData);
      console.log(response, "psycoooooooooooooooooooooooooooo");
      if (response && response.data.message) {
        if (response.data.message === "Already registered!!") {
          toast.error("Sorry Your already Rigistered!!");
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
        } else if (error.response.data.message === "cant find psychologyst!") {
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

                              // SCHOOL FORM VALIDATE...........................................................


       const [formDatas, setFormDatas] = useState({
         student_name: "",
         email: "",
         contact_number: "",
         pincode: "",
         state: "",
         city: "",
         country: "",
         dob: "",
         standard: "",
         school_name: "",
       });

       const [errorss, setErrorss] = useState({});

       const handleChanges = (e) => {
         const { name, value } = e.target;
         setFormDatas({
           ...formDatas,
           [name]: value,
         });
       };

       const handleSubmits = async (e) => {
         e.preventDefault();
         const newErrors = validateFormDatas(formDatas);
         setErrors(newErrors);
         if (Object.keys(newErrors).length === 0) {
           // Form submission logic here
          }
          console.log(formDatas);
           try {
      const response = await axios.post("/graduates_joining", formDatas);
      console.log(response, "psycoooooooooooooooooooooooooooo");
      if (response && response.data.message) {
        if (response.data.message === "Already registered!!") {
          toast.error("Sorry Your already Rigistered!!");
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
        } else if (error.response.data.message === "cant find psychologyst!") {
          toast.error("cant find Psychologist!");
        } else if (error.response.data.message === "something went wrong") {
          toast.error("something went wrong");
        } else {
          toast.success("successfully added Psychologist!!");
        }
      }
    }
       };

       const validateFormDatas = (data) => {
         let errors = {};
         if (!data.student_name) {
           errors.student_name = "Full Name is required";
         }
         if (!data.email) {
           errors.email = "Email is required";
         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
           errors.email = "Invalid email address";
         }
         if (!data.contact_number) {
           errors.contact_number = "Mobile Number is required";
         } else if (!/^[0-9]{10}$/.test(data.contact_number)) {
           errors.contact_number = "Invalid phone number";
         }
         if (!data.pincode) {
           errors.pincode = "Pincode is required";
         }
         if (!data.state) {
           errors.state = "State is required";
         }
         if (!data.city) {
           errors.city = "City is required";
         }
         if (!data.country) {
           errors.country = "Country is required";
         }
         if (!data.dob) {
           errors.dob = "Date of Birth is required";
         }
         if (!data.standard) {
           errors.standard = "Standard is required";
         }
         if (!data.school_name) {
           errors.school_name = "School Name is required";
         }
         return errors;
       };


const [formType, setFormType] = useState(null); 

  return (
    <div>
      <Navbar />
      <div className="therapy-heading">
        <p>Our Goals</p>
        <h1>Join our Amazing</h1>
        <h2>Team</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
      </div>
      <div className="form-btns">
        <button onClick={() => setFormType("school")}>School</button>
        <button onClick={() => setFormType("college")}>College</button>
      </div>

      {formType === "school" && (
        <div className="hiring-form-main">
          <div className="form-btns">
            <h2>School Student Form</h2>
          </div>
          <div className="hiring-form-holeconatiner">
            <div className="container-form">
              <form
                encType="multipart/form-data"
                className="form-affilate"
                onSubmit={handleSubmits}
              >
                <div className="input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="student_name"
                    value={formDatas.student_name}
                    onChange={handleChanges}
                    placeholder="Enter your name"
                  />
                  {errorss.student_name && (
                    <div className="error">{errorss.student_name}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formDatas.email}
                    onChange={handleChanges}
                    placeholder="Enter your email"
                  />
                  {errorss.email && (
                    <div className="error">{errorss.email}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="contact_number"
                    value={formDatas.contact_number}
                    onChange={handleChanges}
                    placeholder="Enter mobile number"
                  />
                  {errorss.contact_number && (
                    <div className="error">{errorss.contact_number}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formDatas.pincode}
                    onChange={handleChanges}
                    placeholder="Enter pincode"
                  />
                  {errorss.pincode && (
                    <div className="error">{errorss.pincode}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formDatas.state}
                    onChange={handleChanges}
                    placeholder="Enter your state"
                  />
                  {errorss.state && (
                    <div className="error">{errorss.state}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formDatas.city}
                    onChange={handleChanges}
                    placeholder="Enter your city"
                  />
                  {errorss.city && <div className="error">{errorss.city}</div>}
                </div>

                <div className="input-field">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formDatas.country}
                    onChange={handleChanges}
                    placeholder="Enter your country"
                  />
                  {errorss.country && (
                    <div className="error">{errorss.country}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Date Of Birth</label>
                  <input
                    type="text"
                    name="dob"
                    value={formDatas.dob}
                    onChange={handleChanges}
                    placeholder="Enter your date of birth"
                  />
                  {errorss.dob && <div className="error">{errorss.dob}</div>}
                </div>

                <div className="input-field">
                  <label>Standard</label>
                  <input
                    type="text"
                    name="standard"
                    value={formDatas.standard}
                    onChange={handleChanges}
                    placeholder="Enter your standard"
                  />
                  {errorss.standard && (
                    <div className="error">{errorss.standard}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>School Name</label>
                  <input
                    type="text"
                    name="school_name"
                    value={formDatas.school_name}
                    onChange={handleChanges}
                    placeholder="Enter your school name"
                  />
                  {errorss.school_name && (
                    <div className="error">{errorss.school_name}</div>
                  )}
                </div>

                <div className="agree-get">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {formType === "college" && (
        <div className="hiring-form-main">
          <div className="hiring-form-holeconatiner">
            <div className="container-form">
              <div className="form-btns">
                <h2>College Graduate Form</h2>
              </div>
              <form
                encType="multipart/form-data"
                className="form-affiliate"
                onSubmit={handleSubmit}
              >
                {Object.keys(formData).map((field) => (
                  <div className="input-field" key={field}>
                    <label htmlFor={field}>
                      {field
                        .replace(/([A-Z])/g, " $1")
                        .charAt(0)
                        .toUpperCase() +
                        field.replace(/([A-Z])/g, " $1").slice(1)}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      placeholder={`Enter your ${field}`}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                    {errors[field] && (
                      <div className="error">{errors[field]}</div>
                    )}
                  </div>
                ))}
                <div className="agree-get">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collegeandschoolform