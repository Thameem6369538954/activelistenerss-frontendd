import React,{useState,useEffect} from 'react'
import "./PodcastAdmin.css"
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import axios from "../../Utils/Baseurl.js";
import { toast } from "react-toastify";



const PodcastAdmin = () => {
  
    const fetchProduct = async () => {
      try {
      
        
        // setformDatas(response.data);

      } catch (err) {
        return { status: false, message: "not found product" };
      }
    };
    
 
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


  const [rows, setRows] = useState([
    {
      id: 1,
      column1: "01",
      column2: "Why Active Listeners?",
      column3: "Why Active Listeners?",
      column4: "Home Page",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    {
      id: 2,
      column1: "02",
      column2: "hello",
      column3: "Early Age Gadget Exposure",
      column4: "Early Age Gadget Exposure",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    {
      id: 3,
      column1: "01",
      column2: "Why Active Listeners?",
      column3: "Why Active Listeners?",
      column4: "Home Page",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    {
      id: 4,
      column1: "02",
      column2: "hello",
      column3: "Early Age Gadget Exposure",
      column4: "Early Age Gadget Exposure",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    {
      id: 5,
      column1: "01",
      column2: "Why Active Listeners?",
      column3: "Why Active Listeners?",
      column4: "Home Page",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    {
      id: 6,
      column1: "02",
      column2: "hello",
      column3: "Early Age Gadget Exposure",
      column4: "Early Age Gadget Exposure",
      image: "https://via.placeholder.com/150",
      discription: "Lorem ipsum dolor sit amet,",
      cate: "6-12",
    },
    // Add more rows as needed
  ]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleDeleteClick = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEditClick = (row) => {
    setEditingRowId(row.id);
    setEditedData(row);
  };

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

    const handleThumbnailChange = (e)=>{
      e.preventDefault()
      const setThumb = e.target.files[0]
      if(setThumb){
        setThumbnail(setThumb)
      }else{
        toast.error("Please select a thumbnail!!")
        e.target.value = null
      }
    }

    const handleSourceChange =(e)=>{
      e.preventDefault()
      const sourcefile = e.target.files[0]
      if(sourcefile){
        setSource(sourcefile)
      }else{
        toast.error("Please select a source file!!")
        e.target.value = null
      }
    }


    const [thumbnail,setThumbnail] = useState(null)
    const [source,setSource] = useState(null)

    const handleChange = (e) => {
      const { name, value } = e.target;
      setformDatas({
        ...formDatas,
        [name]: value,
      });
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
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
      } catch (error) {
        console.log(error);
      }
     
    };


  return (
    <div>
      <div className="PodcastAdmin-main-coantiner">
        <div className="video-add-main-container">
          <div className="video-add-top-btn">
            <h1>Upload Video</h1>
            <button onClick={togglePopup}>Upload a New Video</button>
          </div>
          {showPopup && (
            <div className="video-popup">
              <div className="video-popup-content">
                {/* <span className="close" onClick={togglePopup}>
                <CgCloseO />
              </span> */}
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
                        required // HTML5 validation: makes this field required
                      />
                    </div>
                    <div>
                      <label>Description</label>
                      <input
                        type="text"
                        placeholder="Enter the description"
                        name="discription"
                        value={formDatas.discription}
                        onChange={handleChange}
                        required // HTML5 validation
                      />
                    </div>
                    <div>
                      <label>Category</label>
                      <input
                        type="text"
                        placeholder="Enter the category"
                        name="category"
                        value={formDatas.category}
                        onChange={handleChange}
                        required // HTML5 validation
                      />
                    </div>
                  </div>
                  <div className="video-thumbnil-inputs">
                    <label>Thumbnail</label>
                    <input
                      type="file"
                      onChange={handleThumbnailChange}
                      required // HTML5 validation: makes this field required
                    />
                  </div>
                  <label>Upload Video</label>
                  <div className="video-admin-inputs">
                    <h2>Drag and Drop Files here</h2>
                    <input
                      type="file"
                      id="videoFile"
                      name="videoFile"
                      onChange={handleSourceChange}
                      required // HTML5 validation
                      // style={{ display: "none" }}
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

          <div class="box-wrap">
            {" "}
            <div className="table-container">
              <table>
                <tbody>
                  <tr style={{ backgroundColor: "red" }}>
                    <th>Sr. no |</th>
                    <th>Created Date</th>
                    <th>Video Title |</th>
                    <th>Page |</th>
                    <th>Description |</th>
                    <th>Category |</th>
                    <th>Actions |</th>
                  </tr>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.column1}</td>
                      <td>
                        <img
                          src={row.image}
                          alt="Thumbnail"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{row.column3}</td>
                      <td>{row.discription}</td>
                      <td>{row.column4}</td>
                      <td>{row.cate}</td>
                      <td>
                        {editingRowId === row.id ? (
                          <div className="action-buttons-save">
                            <button onClick={handleSaveEdit}>
                              Save <LiaSaveSolid className="video-save" />
                            </button>
                          </div>
                        ) : (
                          <div className="action-buttons">
                            <button onClick={() => handleDeleteClick(row.id)}>
                              Delete <CgCloseO className="video-delete-new" />
                            </button>
                            <button onClick={() => handleEditClick(row)}>
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