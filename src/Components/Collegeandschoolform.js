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
const Collegeandschoolform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    state: "",
    city: "",
    country: "",
    dob: "",
    qualification: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct FormData object

    const formDataObject = new FormData();
    formDataObject.append("name", formData.name);
    formDataObject.append("email", formData.email);
    formDataObject.append("mobile", formData.mobile);
    formDataObject.append("gender", formData.gender);
    formDataObject.append("state", formData.state);
    formDataObject.append("city", formData.city);
    formDataObject.append("country", formData.country);
    formDataObject.append("dob", formData.dob);
    formDataObject.append("college", formData.college);
    formDataObject.append("qualification", formData.qualification);
    formDataObject.append("yearOfpassing", formData.yearOfpassing);
    formDataObject.append("internship", formData.internship);
    formDataObject.append("internshipDetails", formData.internshipDetails);
    formDataObject.append("cgpa", formData.cgpa);
    formDataObject.append("github", formData.github);
    formDataObject.append("linkedIn", formData.linkedIn);
    formDataObject.append("otherSocialMedia", formData.otherSocialMedia);
    formDataObject.append("image", candidateProfile);
    formDataObject.append("resume", resume);
    console.log(resume, candidateProfile, "filessssssssssssss");
    console.log(formDataObject, "adasasdasdadasdas");

    try {
      const response = await axios.post(
        "admin/post_psychologyst",
        formDataObject
      );
      console.log(response, "psycoooooooooooooooooooooooooooo");
      if (response && response.data.message) {
        if (response.data.message === "Psychologyst already existing") {
          toast.error("Psychologyst already existing");
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

  return (
    <div>
      <div className="hiring-form-main">
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Join our Amazing</h1>
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
            <form encType="multipart/form-data" onSubmit={handleSubmit} className='form-affilate'>
              {/* Your form fields */}
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
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
                <label>Countru</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Date Of Birth</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Qualification</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.qualification}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Year Of Passing</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.yearOfpassing}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>College</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>CGPA</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.cgpa}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>internship</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.internship}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Internship Details</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.internshipDetails}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Github</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.github}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>linkedIn</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.linkedIn}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>Other SocialMedia</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.otherSocialMedia}
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
              </div>

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

export default Collegeandschoolform