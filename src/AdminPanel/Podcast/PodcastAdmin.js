import React,{useState,useEffect} from 'react'
import "./PodcastAdmin.css"
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import axios from "../../Utils/Baseurl.js";
import { toast } from "react-toastify";
import filter from "../../Images/filter.png";


const PodcastAdmin = () => {
  const [rows, setRows] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editData, setEditData] = useState(null); // State to track the item being edited
  const [showEditPopup, setShowEditPopup] = useState(false); // State to control edit popup visibility

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await axios.get("admin/view_all_podcast");
        console.log(data.data.reslt, "podcasts");
        setRows(data.data.reslt);
      } catch (err) {
        return { status: false, message: "not found product" };
      }
    };
    fetchProduct();
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [videoData, setVideoData] = useState({
    videoFile: null,
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVideoData({
      ...videoData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setVideoData({
      ...videoData,
      videoFile: event.target.files[0],
    });
  };

  const [editingRowId, setEditingRowId] = useState(null);
  const [editedData, setEditedData] = useState({});

  // const handleDeleteClick = (id) => {
  //   setRows(rows.filter((row) => row.id !== id));
  // };

 
  

  const handleSaveEdit = () => {
    const updatedRows = rows.map((row) => {
      if (row.id === editedData.id) {
        return editedData;
      }
      return row;
    });
    setRows(updatedRows);
    setEditingRowId(null);
  };

  const handleInputChanged = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setEditedData((prevData) => ({
        ...prevData,
        image: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleCancelEdit = () => {
    setEditingRowId(null); // Reset editingRowId to null to close the form
  };

  // pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [formDatas, setformDatas] = useState({
    title: "",
    discription: "",
    category: "",
  });

  const handleThumbnailChange = (e) => {
    e.preventDefault();
    const setThumb = e.target.files[0];
    if (setThumb) {
      setThumbnail(setThumb);
    } else {
      toast.error("Please select a thumbnail!!");
      e.target.value = null;
    }
  };

  const handleSourceChange = (e) => {
    e.preventDefault();
    const sourcefile = e.target.files[0];
    if (sourcefile) {
      setSource(sourcefile);
    } else {
      toast.error("Please select a source file!!");
      e.target.value = null;
    }
  };

  const [thumbnail, setThumbnail] = useState(null);
  const [source, setSource] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformDatas({
      ...formDatas,
      [name]: value,
    });
  };

  const [errorsMain, setErrorsmain] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrorss = {};

    if (!formDatas.title.trim()) {
      formErrorss.title = "Title is required";
    }

    if (!formDatas.discription.trim()) {
      formErrorss.discription = "Discription is required";
    }

    if (!formDatas.category.trim()) {
      formErrorss.category = "Category is required";
    }

    if (!thumbnail) {
      formErrorss.thumbnail = "Thumbnail is required";
    }

    if (!source) {
      
      formErrorss.source = "Source is required";
    }

    if (Object.keys(formErrorss).length > 0) {
      setErrorsmain(formErrorss);
      return;
    }


    try {
      const formData = new FormData();
      formData.append("title", formDatas.title);
      formData.append("discription", formDatas.discription);
      formData.append("category", formDatas.category);
      formData.append("thumbnail", thumbnail);
      formData.append("source", source);
      console.log(
        formData,
        "daatattata''''''''''''''''''''''''''''''''''''''''"
      );
      // const response = await axios.post("/podcast",formDatas);

      const response = await axios.post("admin/add_podcast", formData);
      console.log(response, "reeeeeeeeeeeeeeeesss");
      if(response.status === 200){
        toast.success("Podcast added successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }else{
        toast.error("Failed to add podcast");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoryOptions = ["6-12", "13-19", "20+"];

  const filteredRows = rows.filter((row) => {
    return (
      row.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      (dateInput ? row.createdDate === dateInput : true) &&
      (selectedCategory ? row.category === selectedCategory : true)
    );
  });

  const handleDeleteClick = async (id) => {
    try {
      // Make an API call to delete the podcast data by ID
      await axios.delete(`admin/delete_one_podcast/${id}`);
      // Update the state after successful deletion
      setRows(rows.filter((row) => row.id !== id));
      toast.success("Podcast deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error deleting podcast:", error);
      toast.error("Failed to delete podcast");
    }
  };


  // Edit part

  


  const [formDatass, setFormDatass] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [thumbnails, setThumbnails] = useState(null);
  const [podcastVideo, setPodcastVideo] = useState(null);
  const [errors, setErrors] = useState({});

  const togglePopupone = () => {
    setIsOpen(!isOpen);
  };

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



  const handleSubmitt = async (e) => {
    e.preventDefault();
    const formErorrs = {};
    if (!formDatass.title.trim()) {
      formErorrs.title = "Title is required";
    }
    if (!formDatass.description.trim()) {
      formErorrs.description = "Description is required";
    }
    if (!formDatass.category.trim()) {
      formErorrs.category = "Category is required";
    }
    if (!thumbnails) {
      formErorrs.thumbnail = "Thumbnail is required";
    }
    if (!podcastVideo) {
      formErorrs.source = "Video file is required";
    }
    if (Object.keys(formErorrs).length > 0) {
      setErrors(formErorrs);
      return;
    }
    try {
         
        const formData = new FormData();
        formData.append("title", formDatass.title);
        formData.append("description", formDatass.description);
        formData.append("category", formDatass.category);
        formData.append("thumbnails", thumbnails);
        formData.append("podcastVideo", podcastVideo);

        // Make your axios call here
        console.log(formData, "podcasttttttttttttttttttttttttt");
        const response = await axios.post("admin/add_podcast", formData);
        console.log(response, "Response from server");
      
    } catch (error) {
      console.log(error);
    }
  };

 

  const [isOpen, setIsOpen] = useState(false);

//  const handleEditClick = (row) => {
//    if (row && row.id) {
//      setEditingRowId(row.id);
//      setEditedData(row);
//    } else {
//      console.error("Row is undefined or does not contain id property");
//    }
//  };

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopupone}>
              &times;
            </button>
            <h2>Popup Form</h2>
            <form onSubmit={handleSubmitt}>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formDatass.title}
                  onChange={handleTextChange}
                />
                {errors.title && <span className="error">{errors.title}</span>}
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={formDatass.description}
                  onChange={handleTextChange}
                />
                {errors.description && (
                  <span className="error">{errors.description}</span>
                )}
              </div>
              <div className="form-group">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formDatass.category}
                  onChange={handleTextChange}
                />
                {errors.category && (
                  <span className="error">{errors.category}</span>
                )}
              </div>
              <div className="form-group">
                <label>Thumbnail:</label>
                <input type="file" onChange={handleThumbnailChanged} />
                {errors.thumbnail && (
                  <span className="error">{errors.thumbnail}</span>
                )}
              </div>
              <div className="form-group">
                <label>Podcast Video:</label>
                <input type="file" onChange={handlePodcastVideoChange} />
                {errors.video && <span className="error">{errors.video}</span>}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div className="PodcastAdmin-main-coantiner">
        <div className="video-add-main-container">
          <div className="video-add-top-btn">
            <h1>Upload Podcast</h1>
            <button onClick={togglePopup}>Upload a New Podcast</button>
          </div>
          <div className="fiter-box">
            <img src={filter} alt="" />
            <div className="fiter-box-text">
              <p>Filter By</p>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button>Search</button>
            </div>
            <div>
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />
            </div>
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
                        placeholder="Enter the title"
                        name="title"
                        value={formDatas.title}
                        onChange={handleChange}
                      />
                      {errorsMain && <p>{errorsMain.title}</p>}
                    </div>
                    <div>
                      <label>Description</label>
                      <input
                        type="text"
                        placeholder="Enter the description"
                        name="discription"
                        value={formDatas.discription}
                        onChange={handleChange}
                      />
                      {errorsMain && <p>{errorsMain.discription}</p>}
                    </div>
                    <div>
                      <label>Category</label>
                      <input
                        type="text"
                        placeholder="Enter the category"
                        name="category"
                        value={formDatas.category}
                        onChange={handleChange}
                      />
                      {errorsMain && <p>{errorsMain.category}</p>}
                    </div>
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>Thumbnail</label>
                    <input type="file" onChange={handleThumbnailChange} />
                    {errorsMain && <p>{errorsMain.thumbnail}</p>}
                  </div>
                  <label>Upload Podcast</label>
                  <div className="video-admin-inputs">
                    <h2>Drag and Drop Files here</h2>
                    <input
                      type="file"
                      id="videoFile"
                      name="videoFile"
                      onChange={handleSourceChange}

                      // style={{ display: "none" }}
                    />
                    {errorsMain && <p>{errorsMain.video}</p>}
                    <label
                      htmlFor="videoFile"
                      className="custom-file-input"
                      data-file-name=""
                    >
                      Upload a file
                    </label>
                    {errorsMain && <p>{errorsMain.video}</p>}
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

          <div class="box-wrap">
            {" "}
            <div className="table-container">
              <table>
                <tbody>
                  <tr style={{ backgroundColor: "red" }}>
                    <th>Sr. no |</th>
                    <th>Created Date</th>
                    <th>Video Title |</th>
                    <th>Description |</th>
                    <th>Category |</th>
                    <th>Actions |</th>
                  </tr>
                  {filteredRows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={row.thumbnail}
                          alt="Thumbnail"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{row.title}</td>

                      <td>{row.discription}</td>
                      <td>{row.category}</td>
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
                            <button onClick={togglePopupone}>
                              Edit <AiOutlineEdit className="video-edit" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
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
                      <label>Thumbnail</label>
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
        <div className="PodcastAdmin-table"></div>
      </div>
    </div>
  );
}

export default PodcastAdmin