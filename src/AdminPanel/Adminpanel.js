import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import "../AdminPanel/Adminpanel.css";
import ALlogo from "../Images/ALlogo.png";
import AlCloud from "../Images/AlCloud.png";
import { FiPieChart } from "react-icons/fi";
import { MdOutlineVideoSettings } from "react-icons/md";
import { TbSettingsCog } from "react-icons/tb";
import { TbSettingsDollar } from "react-icons/tb";
import { MdOutlineVideoCall } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { LiaToolboxSolid } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import GreenBulb from "../SmallElements/GreenBulb.png";
import THands from "../Images/THands.png";
import PinkHand from "../SmallElements/PinkHand.png";
import Brine from "../SmallElements/Brine.png";
import { Chart as Chartjs } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CgCloseO } from "react-icons/cg";
import Videoup from "../Images/Videoup.png";
import Thumb from "../Images/Thumb.png";
import mahesh from "../Images/mahesh.jpeg";
import PodcastAdmin from "../AdminPanel/Podcast/PodcastAdmin"
// import HiringAdmin from "../AdminPanel/Hiring/HiringAdmin"
const Adminpanel = () => {
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


  return (
    <div className="adminpanel-main-container">
      <div className="Side-Bar">
        <nav className="admin-top-navbar">
          <div className="admin-top-navbar-img">
            <Link to="/">
              <img src={ALlogo} alt="" />
            </Link>
            <img src={AlCloud} alt="" />
          </div>
          <ul className="admin-ul-list">
            <Link className="Links-for-admin" to="/Adminpanel/Daseboard">
              <li>
                <FiPieChart />
                DaseBorad
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Videoaddadmin">
              <li>
                {" "}
                <MdOutlineVideoSettings />
                Videos
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Package">
              <li>
                {" "}
                <TbSettingsCog />
                Speak Easy - Packages
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Revenue">
              <li>
                <TbSettingsDollar />
                Speak Easy - Revenue{" "}
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Complimetarycall">
              <li>
                <MdOutlineVideoCall />
                Speak Easy - Complimetary call
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Psychologist">
              <li>
                <GiTeacher />
                Psycologists
              </li>
            </Link>
            <hr></hr>
            <Link className="Links-for-admin" to="/Adminpanel/HiringAdmin">
              <li>
                <LiaToolboxSolid />
                Hiring
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/PodcastAdmin">
              <li>
                <IoVideocamOutline />
                Podcast
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Community">
              <li>
                <HiOutlineUserGroup />
                Community
              </li>
            </Link>
            <hr></hr>
            <li className="Links-for-admin">
              <IoIosLogOut />
              Logout
            </li>
          </ul>
        </nav>
      </div>
      <div className="adminpanel-route-main">
        <div className="admin-navbar">
          <div class="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input class="input" type="search" placeholder="Search" />
          </div>

          <p>Admin Name : Thameem</p>
        </div>
        <div className="adminpanel-route">
          <Routes>
            {/* Daseboard */}
            <Route
              path="/Daseboard"
              element={
                <div>
                  <div className="dase-main-container">
                    <h2>Dashboard</h2>
                    <div className="dase-borad-top-box-container">
                      <div className="dase-borad-top-box">
                        <p>Total Active Listeners</p>
                        <div className="dase-borad-inside-box">
                          <h1>40,689</h1>
                          <img src={Brine} alt="" />
                        </div>
                        <p>
                          <GrLineChart />
                          8.5% Up from yesterday
                        </p>
                      </div>
                      <div className="dase-borad-top-box">
                        <div className="dase-borad-top-box">
                          <p>Total Psychologist</p>
                          <div className="dase-borad-inside-box">
                            <h1>50</h1>
                            <img src={THands} alt="" />
                          </div>
                          <p>
                            <GrLineChart />
                            8.5% Up from yesterday
                          </p>
                        </div>
                      </div>
                      <div className="dase-borad-top-box">
                        <div className="dase-borad-top-box">
                          <p>Total School Graduates</p>
                          <div className="dase-borad-inside-box">
                            <h1>50</h1>
                            <img src={GreenBulb} alt="" />
                          </div>
                          <p>
                            <GrLineChart />
                            4.5% Up from yesterday
                          </p>
                        </div>
                      </div>
                      <div className="dase-borad-top-box">
                        <div className="dase-borad-top-box">
                          <p>Total NGO’s Registered</p>
                          <div className="dase-borad-inside-box">
                            <h1>100</h1>
                            <img src={PinkHand} alt="" />
                          </div>
                          <p>
                            <GrLineChart />
                            4.5% Up from yesterday
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* chart */}

                    <div className="dase-borad-chart-container">
                      <div className="dase-borad-chart-a"></div>
                      <div className="dase-borad-chart-b"></div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* video add */}

            <Route
              path="/Videoaddadmin"
              element={
                <div>
                  <div className="video-add-main-container">
                    <div className="video-add-top-btn">
                      <h1>Upload Video</h1>
                      <button onClick={togglePopup}>Upload a New Video</button>
                    </div>
                    {showPopup && (
                      <div className="video-popup">
                        <div className="video-popup-content">
                          <span className="close" onClick={togglePopup}>
                            <CgCloseO />
                          </span>
                          <h2>Upload Video</h2>
                          <form onSubmit={handleSubmit}>
                            <div className="video-top-inputs">
                              <div>
                                <label>Title of the Video</label>
                                <input
                                  type="text"
                                  placeholder="Enter the title"
                                />
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
                              <img src={Videoup} alt="" />
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
                          </form>
                        </div>
                      </div>
                    )}
                    <div class="box-wrap">
                      <div class="table-wrap">
                        <table>
                          <thead>
                            <tr>
                              <th>sr no.</th>
                              <th>Thumbnail</th>
                              <th>Video Title</th>
                              <th>Page</th>
                              <th>Actions</th>
                              {/* <button>Actions</button> */}
                            </tr>
                          </thead>
                          <tbody className="table-body">
                            <tr>
                              <td>01</td>
                              <td>Active Listeners</td>
                              <td>Mobile Addiction</td>
                              <td>Mobile Addiction</td>
                              <div className="func-btns">
                                <button>Edit</button>
                                <button>Delete</button>
                              </div>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/Package" element={<h1>Package</h1>} />
            <Route path="/Revenue" element={<h1>Revenue</h1>} />
            <Route path="/Complimetarycall" element={<h1>Complimetary</h1>} />
            <Route
              path="/Psychologist"
              element={
                <div>
                  <div className="headeing-admin-psygologiy">
                    <h1>Psychologist</h1>
                    <button>Add Psychologist</button>
                  </div>
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
              }
            />
            {/* <Route path="/HiringAdmin" element={<HiringAdmin/>} /> */}
            <Route path="/PodcastAdmin" element={<PodcastAdmin />} />
            <Route path="/Community" element={<h1>Community</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
