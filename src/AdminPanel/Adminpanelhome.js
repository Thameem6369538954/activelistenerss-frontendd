import React, { useEffect, useState } from "react";
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
import Psychologist from "./psychologist/Psychologist.js";
import PodcastAdmin from "./Podcast/PodcastAdmin.js";
import Videoaddadmin from "./AdminaddVideo/Videoaddadmin.js";
import Revenue from "./SE Revenue/Revenue.js";
import Getintouchdata from "./Getintouch/Getintouchdata.js";
import Complimetarycall from "./ComplimetaryCall/Complimetarycall.js";
import Package from "./Packageforadmin/Package.js";
import { AiOutlineDatabase } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import Ngo from "./NGO/Ngo.js";
import Collegegraduate from "./CollegeGraduate/Collegegraduate.js";
import Hiringdata from "./HiringAdmin/Hiringdata.js";
import Ourteam from "./TeamName/Ourteam.js";
import Userdatas from "./Userlist/Userdatas.js";
import DaseBoard from "../Components/DaseBoard/Daseboard.js";
import { BsClipboard2Data } from "react-icons/bs";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
// import Daseboard from "../DaseBoard/Daseboard.js";
const Adminpanelhome = () => {
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
            <Link className="Links-for-admin" to="/Adminpanelhome/DaseBoard">
              <li>
                <FiPieChart />
                Dashboard
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Userdatas">
              <li>
                <BsClipboard2Data />
                User Data
              </li>
            </Link>
            <Link
              className="Links-for-admin"
              to="/Adminpanelhome/Videoaddadmin"
            >
              <li>
                {" "}
                <MdOutlineVideoSettings />
                Videos
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Package">
              <li>
                {" "}
                <TbSettingsCog />
                Speak Easy - Packages
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Revenue">
              <li>
                <TbSettingsDollar />
                Speak Easy - Revenue{" "}
              </li>
            </Link>
            <Link
              className="Links-for-admin"
              to="/Adminpanelhome/Complimetarycall"
            >
              <li>
                <MdOutlineVideoCall />
                Speak Easy - Complimetary call
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Psychologist">
              <li>
                <GiTeacher />
                Psycologists
              </li>
            </Link>
            <hr></hr>
            <Link className="Links-for-admin" to="/Adminpanelhome/Hiringdata">
              <li>
                <LiaToolboxSolid />
                Hiring
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/PodcastAdmin">
              <li>
                <IoVideocamOutline />
                Podcast
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Ourteam">
              <li>
                <HiOutlineUserGroup />
                Ourteam
              </li>
            </Link>
            {/* <Link className="Links-for-admin" to="/Adminpanelhome/Community">
              <li>
                <HiOutlineUserGroup />
                Community
              </li>
            </Link> */}
            <Link
              className="Links-for-admin"
              to="/Adminpanelhome/Getintouchdata"
            >
              <li>
                <AiOutlineDatabase />
                Getin touch
              </li>
            </Link>
            <Link className="Links-for-admin" to="/Adminpanelhome/Ngo">
              <li>
                <CgNotes />
                NGO
              </li>
            </Link>
            <Link
              className="Links-for-admin"
              to="/Adminpanelhome/Collegegraduate"
            >
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

          <p>Admin</p>
        </div>
        <div className="adminpanel-route">
          <Routes>
            {/* Daseboard */}
            <Route path="/Daseboard" element={<DaseBoard />} />

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
      

        {/* <DaseBoard /> */}
      </div>
    </div>
  );
};

export default Adminpanelhome;
