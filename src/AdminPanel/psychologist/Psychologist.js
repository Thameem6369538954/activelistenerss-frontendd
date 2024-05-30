
import React, { useEffect, useState } from "react";
import "./Psychologist.css";
import mahesh from "../../Images/mahesh.jpeg";
import axios from "../../Utils/Baseurl.js";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Psyco from "../../Images/Psyco.png";
import Item from "antd/es/list/Item.js";

const Psychologist = () => {
  const [psychologist,setPsychologist] = useState([]);
const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const getPsychologist = async () => {
      try {
        const response = await axios.get("admin/view_psychologyst");
        console.log(response.data.psychos,"allpsychoooooooos here");
        setPsychologist(response.data.psychos);
      } catch (error) {
        console.log(error);
      }
    }
    getPsychologist();
  },[])


  const [showPopup, setShowPopup] = useState(false);
  const [textFormData, setTextFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    gender: "", // default value
  });
  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setTextFormData({
      ...textFormData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    } else {
      toast.error("Please select an image");
      e.target.value = null;
    }
  };

  const handleResumeChange = (e) => {
    const selectedResume = e.target.files[0];
    if (selectedResume) {
      setResume(selectedResume);
    } else {
      toast.error("Please select a file");
      e.target.value = null;
    }
  };

  const [errors,setErrors] = useState({});

  const handleSubmit = async (e) => {
    console.log("im here");
    console.log(textFormData,"datas");
    console.log(image,"image");
    console.log(resume,"resume");
      
    e.preventDefault();
    const formErrors = {};

    if(!textFormData.name.trim()){
      formErrors.name = "Name is required";
    }

    if(!textFormData.email){
      formErrors.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(textFormData.email)){
      formErrors.email = "Email address is invalid";
    }

    if(!textFormData.phoneNumber){
      formErrors.phoneNumber = "Phone number is required";
    }else if(!/^[0-9]{10}$/.test(textFormData.phoneNumber)){
      formErrors.phoneNumber = "Invalid phone number";
    }

    if(!textFormData.city){
      formErrors.city = "City is required";
    }

    if(!textFormData.state){
      formErrors.state = "State is required";
    }

    if(!textFormData.gender){
      formErrors.gender = "Gender is required";
    }

    if(!image){
      formErrors.image = "Image is required";
    }

    if(!resume){
      formErrors.resume = "Resume is required";
    }

    if(Object.keys(formErrors).length > 0){ 
      setErrors(formErrors);
      return;     
    }


      const formData = new FormData();

      formData.append("name", textFormData.name);
      formData.append("email", textFormData.email);
      formData.append("mobile", textFormData.phoneNumber);
      formData.append("city", textFormData.city);
      formData.append("state", textFormData.state);
      formData.append("gender", textFormData.gender);
      formData.append("image", image);
      formData.append("resume", resume);

      console.log("FormData:", formData);

    try {
      // Send formData to the server using axios
      const response = await axios.post("admin/post_psychologyst", formData);
      console.log("Response:", response);
      // Reset form fields after successful submission
      setTextFormData({
        name: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        gender: "",
      });
      setImage(null);
      setResume(null);
      togglePopup(); // Close the popup after submission
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };


  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredPsychologists = psychologist.filter((psych) =>
    psych.name.toLowerCase().includes(searchInput.toLowerCase())
  );

    const handleDelete = async (id) => {
      try {
        await axios.delete(`admin/delete_psychologyst/${id}`);
        setPsychologist((prevPsychologist) =>
          prevPsychologist.filter((psych) => psych._id !== id)
        );
        toast.success("Psychologist deleted successfully");
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete psychologist");
      }
    };

  return (
    <div>
      <div className="headeing-admin-psygologiy">
        <h1>Psychologist</h1>
        <button onClick={togglePopup}>Add Psychologist</button>
      </div>
      <div className="search-for-psycologiest">
        <div className="psycologist-search">
          <input
            type="text"
            placeholder="Search for Psychologist"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button>Search</button>
        </div>
      </div>
      {showPopup && (
        <div className="video-popup">
          <div className="video-popup-content">
            <h2>Add Psychologist</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="video-top-inputs">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={textFormData.name}
                    placeholder="Enter the name"
                    onChange={handleTextChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={textFormData.email}
                    placeholder="Enter the email"
                    onChange={handleTextChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={textFormData.phoneNumber}
                    placeholder="Enter the phone number"
                    onChange={handleTextChange}
                  />
                  {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={textFormData.city}
                    placeholder="Enter the city"
                    onChange={handleTextChange}
                  />
                  {errors.city && <p>{errors.city}</p>}
                </div>
                <div>
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={textFormData.state}
                    placeholder="Enter the state"
                    onChange={handleTextChange}
                  />
                  {errors.state && <p>{errors.state}</p>}
                </div>
                <div className="select-page-videos">
                  <label>Gender :</label>
                  <select
                    name="gender"
                    value={textFormData.gender}
                    onChange={handleTextChange}
                  >
                    <option value="">Select the Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && <p>{errors.gender}</p>}
                </div>
              </div>
              <div className="video-thumbnil-inputs">
                <label>Image</label>
                <input type="file" name="image" onChange={handleImageChange} />
                {errors.image && <p>{errors.image}</p>}
              </div>
              <div>
                <label>Resume :</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleResumeChange}
                />
                {errors.resume && <p>{errors.resume}</p>}
              </div>
              <div className="video-submit-btns">
                <button type="submit">Submit</button>
                <button type="button" onClick={togglePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="adimin-psyco-box">
        <div className="psycologist-box-conatiner-admint">
          <div className="team-psychologist-box-conatiner-a">
            {filteredPsychologists.length > 0 ? (
              filteredPsychologists.map((items) => (
                <div>
                  <div className="psycologist-box-admint-main">
                    <div
                      className="team-psychologist-admin-box"
                      key={items._id}
                    >
                      <img src={items.image} alt="" />
                      <div className="psychologist-box-inside-a">
                        <span style={{ color: "#256C55" }}>
                          {items.position}
                        </span>
                        <h1>{items.name}</h1>
                        <p>{items.email}</p>
                        <hr></hr>
                        <div className="follow-box">
                          <p>Follow me :</p>
                          <div className="follw-icons">
                            <FaWhatsapp />
                            <FaInstagram />
                            <PiFacebookLogoBold />
                            <FaXTwitter />
                          </div>
                          <div className="edit-box-in-pyso">
                            <button>Edit</button>
                            <button onClick={() => handleDelete(items._id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              
              <div className="not-found">
              <p>{searchInput} is s found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychologist;

