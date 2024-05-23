
import React, { useState } from "react";
import "../Css/HiringForm.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import { useParams } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const HiringForm = (props) => {
  const [file, setFile] = useState(null);
  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    mobile: "",
    coverletter: "",
    position: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { position } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatas({ ...formDatas, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user makes a change
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      toast.error("Please select a PDF or Word file.");
      // Clear the file input
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      const formErrors = {};

      if(!formDatas.name.trim()){
        formErrors.name = "Name is required";
      }

      if(!formDatas.email.trim()){  
        formErrors.email = "Email is required";
      }

      if(!formDatas.mobile){
        formErrors.mobile = "Mobile is required";
      }

      if(!formDatas.position){
        formErrors.position = "Position is required";
      }
      if(!formDatas.coverletter){
        formErrors.coverletter = "Cover letter is required";
      }
      if(!file){
        formErrors.resume = "Resume is required";
      }

      if(Object.keys(formErrors).length > 0){
        setErrors(formErrors);
        toast.error("Please fill out all fields");
        return;
      }


      // Form is valid, proceed with submission
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("name", formDatas.name);
      formData.append("email", formDatas.email);
      formData.append("mobile", formDatas.mobile);
      formData.append("position", formDatas.position);
      formData.append("coverletter", formDatas.coverletter);
      console.log(formData);

      try {
        const response = await axios.post("/application", formData);
        if (response.status === 200) {
          toast.success("Successfully submitted the application form!");
          setFormDatas({
            name: "",
            email: "",
            mobile: "",
            coverletter: "",
            position: "",
            agree: false,
          })
          setFile(null);

        } else {
          toast.error("Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form. Please try again later.");
      }
 
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="green-information">
              <input type="hidden" name="position" value={position} />
              <span className="form-position">
                Position Applied For :{position}
              </span>
              </div>
              <div className="form-first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formDatas.name}
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
                        value={formDatas.email}
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
                        value={formDatas.mobile}
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
                        value={formDatas.position}
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
                        onChange={handleFileSelect}
                        style={{ marginTop: "0px" }}
                      />
                      {errors.resume && (
                        <span className="error">{errors.resume}</span>
                      )}
                    </div>

                    <div className="input-field">
                      <label>Cover Letter</label>
                      <input
                        type="text"
                        name="coverletter"
                        placeholder="Enter your cover letter"
                        value={formDatas.coverletter}
                        onChange={handleChange}
                        className="input-coverletter"
                      />
                      {errors.coverletter && (
                        <span className="error">{errors.coverletter}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="agree-get">
                {/* Checkbox and agreement text */}
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