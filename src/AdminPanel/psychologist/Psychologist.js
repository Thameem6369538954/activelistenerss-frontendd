import React, { useState } from 'react'
import "./Psychologist.css"
import mahesh from "../../Images/mahesh.jpeg";

const Psychologist = () => {
  
      const [psychologist, setPsychologist] = useState([
        {
          id: 1,
          name: "Mahesh",
          email: "active@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 3,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 4,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 5,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 6,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 7,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
        {
          id: 8,
          name: "Jukkoe Sisao",
          email: "john@gmail.com",
          cate: "Behavioural Psychologist",
          status: "active",
          image: mahesh,
        },
      ]);
       const togglePopup = () => {
         setShowPopup(!showPopup);
       };

       const [formData, setFormData] = useState({
         title: "",
         description: "",
         category: "",
         thumbnail: null,
         
       });

       const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData({
           ...formData,
           [name]: value,
         });
       };

const [showPopup, setShowPopup] = useState(false);
 const handleSubmit = (e) => {
   e.preventDefault();
   // You can perform form submission logic here
   // For example, you can send the formData to your server
   console.log(formData);
   
 };
  return (
    <div>
      <div>
        <div className="headeing-admin-psygologiy">
          <h1>Psychologist</h1>
          <button onClick={togglePopup}>Add Psychologist</button>
        </div>
        {showPopup && (
          <div className="video-popup">
            <div className="video-popup-content">
              {/* <span className="close" onClick={togglePopup}>
                <CgCloseO />
              </span> */}
              <h2>Add Psychologist</h2>
              <form onSubmit={handleSubmit}>
                <div className="video-top-inputs">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>State</label>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="select-page-videos">
                    <label>Gender : </label>
                    <select name="cars" id="cars" onChange={handleChange}>
                      <option value="volvo">Select the Gender</option>
                      <option value="saab">Male</option>
                      <option value="opel">Female</option>
                    </select>
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input type="file" onChange={handleChange} />
                </div>
                <label>Resume :</label>
                <input type="file" />
                {/* <div className="video-admin-inputs">
                  <h2>Drag and Drop Files here</h2>
                  <input
                    type="file"
                    id="videoFile"
                    name="videoFile"
                    style={{ display: "none" }} 
                  />
                  <label
                    htmlFor="videoFile"
                    className="custom-file-input"
                    data-file-name=""
                  >
                    Upload a file
                  </label>
                </div> */}
                <div className="video-submit-btns">
                  <button type="submit">Submit</button>
                  <button type="submit" onClick={togglePopup}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="psycologist-box-conatiner-admint">
          <div className="psycologist-box-admint-main">
            {psychologist.map((psycos) => {
              return (
                <div className="psycologist-box-admint">
                  <div className="psycologist-box-admint-main">
                    <div className="psycologist-box-admint-heading">
                      <img src={mahesh} alt="" />
                      <h1>{psycos.name}</h1>
                      <h3>{psycos.email}</h3>
                      <p>{psycos.cate}</p>
                      <div className="active-pspyco-btn">
                        <button>View Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Psychologist