import React,{useState} from 'react'
import "./Videoaddadmin.css"
import GamingAddiction from "../../Images/GamingAddiction.png";
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";

const Videoaddadmin = () => {
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

   const handleSubmit = (event) => {
     event.preventDefault();
     // Here you can handle the form submission, for now, let's just log the data
     console.log(videoData);
     // You can then add logic to save this data to your database or display it in the table
   };
const [rows, setRows] = useState([
  {
    id: 1,
    column1: "01",
    column2: "Why Active Listeners?",
    column3: "Why Active Listeners?",
    column4: "Home Page",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    column1: "02",
    column2: "hello",
    column3: "Early Age Gadget Exposure",
    column4: "Early Age Gadget Exposure",
    image: "https://via.placeholder.com/150",
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
              {/* <span className="close" onClick={togglePopup}>
                <CgCloseO />
              </span> */}
              <h2>Upload Video</h2>
              <form onSubmit={handleSubmit}>
                <div className="video-top-inputs">
                  <div>
                    <label>Title of the Video</label>
                    <input type="text" placeholder="Enter the title" />
                  </div>
                  <div className="select-page-videos">
                    <label>Select Page : </label>
                    <select name="cars" id="cars">
                      <option value="volvo">Select the Page</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input type="file" />
                </div>
                <label>Upload Video</label>
                <div className="video-admin-inputs">
                  {/* <img src={Videoup} alt="" /> */}
                  <h2>Drag and Drop Files here</h2>
                  <input
                    type="file"
                    id="videoFile"
                    name="videoFile"
                    // onChange={handleFileChange}
                    style={{ display: "none" }} // Add this style inline
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
                  <button type="submit" onClick={togglePopup}>
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
                  <th>Thumbnail |</th>
                  <th>Video Title |</th>
                  <th>Page |</th>
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
                    <td>{row.column4}</td>
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
                  {/* <div>
                    <label>No :</label>
                    <input
                      type="text"
                      name="column1"
                      value={editedData.column1}
                      onChange={handleInputChanged}
                    />
                  </div> */}
                  {/* <div>
                <label>Page</label>
                <input
                  type="text"
                  name="column2"
                  value={editedData.column2}
                  onChange={handleInputChanged}
                />
                </div> */}
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

export default Videoaddadmin