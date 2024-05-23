import React, { useEffect, useState } from 'react'
import './Ourteam.css'
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import axios from '../../Utils/Baseurl';
import { toast } from "react-toastify";
const Ourteam = () => {

const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log(members,"jjejjje");
      const fetchMembers = async () => {
        try {
          const response = await axios.get("admin/get_all_members");
          console.log(response,"llllllalallalalalalallalllaallallalal");
          setMembers(response.data.members.allMembers);
        } catch (error) {
          console.log(error);
        }
      
    }
    fetchMembers();
  },[])
    
    const [showPopup, setShowPopup] = useState(false);
    const [videoData, setVideoData] = useState({
      videoFile: null,
    });

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    const [image,setImage] = useState(null);
    const [audio,setAudio] = useState(null);

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
     setAudio(selectedResume);
   } else {
     toast.error("Please select a file");
     e.target.value = null;
   }
 };


 const [formDatas, setformDatas] = useState({
   name: "",
   designation: "",
   socialmediaLink: "",
 });

 const handleChange = (e) => {
   const { name, value, type, files } = e.target;
   setformDatas((prevData) => ({
     ...prevData,
     [name]: type === "file" ? files[0] : value,
   }));
 };

  const [errorsup, setErrorsup] = useState({});

 const handleSubmit = async(e) => {
  console.log("im here");
   e.preventDefault();
   // Perform validation here

   const newErrors = {};

   if (!formDatas.name) { 
     newErrors.name = "Name is required";
   }

   if (!formDatas.designation) {
     newErrors.designation = "Designation is required";
   }

   if (!formDatas.socialmediaLink) {
     newErrors.socialmediaLink = "Social Media Link is required";
   }

   if (!image) {
     newErrors.image = "Image is required";
   }

   if (!audio) {
     newErrors.audio = "Audio is required";
   }

   if (Object.keys(newErrors).length > 0) {
     setErrorsup(newErrors);
     return;
   }


   try {
     const formData = new FormData();

     formData.append("name", formDatas.name);
     formData.append("designation", formDatas.designation);
     formData.append("socialmediaLink", formDatas.socialmediaLink);
     formData.append("image", image);
     formData.append("audio", audio);

     const response = await axios.post("admin/add_member", formData);
     console.log(response, "oooooooooooooooooooooo");
     togglePopup();
     setTimeout(() => {
       window.location.reload();
     }, 2000);
   } catch (error) {
     console.log(error);
   }

   // Access form values from formDatas object
   console.log("Form Data:000000000000000000000000", formDatas);

   // Reset form after submission if needed
   setformDatas({
     name: "",
     designation: "",
     socialmediaLink: "",
     image: null,
   });
 };
    const [editingRowId, setEditingRowId] = useState(null);
    const [editedData, setEditedData] = useState({});
     const handleCancelEdit = (id) => {
       setEditingRowId(null); // Reset editingRowId to null to close the form
     };

 

    const handleEditClick = (id) => {
      setEditingRowId(id);
    };
 const handleSaveEdit = () => {
        const updatedRows = members.map((row) => {
          if (row.id === editedData.id) {
            return editedData;
          }
          return row;
        });
        setMembers(updatedRows);
        setEditingRowId(null);
    };

    const handleInputChanged = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



   

    const currentDate = new Date().toISOString().slice(0, 10);
 const [filteredRows, setFilteredRows] = useState(members);
 



 const handleDateFilterChange = (event) => {
   // Implement date filter logic here
 };
   const handleSearchInputChange = (event) => {
     const searchTerm = event.target.value.toLowerCase();
     setSearchTerm(searchTerm);
   };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm)
  );

  
  const handleDeleteClick = async (id) => {
    try {
      // Delete member from the backend
      await axios.delete(`admin/delete_member/${id}`);
      // Remove member from the state
      setMembers(members.filter((member) => member._id !== id));
      toast.success("Member deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete member");
    }
  };


// EDIT FORM FOR MEMBERS.........................................................................


             const [formValues, setFormValues] = useState({
               name: "",
               designation: "",
               socialmediaLink: "",
             });

             const [audioFile, setAudioFile] = useState(null);
             const [imageFile, setImageFile] = useState(null);

             const [errors, setErrors] = useState({});

        

             const handleChanges =  (e) => {
               const { name, value } = e.target;
               setFormValues({
                 ...formValues,
                 [name]: value,
               });
             };

             const handleAudioChange = (e) => {
               setAudioFile(e.target.files[0]);
             };

             const handleImageChanges = (e) => {
               setImageFile(e.target.files[0]);
             };

             const handleSubmitt = async (e,id) => {
               e.preventDefault();
               const newErrors = {};
               if(!formValues.name){
                 newErrors.name = "Name is required";
               }

               if(!formValues.designation){
                 newErrors.designation = "Designation is required";
               }

               if(!formValues.socialmediaLink){
                 newErrors.socialmediaLink = "Social Media Link is required";
               }

               if(!imageFile){
                 newErrors.image = "Image is required";
               }

               if(!audioFile){
                 newErrors.audio = "Audio is required";
               }

               if(Object.keys(newErrors).length > 0){
                 setErrors(newErrors);
                 return;
               }

               try{ 
               
               const formData = new FormData();
               formData.append("name", formValues.name);
               formData.append("designation", formValues.designation);
               formData.append("socialmediaLink", formValues.socialmediaLink);
               formData.append("audio", audioFile);
               formData.append("image", imageFile);

               const response = await axios.post(
                  `admin/update_member/${id}`,
                 formData
               );
                 setTimeout(() => {
                   window.location.reload();
                 }, 2000);
               console.log(response, "oooooooooooooooooooooo");
              }catch(error){
                console.log(error);
              }
              
             };



  return (
    <div>
      <div className="Ourteam-main-conainer">
        <div className="Ourteam-top-btns">
          <p>Team</p>
          <button onClick={togglePopup}>Edit</button>
        </div>

        <div className="adimin-filter-box">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              class="input"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        {showPopup && (
          <div className="team-admin-form">
            <div className="video-popup">
              <div className="video-popup-content">
                {/* <span className="close" onClick={togglePopup}>
                <CgCloseO />
              </span> */}
                <h2>Upload Video</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="video-top-inputs">
                    <div>
                      <label>Employee Name :</label>
                      <input
                        type="text"
                        placeholder="Enter the title"
                        name="name"
                        value={formDatas.name}
                        onChange={handleChange}
                      />
                      {errorsup && <p>{errorsup.name}</p>}
                    </div>
                    <div>
                      <label>Designation:</label>
                      <input
                        type="text"
                        placeholder="Enter the title"
                        name="designation"
                        value={formDatas.designation}
                        onChange={handleChange}
                      />
                      {errorsup && <p>{errorsup.designation}</p>}
                    </div>
                    <div>
                      <label>Social Media Link:</label>
                      <input
                        type="text"
                        placeholder="Enter the title"
                        name="socialmediaLink"
                        value={formDatas.socialmediaLink}
                        onChange={handleChange}
                      />
                      {errorsup && <p>{errorsup.socialmediaLink}</p>}
                    </div>
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>Audio</label>
                    <input
                      type="file"
                      name="audio"
                      onChange={handleResumeChange}
                    />
                    {errorsup && <p>{errorsup.audio}</p>}
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                    />
                    {errorsup && <p>{errorsup.image}</p>}
                  </div>
                  <div className="video-submit-btns">
                    <button type="submit">Submit</button>
                    {/* Assuming togglePopup is a function to toggle a popup */}
                    <button type="button" onClick={togglePopup}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div class="box-wrap">
          {" "}
          <div className="table-container">
            <table>
              {filteredMembers.length === 0 ? (
                <p>{searchTerm} data found</p>
              ) : (
                <tbody>
                  <tr style={{ backgroundColor: "red" }}>
                    <th>Sr. no |</th>
                    <th>Image</th>
                    <th>Name|</th>
                    <th>Position |</th>
                    <th>social media |</th>
                    <th>Actions |</th>
                    <th>Admin |</th>
                  </tr>
                  {members.map((row, index) => (
                    <tr key={row._id}>
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td>
                        <img
                          src={row.image}
                          alt="image"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>
                        <p>{row.name}</p>
                      </td>
                      <td>
                        <p>{row.designation}</p>
                      </td>
                      <td>
                        <p>{row.socialmediaLink}</p>
                      </td>
                      <td>
                        {/* {editingRowId === row.id ? (
                          <div className="action-buttons-save">
                            <button onClick={handleSaveEdit}>
                              Save <LiaSaveSolid className="video-save" />
                            </button>
                          </div>
                        ) : ( */}
                        <div className="action-buttons">
                          <button onClick={() => handleDeleteClick(row._id)}>
                            Delete <CgCloseO className="video-delete-new" />
                          </button>
                          <button onClick={() => handleEditClick(row._id)}>
                            Edit <AiOutlineEdit className="video-edit" />
                          </button>
                          {editingRowId === row._id && (
                            <form
                              onSubmit={(e) => handleSubmitt(e, row._id)}
                              encType="multipart/form-data"
                            >
                              <div className="video-top-inputs">
                                <div>
                                  <label>Employee Name :</label>
                                  <input
                                    type="text"
                                    placeholder="Enter the name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChanges}
                                  />
                                  {errors.name && <span>{errors.name}</span>}
                                </div>
                                <div>
                                  <label>Designation:</label>
                                  <input
                                    type="text"
                                    placeholder="Enter the designation"
                                    name="designation"
                                    value={formValues.designation}
                                    onChange={handleChanges}
                                  />
                                  {errors.designation && (
                                    <span>{errors.designation}</span>
                                  )}
                                </div>
                                <div>
                                  <label>Social Media Link:</label>
                                  <input
                                    type="text"
                                    placeholder="Enter the social media link"
                                    name="socialmediaLink"
                                    value={formValues.socialmediaLink}
                                    onChange={handleChanges}
                                  />
                                  {errors.socialmediaLink && (
                                    <span>{errors.socialmediaLink}</span>
                                  )}
                                </div>
                              </div>
                              <div className="video-thumbnil-inputs">
                                <label>Audio</label>
                                <input
                                  type="file"
                                  name="audio"
                                  onChange={handleAudioChange}
                                />
                                {errors.audio && <span>{errors.audio}</span>}
                              </div>
                              <div className="video-thumbnil-inputs">
                                <label>Image</label>
                                <input
                                  type="file"
                                  name="image"
                                  onChange={handleImageChanges}
                                />
                                {errors.image && <span>{errors.image}</span>}
                              </div>
                              <div className="video-submit-btns">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={togglePopup}>
                                  Cancel
                                </button>
                              </div>
                            </form>
                          )}
                        </div>
                        {/* )} */}
                      </td>
                      <td>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam