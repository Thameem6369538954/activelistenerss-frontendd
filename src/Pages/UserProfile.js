import React, { useState } from "react";
import "../Css/UserProfile.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
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
import Sirpro from "../Images/Sirpro.png";
import { RiEdit2Line } from "react-icons/ri";

const UserProfile = () => {
  const [username, setUsername] = useState("Ram Kumar");
  const [email, setEmail] = useState("example@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  const [tempUsername, setTempUsername] = useState(username);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);

  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
    setTempUsername(username);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
    setTempEmail(email);
  };

  const handleEditPhoneNumberClick = () => {
    setIsEditingPhoneNumber(true);
    setTempPhoneNumber(phoneNumber);
  };

  const handleCancelUsernameClick = () => {
    setIsEditingUsername(false);
  };

  const handleCancelEmailClick = () => {
    setIsEditingEmail(false);
  };

  const handleCancelPhoneNumberClick = () => {
    setIsEditingPhoneNumber(false);
  };

  const handleSaveUsernameClick = () => {
    setUsername(tempUsername);
    setIsEditingUsername(false);
  };

  const handleSaveEmailClick = () => {
    setEmail(tempEmail);
    setIsEditingEmail(false);
  };

  const handleSavePhoneNumberClick = () => {
    setPhoneNumber(tempPhoneNumber);
    setIsEditingPhoneNumber(false);
  };

  const handleUsernameChange = (event) => {
    setTempUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setTempEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setTempPhoneNumber(event.target.value);
  };
  const handlesubmit = () => {
    toast.success("profile updated successfully!!");
  };
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <Navbar />
      <div className="useprof-main-con">
        <img src={EllipseRed} alt="" />
        <div className="userprofile-sidebar">
          <ul className="userprofile-sidebar-ul">
            <Link to="/UserProfile/Profile" className="active">
              <li>Profile</li>
            </Link>
            <Link to="/UserProfile/Account" className="active">
              {" "}
              <li>Account</li>
            </Link>
            <Link to="/UserProfile/profilesubscribe" className="active">
              <li>Subscribe</li>
            </Link>
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
                              <h3>Username </h3>
                              {isEditingUsername ? (
                                <>
                                  <input
                                    type="text"
                                    value={tempUsername}
                                    onChange={handleUsernameChange}
                                  />
                                  <button
                                    onClick={handleSaveUsernameClick}
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
                                    onClick={handleCancelUsernameClick}
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
                                  <p>{username}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    onClick={handleEditUsernameClick}
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
                                {isEditingEmail ? (
                                  <>
                                    <input
                                      type="text"
                                      value={tempEmail}
                                      onChange={handleEmailChange}
                                    />
                                    <button
                                      onClick={handleSaveEmailClick}
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
                                      onClick={handleCancelEmailClick}
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
                                    <p>{email}</p>
                                    <button
                                      style={{
                                        color: "Blue",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "20px",
                                      }}
                                      onClick={handleEditEmailClick}
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
                              {isEditingPhoneNumber ? (
                                <>
                                  <input
                                    type="text"
                                    value={tempPhoneNumber}
                                    onChange={handlePhoneNumberChange}
                                  />
                                  <button
                                    onClick={handleSavePhoneNumberClick}
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
                                    onClick={handleCancelPhoneNumberClick}
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
                                  <p>{phoneNumber}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    onClick={handleEditPhoneNumberClick}
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
                          <img src={Sirpro} alt="" />
                          <p>Mahesh Kashinath</p>
                          <span>mahesh@activelisteners.in</span>
                        </div>
                      </div>

                      <div className="save-cancel">
                        <button onClick={handlesubmit}>Update</button>
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
                      </div>
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
                              {isEditingUsername ? (
                                <>
                                  <input
                                    type="text"
                                    value={tempUsername}
                                    onChange={handleUsernameChange}
                                  />
                                  <button
                                    onClick={handleSaveUsernameClick}
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
                                    onClick={handleCancelUsernameClick}
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
                                  <p>{username}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    onClick={handleEditUsernameClick}
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
                                {isEditingEmail ? (
                                  <>
                                    <input
                                      type="text"
                                      value={tempEmail}
                                      onChange={handleEmailChange}
                                    />
                                    <button
                                      onClick={handleSaveEmailClick}
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
                                      onClick={handleCancelEmailClick}
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
                                    <p>{email}</p>
                                    <button
                                      style={{
                                        color: "Blue",
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontSize: "20px",
                                      }}
                                      onClick={handleEditEmailClick}
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
                              {isEditingPhoneNumber ? (
                                <>
                                  <input
                                    type="text"
                                    value={tempPhoneNumber}
                                    onChange={handlePhoneNumberChange}
                                  />
                                  <button
                                    onClick={handleSavePhoneNumberClick}
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
                                    onClick={handleCancelPhoneNumberClick}
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
                                  <p>{phoneNumber}</p>
                                  <button
                                    style={{
                                      color: "Blue",
                                      border: "none",
                                      backgroundColor: "transparent",
                                      fontSize: "20px",
                                    }}
                                    onClick={handleEditPhoneNumberClick}
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
                          <img src={Sirpro} alt="" />
                          <p>Mahesh Kashinath</p>
                          <span>mahesh@activelisteners.in</span>
                        </div>
                      </div>

                      <div className="save-cancel">
                        <button onClick={handlesubmit}>Update</button>
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
                      </div>
                    </div>
                  </div>
                  {/* <div className="log-out">
                    <button>Logout</button>
                  </div> */}
                </div>
              }
            />
            <Route
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
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
