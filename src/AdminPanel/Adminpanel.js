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
import Videoup from "../Images/Videoup.png";
import Thumb from "../Images/Thumb.png";
import Psychologist from "../AdminPanel/psychologist/Psychologist.js"
import PodcastAdmin from "../AdminPanel/Podcast/PodcastAdmin"
import Videoaddadmin  from "../AdminPanel/AdminaddVideo/Videoaddadmin"
import Revenue from "../AdminPanel/SE Revenue/Revenue.js"
import Getintouchdata from "./Getintouch/Getintouchdata.js"
import Complimetarycall from "./ComplimetaryCall/Complimetarycall.js";
import Package from "../AdminPanel/Packageforadmin/Package.js"  
import { AiOutlineDatabase } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import Ngo from "./NGO/Ngo.js";
import Collegegraduate from "./CollegeGraduate/Collegegraduate.js";
import Hiringdata from "./HiringAdmin/Hiringdata.js";
import Ourteam from "./TeamName/Ourteam.js";
import Userdatas from "../AdminPanel/Userlist/Userdatas.js"
// import { MyChart } from "../Components/MyChart.js";
// import { DoughnutChart } from "../Components/DoughnutChart.js";
const Adminpanel = () => {
 

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
          <ul
            className="admin-ul-list"
            // style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <Link className="Links-for-admin" to="/Adminpanel/Daseboard">
              <li>
                <FiPieChart />
                Dashboard
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Userdatas">
              <li>
                <FiPieChart />
                User Data
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
            <Link className="Links-for-admin" to="/Adminpanel/Hiringdata">
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
            <Link className="Links-for-admin" to="/Adminpanel/Ourteam">
              <li>
                <HiOutlineUserGroup />
                Ourteam
              </li>
            </Link>
            {/* <Link className="Links-for-admin" to="/Adminpanel/Community">
              <li>
                <HiOutlineUserGroup />
                Community
              </li>
            </Link> */}
            <Link className="Links-for-admin" to="/Adminpanel/Getintouchdata">
              <li>
                <AiOutlineDatabase />
                Getin touch
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Ngo">
              <li>
                <CgNotes />
                NGO
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanel/Collegegraduate">
              <li>
                <CgNotes />
                College Graduate
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
                      <div className="dase-borad-chart-a">
                        {/* <MyChart /> */}
                      </div>
                      <div className="dase-borad-chart-b">
                        {/* <DoughnutChart /> */}
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* video add */}

            <Route path="/Videoaddadmin" element={<Videoaddadmin />} />
            <Route path="/Package" element={<Package />} />
            <Route path="/Revenue" element={<Revenue />} />
            <Route path="/Ngo" element={<Ngo />} />
            <Route path="/Userdatas" element={<Userdatas />} />
            <Route path="/Hiringdata" element={<Hiringdata />} />
            <Route path="/PodcastAdmin" element={<PodcastAdmin />} />
            <Route path="/Collegegraduate" element={<Collegegraduate />} />
            <Route path="/Getintouchdata" element={<Getintouchdata />} />
            <Route path="/Complimetarycall" element={<Complimetarycall />} />
            <Route path="/Psychologist" element={<Psychologist />} />
            {/* <Route path="/HiringAdmin" element={<HiringAdmin/>} /> */}
            <Route path="/PodcastAdmin" element={<PodcastAdmin />} />
            <Route path="/Ourteam" element={<Ourteam />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
