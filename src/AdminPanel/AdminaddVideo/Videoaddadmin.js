import React, { useEffect, useState } from 'react';
import "./Videoaddadmin.css";
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import axios from "../../Utils/Baseurl";
import { toast } from "react-toastify";

const Videoaddadmin = () => {
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get('admin/get_allVideos')
        console.log(response);
        if(response){
          setRows(response.data.reslt)
        }else{
          toast.error("something went wrong!!")
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupEdit,setShowPopupEdit] = useState(false);
  const [newPopupEdit,setNewPopupEdit] = useState(false);
  const [fieldData, setFieldData] = useState({
    title: "",
    page: ""
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [source, setSource] = useState(null);
  const [editedData, setEditedData] = useState({});



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

 const togglePopupedit =()=>{
    setShowPopupEdit(!showPopupEdit)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(thumbnail,"pppppppppppppppppp");
    const formData = new FormData();

    formData.append("title", fieldData.title);
    formData.append("page", fieldData.page);
    formData.append("thumbnail", thumbnail);
    formData.append("source", source);
    console.log(formData);
try {
  const response = await axios.post("admin/add_videos", formData);
    console.log(response, "kktt");
    if(response){
      console.log(response.data.message);
      if(response.data.message === "successfully added Video!!"){

        toast.success("successfully added Video!!")
        setFieldData({title:"",page:""})
        setThumbnail(null)
        setSource(null)
      }else{
        toast.error(response.data.message)
      }
    }else{
      toast.success("Something went wrong!!")
    }
} catch (error) {
  console.log(error);
}
    
  };

  const handleDeleteClick = async(id) => {

    try {
      const response = await axios.delete(`admin/delete_one_video/${id}`)
      console.log(response);
      if(response){
        if(response.data.message==="successfully deleted!!"){
          toast.success("deleted!!")
          setRows(rows.filter(row => row._id !== id));

        }
      }
    } catch (error) {
      toast.error("Please try again later!!")
    }
  };

  

  const handleEditClick = async(id) => {

    togglePopupNew()
    // const response = await axios.post(admin/view_and_editVideo/${id})
    //   console.log(response);
    //   if(response){
    //     if(response.data.message==="successfully updated!!"){
    //       toast.success("deleted!!")
    //       setRows(rows.filter(row => row._id !== id));

    //     }
    //   }
    // } catch (error) {
    //   toast.error("Please try again later!!")
    // }
  };

  const handleSaveEdit = () => {
    const updatedRows = rows.map((row) => {
      if (row.id === editedData.id) {
        return editedData;
      }
      return row;
    });
    setRows(updatedRows);
    setEditedData({});
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
    setEditedData({});
  };

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
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="video-top-inputs">
                  <div>
                    <label>Title of the Video</label>
                    <input type="text" value={fieldData.title} onChange={(e) => setFieldData({ ...fieldData, title: e.target.value })} placeholder="Enter the title" />
                  </div>
                  <div className="select-page-videos">
                    <label>Select Page : </label>
                    <select name="page" id="page" value={fieldData.page} onChange={(e) => setFieldData({ ...fieldData, page: e.target.value })}>
                      <option value="">Select the Page</option>
                      <option value="home">Home Page</option>
                      <option value="senses">Senses Resurrection</option>
                      <option value="oneone">One-On-One Session</option>
                    </select>
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input type="file" name="thumbnail" id="thumbnail" onChange={handleSelectThumb} />
                </div>
                <label>Upload Video</label>
                <div className="video-admin-inputs">
                  <h2>Drag and Drop Files here</h2>
                  <input type="file" id="videoFile" name="videoFile" onChange={handleSelectSource} style={{ display: "none" }} />
                  <label htmlFor="videoFile" className="custom-file-input" data-file-name="">Upload a file</label>
                </div>
                <div className="video-submit-btns">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={togglePopup}>Cancel</button>
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
                {rows.map((row,index) => (
                  <tr key={row._id}>
                    <td>{index+1}</td>
                    <td>
                      <img src={row.thumbnail} alt="Thumbnail" style={{ width: "50px", height: "50px" }} />
                    </td>
                    <td>{row.title}</td>
                    <td>{row.page}</td>
                    <td>
  
                        <div className="action-buttons">
                          <button onClick={() => handleDeleteClick(row._id)}>Delete <CgCloseO className="video-delete-new" /></button>
                          <button onClick={() => handleEditClick(row._id)}>Edit <AiOutlineEdit className="video-edit" /></button>
                        </div>
                     
                    </td>
                    {newPopupEdit && (
          <div className="video-popup">
            <div className="video-popup-content">
              <h2>Update Video</h2>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="video-top-inputs">
                  <div>
                    <label>Title of the Video</label>
                    <input type="text" value={fieldData.title} onChange={(e) => setFieldData({ ...fieldData, title: e.target.value })} placeholder="Enter the title" />
                  </div>
                  <div className="select-page-videos">
                    <label>Select Page : </label>
                    <select name="page" id="page" value={fieldData.page} onChange={(e) => setFieldData({ ...fieldData, page: e.target.value })}>
                      <option value="">Select the Page</option>
                      <option value="home">Home Page</option>
                      <option value="senses">Senses Resurrection</option>
                      <option value="oneone">One-On-One Session</option>
                    </select>
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input type="file" name="thumbnail" id="thumbnail" onChange={handleSelectThumb} />
                </div>
                <label>Upload Video</label>
                <div className="video-admin-inputs">
                  <h2>Drag and Drop Files here</h2>
                  <input type="file" id="videoFile" name="videoFile" onChange={handleSelectSource} style={{ display: "none" }} />
                  <label htmlFor="videoFile" className="custom-file-input" data-file-name="">Upload a file</label>
                </div>
                <div className="video-submit-btns">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={togglePopup}>Cancel</button>
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