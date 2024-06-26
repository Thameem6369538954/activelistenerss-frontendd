import React,{useState,useEffect} from 'react'


import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import { useParams } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar.js';
import Breadcrumps from './Breadcrumps.js';
const Psycologistform = () => {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   mobile: "",
   gender: "",
   state: "",
   city: "",
 });

 const [candidateProfile, setCandidateProfile] = useState(null);
 const [resume, setResume] = useState(null);

 const handleChange = (e) => {
   const { name, value, files } = e.target;
   if (name === "candidateProfile") {
     setCandidateProfile(files ? files[0] : null);
   } else if (name === "resume") {
     setResume(files ? files[0] : null);
   } else {
     setFormData({
       ...formData,
       [name]: value,
     });
   }
 };
 

 const [errors, setErrors] = useState({});
 
 const handleSubmit = async (e) => {
   e.preventDefault();
   // Construct FormData object


   const formErrors = {};
   
   const gmailRegex = /^[a-z][a-z0-9]*@gmail\.(com|in)$/;

   if (!formData.name.trim()) {
     formErrors.name = "Name is required";
   }
  

   if (!formData.email) {
     formErrors.email = "Email is required";

   } else if (!gmailRegex.test(formData.email)) {
     formErrors.email = "Email address is invalid";
   }

   if (!formData.mobile) {
     formErrors.mobile = "Mobile is required";

   } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
     formErrors.mobile = "Invalid mobile number";
   }

   if (!formData.gender) {
     formErrors.gender = "Gender is required";

   }

   if (!formData.state) {
     formErrors.state = "State is required";

   }

   if (!formData.city) {
     formErrors.city = "City is required";

   }

   if(!candidateProfile){
     formErrors.candidateProfile = "Candidate Profile is required";
   }

   if(!resume){
     formErrors.resume = "Resume is required";
   }


   if (Object.keys(formErrors).length > 0) {
     setErrors(formErrors);
     return;
   }



   
   const formDataObject = new FormData();
   formDataObject.append("name", formData.name);
   formDataObject.append("email", formData.email);
   formDataObject.append("mobile", formData.mobile);
   formDataObject.append("gender", formData.gender);
   formDataObject.append("state", formData.state);
   formDataObject.append("city", formData.city);
   formDataObject.append("image", candidateProfile);
   formDataObject.append("resume", resume);
   console.log(resume, candidateProfile,"filessssssssssssss");
   console.log(formDataObject, "adasasdasdadasdas");

        try {
            const response = await axios.post("admin/post_psychologyst", formDataObject);
            console.log(response,"psycoooooooooooooooooooooooooooo");
            if(response && response.data.message){
                if(response.data.message === "Psychologyst already existing"){
                    toast.error("Psychologyst already existing");
                }else if (response.data.message === "cant find psychologyst!") {
                    toast.error("cant find Psychologist!");
                }else if(response.data.message==="something went wrong"){
                    toast.error("something went wrong");
                }else{
                    toast.success(" Your Form Submitted successfully !! Thanks for your interest in joining our team.");
                    setFormData({
                      name: "",
                      email: "",
                      mobile: "",
                      gender: "",
                      state: "",
                      city: "",
                      
                    })
                }
            }
        } catch (error) {
            console.log(error,"iaaaaaaaaaaaaaammmm the errrrrrrrrroorr ");
            if (error && error.response.data.message) {
              if (
                error.response.data.message ===
                "Psychologyst already existing"
              ) {
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

  return (
    <div>
      <Navbar />
      <Breadcrumps />
      <div className="hiring-form-main">
        <div className="therapy-heading">
          <p>Your Applying For</p>
          <h1>Psychologist</h1>
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
            <form encType="multipart/form-data" className='psyco-form' onSubmit={handleSubmit}>
              <div className="form-affilate">
                <div className="input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
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
                  {errors.email && <p className="error">{errors.email}</p>}
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
                  {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div>

                <div className="input-field">
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
                  {errors.gender && <p className="error">{errors.gender}</p>}
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
                  {errors.state && <p className="error">{errors.state}</p>}
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
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>

                <div className="input-field">
                  <label>Candidate Profile</label>
                  <input
                    type="file"
                    name="candidateProfile"
                    onChange={handleChange}
                  />
                  {errors.candidateProfile && (
                    <p className="error">{errors.candidateProfile}</p>
                  )}
                </div>

                <div className="input-field">
                  <label>Add Resume</label>
                  <input type="file" name="resume" onChange={handleChange} />
                  {errors.resume && <p className="error">{errors.resume}</p>}
                </div>
              </div>
              {/* Your form fields */}

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

export default Psycologistform