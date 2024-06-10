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
   websiteURL: "",
   contact_person_name: "",
   contact_person_email: "",
   contact_person_designation: "",
   school: false,
   graduate: false,
   address :"",
 });

 const handleChange = (e) => {
   const { name, value, type, checked } = e.target;
   setFormData({
     ...formData,
     [name]: type === "checkbox" ? checked : value,
   });
 };
 const handleSubmit = async (e) => {
   e.preventDefault();
   
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
   
 };

                              // SCHOOL FORM VALIDATE...........................................................


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
                className="form-affiliate"
                onSubmit={handleSubmit}
              >
                <div className="input-field">
                  <label>School Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>School Email</label>
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Enter your email"
                    value={formData.email_id}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>School Telephone Number</label>
                  <input
                    type="text"
                    name="telephoneNumber"
                    placeholder="Enter mobile number"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Website</label>
                  <input
                    type="text"
                    name="websiteURL"
                    placeholder="Enter website URL"
                    value={formData.websiteURL}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label> School Address</label>
                  <input
                    type="text"
                    name="websiteURL"
                    placeholder="Enter Your School Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Name</label>
                  <input
                    type="text"
                    name="contact_person_name"
                    placeholder="Enter contact person name"
                    value={formData.contact_person_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Email</label>
                  <input
                    type="text"
                    name="contact_person_email"
                    placeholder="Enter contact person email"
                    value={formData.contact_person_email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Designation</label>
                  <input
                    type="text"
                    name="contact_person_designation"
                    placeholder="Enter contact person designation"
                    value={formData.contact_person_designation}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>School</label>
                  <input
                    type="checkbox"
                    name="school"
                    checked={formData.school}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field" style={{ display: "none" }}>
                  <label>Graduate</label>
                  <input
                    type="checkbox"
                    name="graduate"
                    checked={formData.graduate}
                    onChange={handleChange}
                  />
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
                <div className="input-field">
                  <label>College Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>College Email</label>
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Enter your email"
                    value={formData.email_id}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>College Telephone Number</label>
                  <input
                    type="text"
                    name="telephoneNumber"
                    placeholder="Enter mobile number"
                    value={formData.telephoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Website</label>
                  <input
                    type="text"
                    name="websiteURL"
                    placeholder="Enter website URL"
                    value={formData.websiteURL}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label> College Address</label>
                  <input
                    type="text"
                    name="websiteURL"
                    placeholder="Enter Your School Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Name</label>
                  <input
                    type="text"
                    name="contact_person_name"
                    placeholder="Enter contact person name"
                    value={formData.contact_person_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Email</label>
                  <input
                    type="text"
                    name="contact_person_email"
                    placeholder="Enter contact person email"
                    value={formData.contact_person_email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Contact Person Designation</label>
                  <input
                    type="text"
                    name="contact_person_designation"
                    placeholder="Enter contact person designation"
                    value={formData.contact_person_designation}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field" style={{ display: "none" }}>
                  <label>School</label>
                  <input
                    type="checkbox"
                    name="school"
                    checked={formData.school}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Graduate</label>
                  <input
                    type="checkbox"
                    name="graduate"
                    checked={formData.graduate}
                    onChange={handleChange}
                  />
                </div>

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