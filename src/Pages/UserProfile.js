import React, { useState,useEffect } from "react";
import "../Css/UserProfile.css";
import { Link, NavLink, Route, Routes,useNavigate } from "react-router-dom";
import Settings from "../Pages/Settings";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaRegUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { CgAirplane } from "react-icons/cg";
import EllipseRed from "../Images/EllipseRed.png";
// import Sirpro from "../Images/Sirpro.png";
import profile from "../Images/prof.jpg"
import { RiEdit2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
import axios from "../Utils/Baseurl.js";
import { logout,loginSuccess,setUser } from '../Redux/Slices/authSlice.js';
// import { useDispatch } from 'react-redux';

const UserProfile = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate()
   var user = useSelector((state) => state.auth.user);
   console.log(user,"in the name of god......................................>>>>");
   const [userData,setUserData]=useState({}) 
   const [noToken,setNoToken] = useState(false)
   useEffect(() => {
    const fetchuserData = async () => {
      const token = localStorage.getItem("accessToken");
      if(!token){
        setNoToken(true)
      }
      if (user && user._id) {
        try {
          const response = await axios.get(`/my_profile/${user._id}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Add Bearer prefix to token
            },
          });
          console.log(response, "oooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"); // Moved console.log here
          if (response.data.Getuser) {
            setUserData(response.data.Getuser);
          } else {
            toast.error("User data not found");
          }
        } catch (error) {
          if (error.response) {
            const errorMessage = error.response.data.message;
            if (error.response.status === 403 || error.response.status === 401) {
              toast.error(errorMessage);
              navigate("/Login");
            } else {
              toast.error("An error occurred. Please try again later.");
            }
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        }
      }
    };
    fetchuserData();
  }, [user, navigate]);


   if(noToken){
    navigate('/Login')
   }

  return (
    !noToken ? (<div>
      <Navbar />
      
      <div className="useprof-main-con">
        <img src={EllipseRed} alt="" />
        <div className="userprofile-sidebar">
          <ul className="userprofile-sidebar-ul">
            <Link to="/UserProfile/Profile" className="active">
              <li>Profile</li>
            </Link>
            {/* <Link to="/UserProfile/Account" className="active">
              {" "}
              <li>Account</li>
            </Link>
            <Link to="/UserProfile/profilesubscribe" className="active">
              <li>Subscribe</li>
            </Link> */}
          </ul>
        </div>

        <div className="routers">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="userprofile-main-conatiner">
                    <div className="profile-image">
                      <div className="hdr-userprof">
                        <div>
                          <h1>Personal Information</h1>
                        </div>
                        <div>
                          <RiEdit2Line />
                        </div>
                      </div>
                      <div className="prof-user">
                        <div className="editable-details">
                          <div>
                            <div className="user-detailes">
                            {console.log(userData,"koiiiii")}
                              <h3> Name </h3>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    value={userData.name}
                                    // onChange={handleUsernameChange}
                                  />
                                  <button
                                    // onClick={handleSaveUsernameClick}
                                    style={{
                                      color: "green",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <FiSave />
                                  </button>
                                  <button
                                    // onClick={handleCancelUsernameClick}
                                    style={{
                                      color: "red",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <IoCloseCircleOutline />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <p>{userData.name}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    // onClick={handleEditUsernameClick}
                                  >
                                    <FiEdit />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>

                          <div>
                            <div className="prof-img">
                              <div className="user-detailes">
                                <h3>Email </h3>
                                {userData ? (
                                  <>
                                    <input
                                      type="text"
                                      value={userData.email}
                                      // onChange={handleEmailChange}
                                    />
                                    <button
                                      // onClick={handleSaveEmailClick}
                                      style={{
                                        color: "green",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "25px",
                                      }}
                                    >
                                      <FiSave />
                                    </button>
                                    <button
                                      // onClick={handleCancelEmailClick}
                                      style={{
                                        color: "red",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "25px",
                                      }}
                                    >
                                      <IoCloseCircleOutline />
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <p>{userData.email}</p>
                                    <button
                                      style={{
                                        color: "Blue",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "20px",
                                      }}
                                      // onClick={handleEditEmailClick}
                                    >
                                      <FiEdit />
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="user-detailes">
                              <h3>Phone Number </h3>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    value={userData.mobile}
                                    // onChange={handlePhoneNumberChange}
                                  />
                                  <button
                                    // onClick={handleSavePhoneNumberClick}
                                    style={{
                                      color: "green",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <FiSave />
                                  </button>
                                  <button
                                    // onClick={handleCancelPhoneNumberClick}
                                    style={{
                                      color: "red",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <IoCloseCircleOutline />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <p>{userData.mobile}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    // onClick={handleEditPhoneNumberClick}
                                  >
                                    <FiEdit />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="profile-box">
                          <div></div>
                          <img src={profile} alt="" />
                          <p>{userData.name}</p>
                          <span>{userData.email}</span>
                        </div>
                      </div>

                      {/* <div className="save-cancel">
                        <button >Update</button>
                        <div className="update">
                          <p>
                            Update your password through the button below. You
                            will be redirected to a new page and must follow the
                            instructions.
                          </p>
                        </div>
                      </div>
                      <div className="save-black">
                        <button>Save</button>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="log-out">
                    <button>Logout</button>
                  </div> */}
                </div>
              }
            />
            <Route
              path="/Profile"
              element={
                <div>
                  <div className="userprofile-main-conatiner">
                    <div className="profile-image">
                      <div className="hdr-userprof">
                        <div>
                          <h1>Personal Information</h1>
                        </div>
                        <div>
                          <RiEdit2Line />
                        </div>
                      </div>
                      <div className="prof-user">
                        <div className="editable-details">
                          <div>
                            <div className="user-detailes">
                              <h3>Username :</h3>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    value={userData.name}
                                    // onChange={handleUsernameChange}
                                  />
                                  <button
                                    // onClick={handleSaveUsernameClick}
                                    style={{
                                      color: "green",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <FiSave />
                                  </button>
                                  <button
                                    // onClick={handleCancelUsernameClick}
                                    style={{
                                      color: "red",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <IoCloseCircleOutline />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <p>{userData.name}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    // onClick={handleEditUsernameClick}
                                  >
                                    <FiEdit />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>

                          <div>
                            <div className="prof-img">
                              <div className="user-detailes">
                                <h3>Email :</h3>
                                {userData ? (
                                  <>
                                    <input
                                      type="text"
                                      // value={tempEmail}
                                      // onChange={handleEmailChange}
                                    />
                                    <button
                                      // onClick={handleSaveEmailClick}
                                      style={{
                                        color: "green",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "25px",
                                      }}
                                    >
                                      <FiSave />
                                    </button>
                                    <button
                                      // onClick={handleCancelEmailClick}
                                      style={{
                                        color: "red",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "25px",
                                      }}
                                    >
                                      <IoCloseCircleOutline />
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <p>{userData.email}</p>
                                    <button
                                      style={{
                                        color: "Blue",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "20px",
                                      }}
                                      // onClick={handleEditEmailClick}
                                    >
                                      <FiEdit />
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="user-detailes">
                              <h3>Phone Number :</h3>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    // value={tempPhoneNumber}
                                    // onChange={handlePhoneNumberChange}
                                  />
                                  <button
                                    // onClick={handleSavePhoneNumberClick}
                                    style={{
                                      color: "green",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <FiSave />
                                  </button>
                                  <button
                                    // onClick={handleCancelPhoneNumberClick}
                                    style={{
                                      color: "red",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <IoCloseCircleOutline />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <p>{userData.mobile}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    // onClick={handleEditPhoneNumberClick}
                                  >
                                    <FiEdit />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="profile-box">
                          <div></div>
                          <img src={profile} alt="" />
                          <p>{userData.name}</p>
                          <span>{userData.email}</span>
                        </div>
                      </div>

                      {/* <div className="save-cancel">
                        <button >Update</button>
                        <div className="update">
                          <p>
                            Update your password through the button below. You
                            will be redirected to a new page and must follow the
                            instructions.
                          </p>
                        </div>
                      </div>
                      <div className="save-black">
                        <button>Save</button>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="log-out">
                    <button>Logout</button>
                  </div> */}
                </div>
              }
            />
            {/* <Route
              path="/Account"
              element={
                <div>
                  <div className="account-for-userprof"></div>
                </div>
              }
            />
            <Route
              path="/profilesubscribe"
              element={
                <div>
                  <div className="prosubs-pro">
                    <div className="hrdt-subscribe-prof">
                      <h1>My Subscription</h1>
                    </div>
                    <p>Manage Your Membership Plan and History Infromation</p>
                    <div className="sub-display">
                      <div className="plan-display">
                        <h1>Premium</h1>
                        <p>
                          <span>₹1999/</span>month
                        </p>
                      </div>
                      <div className="expire-date">
                        <p>Subscription Expiry</p>
                        <p>12-April-2025</p>
                      </div>
                      <div className="Auto-Renewal">
                        <p>Auto Renewal</p>
                        <div className="checkbox-con">
                          <input id="checkbox" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>):null
  )
};

export default UserProfile;