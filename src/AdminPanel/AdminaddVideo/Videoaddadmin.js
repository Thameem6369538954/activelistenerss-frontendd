import React, { useEffect, useState } from 'react';
import "./Videoaddadmin.css";
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import axios from "../../Utils/Baseurl";
import { toast } from "react-toastify";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Videoaddadmin = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response);
        if (response) {
          setRows(response.data.reslt);
        } else {
          toast.error("something went wrong!!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [newPopupEdit, setNewPopupEdit] = useState(false);
  const [fieldData, setFieldData] = useState({
    title: "",
    page: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [source, setSource] = useState(null);
  const [errors, setErrors] = useState({});
  const handleSelectThumb = (e) => {
    const thumb = e.target.files[0];
    if (thumb) {
      setThumbnail(thumb);
    } else {
      e.target.value = null;
    }
  };

  const handleSelectSource = (e) => {
    const source = e.target.files[0];
    if (source) {
      setSource(source);
    } else {
      e.target.value = null;
    }
  };

  var togglePopup = () => {
    setShowPopup(!showPopup);
  };
  var togglePopupNew = () => {
    setNewPopupEdit(!newPopupEdit);
  };
  // State variable to track the ID of the currently edited video
  const [currentEditId, setCurrentEditId] = useState(null);

  // Function to toggle the edit form
  const togglePopupEditnewone = (id) => {
    setCurrentEditId(id);
  };
  // const [opn, setOpn] = useState(false);
  // var togglePopupEditnewone = () => {
  //   setOpn(!opn);
  // };

  const togglePopupedit = () => {
    setShowPopupEdit(!showPopupEdit);
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data
    const formErrors = {};
    if (!fieldData.title.trim()) {
      formErrors.title = "Title is required";
    }
    if (!fieldData.page) {
      formErrors.page = "Page selection is required";
    }
    if (!thumbnail) {
      formErrors.thumbnail = "Thumbnail is required";
    }
    if (!source) {
      formErrors.source = "Video file is required";
    }


      if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }
    console.log(thumbnail, "pppppppppppppppppp");
    const formData = new FormData();

    formData.append("title", fieldData.title);
    formData.append("page", fieldData.page);
    formData.append("thumbnail", thumbnail);
    formData.append("source", source);
    console.log(formData);
    try {
      const response = await axios.post("admin/add_videos", formData);
      console.log(response, "kktt");
      if (response) {
        console.log(response.data.message);
        if (response.data.message === "successfully added Video!!") {
          toast.success("successfully added Video!!");
          setFieldData({ title: "", page: "" });
          setThumbnail(null);
          setSource(null);
          togglePopup();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.success("Something went wrong!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`admin/delete_one_video/${id}`);
      console.log(response);
      if (response) {
        if (response.data.message === "successfully deleted!!") {
          toast.success("deleted!!");
          setRows(rows.filter((row) => row._id !== id));
        }
      }
    } catch (error) {
      toast.error("Please try again later!!");
    }
  };

  const handleEditClick = async (id) => {
    togglePopupNew();
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClickandSave = () => {
    setIsEditing(true);
    // You can perform additional actions related to editing here if needed
  };

  const [formDatass, setFormDatass] = useState({
    title: "",
    page: "",
    //  category: "",
  });
  const [thumbnails, setThumbnails] = useState(null);
  const [podcastVideo, setPodcastVideo] = useState(null);


  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormDatass({
      ...formDatass,
      [name]: value,
    });
  };

  const handleThumbnailChanged = (e) => {
    const file = e.target.files[0];
    setThumbnails(file);
  };

  const handlePodcastVideoChange = (e) => {
    const file = e.target.files[0];
    setPodcastVideo(file);
  };

    
    const [updateError, setUpdateError] = useState({});
  const handleSubmitt = async (e, id) => {
    e.preventDefault();
    console.log(id, "idddddddddddddddddddddddddddd");
    


    const editErrors = {};

    if (!formDatass.title.trim()) {
      editErrors.title = "Title is required";
    }
    if(!formDatass.page){
      editErrors.page = "Page selection is required";
    }
    if(!thumbnails){  
      editErrors.thumbnail = "Thumbnail is required";
    }
    if(!podcastVideo){
      editErrors.source = "Video file is required";
    }

    if(Object.keys(editErrors).length > 0) {
      setUpdateError(editErrors);
      return;
    }
    
    const formData = new FormData();
    formData.append("title", formDatass.title);
    formData.append("page", formDatass.page);
    formData.append("category", formDatass.category);
    formData.append("thumbnail", thumbnails);
    formData.append("source", podcastVideo);
    
    // Make your axios call here
    //  const {Id} = id;
    //  console.log(Id,"idddddddddddddddddddddddddddd");
    console.log(formData, "podcasttttttttttttttttttttttttt");
    try {
        const response = await axios.post(
          `admin/view_and_editVideo/${id}`,
          formData
        );
        console.log(response, "Response from server");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        if(response.data.message==="successfully updated!!"){
          toast.success("successfully updated!!")
        }
      
    } catch (error) {
      console.log(error);
    }
    togglePopupEditnewone();
  };
  // const existingData = {
  //   title: "title",
  //   page: "page",
  //   category: "category",
  //   thumbnail: "thumbnail",
  //   source: "source",
  // };

 
  return (
    <div>
      <div className="video-add-main-container">
        <div className="video-add-top-btn">
          <h1>Upload Video</h1>
          <button onClick={togglePopup}>Upload a New Video</button>
        </div>
        {showPopup && (
          <div className="video-popup">
            <div className="video-popup-content">
              <h2>Upload Video</h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="video-top-inputs">
                  <div>
                    <label>Title of the Video</label>
                    <input
                      type="text"
                      value={fieldData.title}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, title: e.target.value })
                      }
                      placeholder="Enter the title"
                    />
                    {errors.title && (
                      <span className="error">{errors.title}</span>
                    )}
                  </div>
                  <div className="select-page-videos">
                    <label>Select Page : </label>
                    <select
                      name="page"
                      id="page"
                      value={fieldData.page}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, page: e.target.value })
                      }
                    >
                      <option value="">Select the Page</option>
                      <option value="home">Home Page</option>
                      <option value="senses">Senses Resurrection</option>
                      <option value="oneone">One-On-One Session</option>
                    </select>
                    {errors.page && (
                      <span className="error">{errors.page}</span>
                    )}
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    onChange={handleSelectThumb}
                  />
                  {errors.thumbnail && (
                    <span className="error">{errors.thumbnail}</span>
                  )}
                </div>
                <label>Upload Video</label>
                <div className="video-admin-inputs">
                  <h2>Drag and Drop Files here</h2>
                  <input
                    type="file"
                    id="videoFile"
                    name="videoFile"
                    onChange={handleSelectSource}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="videoFile"
                    className="custom-file-input"
                    data-file-name=""
                  >
                    Upload a file
                  </label>
                </div>
                {errors.source && (
                  <span className="error">{errors.source}</span>
                )}
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

        <div className="box-wrap">
          <div className="table-container">
            <table>
              <tbody>
                <tr style={{ backgroundColor: "red" }}>
                  <th>Sr. no |</th>
                  <th>Thumbnail |</th>
                  <th>Video Title |</th>
                  <th>Page |</th>
                  <th>Actions |</th>
                </tr>
                {rows.map((row, index) => (
                  <tr key={row._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={row.thumbnail}
                        alt="Thumbnail"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{row.title}</td>
                    <td>{row.page}</td>
                    <td>
                      <div className="action-buttons">
                        <button onClick={() => handleDeleteClick(row._id)}>
                          Delete <CgCloseO className="video-delete-new" />
                        </button>
                        <button onClick={() => togglePopupEditnewone(row._id)}>
                          Edit <AiOutlineEdit className="video-edit" />
                        </button>
                      </div>
                      {currentEditId === row._id && (
                        <div className="video-edit-pop">
                          <form
                            onSubmit={(e) => handleSubmitt(e, row._id)}
                            encType="multipart/form-data"
                          >
                            <div>
                              <IoMdCloseCircleOutline
                                onClick={togglePopupEditnewone}
                                className="video-edit-close"
                              />

                              <div className="video-edit-input">
                                <label>Title of the Podcast</label>
                                <div className="video-edit-input-div">
                                  <input
                                    type="text"
                                    name="title"
                                    value={formDatass.title}
                                    onChange={handleTextChange}
                                  />
                                  {updateError.title && (
                                    <span>{updateError.title}</span>
                                  )}
                                </div>
                              </div>
                              <div className="video-edit-input">
                                <label>Page</label>
                                <div className="video-edit-input-div">
                                  <input
                                    type="text"
                                    name="page"
                                    value={formDatass.page}
                                    onChange={handleTextChange}
                                  />
                                  {updateError.page && (
                                    <span>{updateError.page}</span>
                                  )}
                                </div>
                              </div>
                              {/* <div>
                            <label>Category</label>
                            <input
                              type="text"
                              name="category"
                              value={formDatass.category}
                              onChange={handleTextChange}
                            />
                            {errors.category && <span>{errors.category}</span>}
                          </div> */}
                              <div className="video-edit-input">
                                <label>Thumbnail</label>
                                <div className="video-edit-input-div">
                                  <input
                                    type="file"
                                    name="thumbnail"
                                    id="thumbnail"
                                    accept="image/*"
                                    onChange={handleThumbnailChanged}
                                  />
                                  {updateError.thumbnail && (
                                    <span>{updateError.thumbnail}</span>
                                  )}
                                </div>
                              </div>
                              <div className="video-edit-input">
                                <label>Podcast Video</label>
                                <div className="video-edit-input-div">
                                  <input
                                    type="file"
                                    name="source"
                                    id="source"
                                    accept="video/*"
                                    onChange={handlePodcastVideoChange}
                                  />
                                  {updateError.source && (
                                    <span>{updateError.source}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button type="submit">Submit</button>
                          </form>
                        </div>
                      )}
                    </td>
                    {newPopupEdit && (
                      <div className="video-popup">
                        <div className="video-popup-content">
                          <h2>Update Video</h2>
                          <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                          >
                            <div className="video-top-inputs">
                              <div>
                                <label>Title of the Video</label>
                                <input
                                  type="text"
                                  value={fieldData.title}
                                  onChange={(e) =>
                                    setFieldData({
                                      ...fieldData,
                                      title: e.target.value,
                                    })
                                  }
                                  placeholder="Enter the title"
                                />
                              </div>
                              <div className="select-page-videos">
                                <label>Select Page : </label>
                                <select
                                  name="page"
                                  id="page"
                                  value={fieldData.page}
                                  onChange={(e) =>
                                    setFieldData({
                                      ...fieldData,
                                      page: e.target.value,
                                    })
                                  }
                                >
                                  <option value="">Select the Page</option>
                                  <option value="home">Home Page</option>
                                  <option value="senses">
                                    Senses Resurrection
                                  </option>
                                  <option value="oneone">
                                    One-On-One Session
                                  </option>
                                  <option value="learning and focus">
                                    Learning and focus
                                  </option>
                                  <option value="early age and gadget exposure">
                                    Early age and gadget exposure
                                  </option>
                                  <option value="post covid">Post covid</option>
                                  <option value="adaptation to mobile">
                                    Adaptation to Mobile
                                  </option>
                                  <option value="mobile addiction">
                                    Mobile Addiction
                                  </option>
                                  <option value="gaming addiction">
                                    Gaming Addiction
                                  </option>
                                  <option value="entertainment and performance addiction">
                                    Entertainment and Performance Addiction
                                  </option>
                                  <option value="about us">About us</option>
                                  <option value="hiring">
                                    Hiring
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="video-thumbnil-inputs">
                              <label>Thumbnail</label>
                              <input
                                type="file"
                                name="thumbnail"
                                id="thumbnail"
                                onChange={handleSelectThumb}
                              />
                            </div>
                            <label>Upload Video</label>
                            <div className="video-admin-inputs">
                              <h2>Drag and Drop Files here</h2>
                              <input
                                type="file"
                                id="videoFile"
                                name="videoFile"
                                onChange={handleSelectSource}
                                style={{ display: "none" }}
                              />
                              <label
                                htmlFor="videoFile"
                                className="custom-file-input"
                                data-file-name=""
                              >
                                Upload a file
                              </label>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoaddadmin;