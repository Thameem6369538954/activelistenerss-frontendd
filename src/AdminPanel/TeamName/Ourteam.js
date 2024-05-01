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

 const handleSubmit = async(e) => {
  console.log("im here");
   e.preventDefault();
   // Perform validation here
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
    // const [rows, setMembers] = useState([
    //   {
    //     id: 1,
    //     column1: "01",
    //     name: "Thameem",
    //     position: "front-end developer",
    //     image: "https://via.placeholder.com/150",
    //   },
    //   {
    //     id: 2,
    //     column1: "02",
    //     name: "Ansari",
    //     position: "back-end developer",
    //     image: "https://via.placeholder.com/150",
    //   },
    //   // Add more rows as needed
    // ]);
    const [editingRowId, setEditingRowId] = useState(null);
    const [editedData, setEditedData] = useState({});

    // const handleDeleteClick = (id) => {
    //   setMembers(members.filter((row) => row._id !== id));
    // };

    const handleEditClick = (members) => {
      setEditingRowId(members._id);
      setEditedData(members);
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

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //         setEditedData((prevData) => ({
    //             ...prevData,
    //             image: event.target.result,
    //         }));
    //     };
    //     reader.readAsDataURL(file);
    // };

    const handleCancelEdit = () => {
        setEditingRowId(null); // Reset editingRowId to null to close the form
    };

    const currentDate = new Date().toISOString().slice(0, 10);
 const [filteredRows, setFilteredRows] = useState(members);
 

//  const handleSearchInputChange = (event) => {
//    const searchTerm = event.target.value.toLowerCase();
//    setSearchTerm(searchTerm);
//    const filteredRows = members.filter((row) =>
//      row.name.toLowerCase().includes(searchTerm)
//    );
//    setFilteredRows(filteredRows);
//  };

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
                    </div>
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>Audio</label>
                    <input
                      type="file"
                      name="audio"
                      onChange={handleResumeChange}
                    />
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                    />
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
                        {editingRowId === row.id ? (
                          <div className="action-buttons-save">
                            <button onClick={handleSaveEdit}>
                              Save <LiaSaveSolid className="video-save" />
                            </button>
                          </div>
                        ) : (
                          <div className="action-buttons">
                            <button onClick={() => handleDeleteClick(row._id)}>
                              Delete <CgCloseO className="video-delete-new" />
                            </button>
                            <button onClick={() => handleEditClick(row)}>
                              Edit <AiOutlineEdit className="video-edit" />
                            </button>
                          </div>
                        )}
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
            {editingRowId && (
              <form>
                <div className="edit-form">
                  <div className="edit-form-cancel">
                    <button type="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </div>
                  <div>
                    <label>image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  <div>
                    <label>Title :</label>
                    <input
                      type="text"
                      name="column3"
                      value={editedData.column3}
                      onChange={handleInputChanged}
                    />
                  </div>
                  <div>
                    <label>Page Name :</label>
                    <input
                      type="text"
                      name="column4"
                      value={editedData.column4}
                      onChange={handleInputChanged}
                    />
                  </div>
                </div>

                <div></div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam