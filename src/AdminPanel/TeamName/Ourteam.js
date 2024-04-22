import React, { useState } from 'react'
import './Ourteam.css'
import { CgCloseO } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
const Ourteam = () => {
    
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
        name: "Thameem",
        position: "front-end developer",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        column1: "02",
        name: "Ansari",
        position: "back-end developer",
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

    const currentDate = new Date().toISOString().slice(0, 10);
 const [filteredRows, setFilteredRows] = useState(rows);
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchInputChange = (event) => {
   const searchTerm = event.target.value.toLowerCase();
   setSearchTerm(searchTerm);
   const filteredRows = rows.filter((row) =>
     row.name.toLowerCase().includes(searchTerm)
   );
   setFilteredRows(filteredRows);
 };

 const handleDateFilterChange = (event) => {
   // Implement date filter logic here
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
              onChange={handleSearchInputChange}
            />
          </div>
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
              {filteredRows.length === 0 ? (
                <p>{searchTerm} data found</p>
              ) : (
                <tbody>
                  <tr style={{ backgroundColor: "red" }}>
                    <th>Sr. no |</th>
                    <th>Image</th>
                    <th>Name|</th>
                    <th>Position |</th>
                    <th>Actions |</th>
                    <th>Admin |</th>
                  </tr>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <p>{row.column1}</p>
                      </td>
                      <td>
                        <img
                          src={row.image}
                          alt="Thumbnail"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>
                        <p>{row.name}</p>
                      </td>
                      <td>
                        <p>{row.position}</p>
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
                            <button onClick={() => handleDeleteClick(row.id)}>
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
    </div>
  );
}

export default Ourteam