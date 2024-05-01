// import React, { useState } from "react";
// import "./Psychologist.css";
// import mahesh from "../../Images/mahesh.jpeg";
// import axios from "../../Utils/Baseurl.js";

// const Psychologist = () => {
//   const [psychologist, setPsychologist] = useState([
//     {
//       id: 1,
//       name: "Mahesh",
//       email: "active@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 3,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 4,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 5,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 6,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 7,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//     {
//       id: 8,
//       name: "Jukkoe Sisao",
//       email: "john@gmail.com",
//       cate: "Behavioural Psychologist",
//       status: "active",
//       image: mahesh,
//     },
//   ]);
//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const [showPopup, setShowPopup] = useState(false);



 

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setTextFormData({
//       ...textFormData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//    setImage(e.target.files[0])
//   };
//   // console.log(image);




  

// const [image, setImage] = useState(null);
// const [resume, setResume] = useState(null);

// var [textFormData, setTextFormData] = useState({
//   name: "",
//   email: "",
//   phoneNumber: "",
//   city: "",
//   state: "",
//   gender: "", // default value
// });



// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData();

//   formData.append("name", textFormData.name);
//   formData.append("image", image);

//   console.log("FormData:pppppppppppppppppppppppp", formData);
// };

  
//   return (
//     <div>
//       <div>
//         <div className="headeing-admin-psygologiy">
//           <h1>Psychologist</h1>
//           <button onClick={togglePopup}>Add Psychologist</button>
//         </div>
//         {showPopup && (
//           <div className="video-popup">
//             <div className="video-popup-content">
//               {/* <span className="close" onClick={togglePopup}>
//                 <CgCloseO />
//               </span> */}
//               <h2>Add Psychologist</h2>
//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="video-top-inputs">
//                   <div>
//                     <label>Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={textFormData.name}
//                       placeholder="Enter the title"
//                       onChange={handleTextChange}
//                     />
//                   </div>
//                   <div>
//                     <label>Email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={textFormData.email}
//                       placeholder="Enter the title"
//                       onChange={handleTextChange}
//                     />
//                   </div>
//                   <div>
//                     <label>Phone Number</label>
//                     <input
//                       type="text"
//                       name="phoneNumber"
//                       value={textFormData.phoneNumber}
//                       placeholder="Enter the title"
//                       onChange={handleTextChange}
//                     />
//                   </div>
//                   <div>
//                     <label>City</label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={textFormData.city}
//                       placeholder="Enter the title"
//                       onChange={handleTextChange}
//                     />
//                   </div>
//                   <div>
//                     <label>State</label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={textFormData.state}
//                       placeholder="Enter the title"
//                       onChange={handleTextChange}
//                     />
//                   </div>
//                   <div className="select-page-videos">
//                     <label>Gender :</label>
//                     <select
//                       name="gender"
//                       value={textFormData.gender}
//                       onChange={handleTextChange}
//                     >
//                       <option value="volvo">Select the Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="video-thumbnil-inputs">
//                   <label>Image</label>
//                   <input
//                     type="file"
//                     name="image"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//                 <div>
//                   <label>Resume :</label>
//                   <input
//                     type="file"
//                     name="resume"
//                     // onChange={handleResumeChange}
//                   />
//                 </div>
//                 <div className="video-submit-btns">
//                   <button type="submit">Submit</button>
//                   <button type="button" onClick={togglePopup}>
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//         <div className="psycologist-box-conatiner-admint">
//           <div className="psycologist-box-admint-main">
//             {psychologist.map((psycos) => {
//               return (
//                 <div className="psycologist-box-admint">
//                   <div className="psycologist-box-admint-main">
//                     <div className="psycologist-box-admint-heading">
//                       <img src={mahesh} alt="" />
//                       <h1>{psycos.name}</h1>
//                       <h3>{psycos.email}</h3>
//                       <p>{psycos.cate}</p>
//                       <div className="active-pspyco-btn">
//                         <button>View Profile</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Psychologist;






















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

  // const psychologist = [
  //   {
  //     id: 1,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  //   {
  //     id: 2,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  //   {
  //     id: 3,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  //   {
  //     id: 4,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  //   {
  //     id: 5,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  //   {
  //     id: 6,
  //     name: "Jennifer kale",
  //     position: "Psychologist",
  //     image: Psyco,
  //     dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
  //   },
  // ];

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


  const handleSubmit = async (e) => {
    console.log("im here");
    console.log(textFormData,"datas");
    console.log(image,"image");
    console.log(resume,"resume");
      e.preventDefault();
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
                </div>
              </div>
              <div className="video-thumbnil-inputs">
                <label>Image</label>
                <input type="file" name="image" onChange={handleImageChange} />
              </div>
              <div>
                <label>Resume :</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleResumeChange}
                />
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
              <p>No psychologists found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychologist;

