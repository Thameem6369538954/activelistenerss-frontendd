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
import defaultProfile from "../Images/prof.jpg";
import { RiEdit2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
import axios from "../Utils/Baseurl.js";
import { logout,loginSuccess,setUser } from '../Redux/Slices/authSlice.js';
import { useDispatch } from 'react-redux';
import profileFemale from "../Images/profileFemale.jpg";
import profileMale from "../Images/profileMale.jpg";
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
// import axios from "../Utils/Baseurl.js";
const UserProfile = () => {
  const dispatch = useDispatch();
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

   const [showPopup, setShowPopup] = useState(false);

   const togglePopup = () => {
     setShowPopup(!showPopup);
   }



                          // update


                           const [userDataedit, setUserDataedit] = useState({});
                            useEffect(() => {
                              if (user && user._id) {
                                setUserDataedit({
                                  username: userData.name,
                                  email: userData.email,
                                  phone: userData.mobile,
                                });
                              }
                            }, [user, userData]);
                           const [profileImage, setProfileImage] =
                             useState(null);

                          const handleUserDataChange = (event) => {
                            const { name, value } = event.target;
                            setUserDataedit((prevUserData) => ({
                              ...prevUserData,
                              [name]: value,
                            }));
                          };

                           const handleProfileImageChange = async(event) => {
                             setProfileImage(event.target.files[0]);
                           };

                          //  const handleSubmit =async (event) => {

                          //    event.preventDefault();

                          //    // Client-side validation
                          //    const { username, email, phone } = userDataedit;
                          //    if (
                          //      !username ||
                          //      !email ||
                          //      !phone ||
                          //      !profileImage
                          //    ) {
                          //      alert(
                          //        "Please fill out all fields and upload required files."
                          //      );
                          //      return;
                          //    }

                          //    // Create FormData object and append files
                          //    const formData = new FormData();
                          //    formData.append("name", username);
                          //    formData.append("email", email);
                          //    formData.append("mobile", phone);
                          //   //  formData.append("profile-image", profileImage);
                          //    console.log(formData,user._id,"faaaduuuuuuuuuuu");


                          //    const responsee = await axios.put(`/edit_my_profile/${user._id}`, formData);
                          //    console.log(responsee,"editing profileeeeeeeeeeeeeeeeeeeeeeeee");
                          //    // Submit FormData to API endpoint
                           
                          //  };
const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    const { username, email, phone } = userDataedit;
    if (!username || !email || !phone) {
      toast.error("Please fill out all fields!!");
      return;
    }

    const token = localStorage.getItem("accessToken");
    console.log(user._id, token, "faaaduuuuuuuuuuu");
    if (!token) {
      setNoToken(true);
    }

    if (noToken) {
      navigate("/");
    }

    try {
      const responsee = await axios.put(
        `/edit_my_profile/${user._id}`,
        userDataedit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(responsee, "editing profileeeeeeeeeeeeeeeeeeeeeeeee");
      if (responsee.status === 200) {
        // toast.success("profile updated Successfully.")
        // setShowPopup(false)
        // setUserDataedit({})
        // window.location.reload(); // Refresh the page
        if (responsee.data.message == "No changes made to the user profile") {
          toast.error(responsee.data.message);
        } else {
          toast.success(responsee.data.message);
          // toast.success("profile updated Successfully.")
          setShowPopup(false);
          setUserDataedit({});
          window.location.reload();
        }
      } else {
        toast.error("error");
      }
    } catch (error) {
      if (error.response.status == 409  ) {
        toast.error(error.response.data.message);
      }else{
        if(error.response.status == 403 || error.response.status == 401){
          toast.error(error.response.data.message);
          dispatch(logout())
          navigate('/')
        }
      }
      console.log(error, "iam the error");
    }

    // Submit FormData to API endpoint
  };

     const [editprof,setEdiprof] = useState(false);

     const toggleEdit = () => {
       setEdiprof(!editprof)
     }

       const [profilePic, setProfilePic] = useState(null);
       const [error, setError] = useState("");

       const handleFileChange = (event) => {
         const selectedFile = event.target.files[0];
         // Check if a file is selected
         if (selectedFile) {
           // Check if the selected file is an image
           if (selectedFile.type.startsWith("image/")) {
             setProfilePic(selectedFile);
             setError("");
           } else {
             setProfilePic(null);
             setError("Please select a valid image file.");
           }
         }
       };
   const removeProfilePic = () => {
     setProfilePic(null); // Reset profilePic state to null to remove the image
     // Reset the value of the file input element
     const fileInput = document.getElementById("profilePic");
     fileInput.value = "";
   };

   const handleSubmitu = async (event) => {
     event.preventDefault();
     if (!profilePic) {
       setError("Please choose a profile picture.");
       return;
     }
     console.log(profilePic,"picture........");
     const formData = new FormData()
     formData.append('profilePic', profilePic)
     const response = await axios.post(
       `/add_profile_photo/${user._id}`,
       formData
     );
     console.log(response, "this is the response of registration............");

     // Your form submission logic here
    //  console.log("Form submitted successfully!");
   };
   const [crop, setCrop] = useState({ x: 0, y: 0 });
   const [zoom, setZoom] = useState(1);
  //  const [profilePic, setProfilePic] = useState(null);
  return !noToken ? (
    <div>
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
                              {console.log(userData, "koiiiii")}
                              <div className="user-detailes-txt">
                                <h3> Name </h3>
                              </div>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    value={userData.name}
                                    // onChange={handleUsernameChange}
                                  />
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
                                <div className="user-detailes-txt">
                                  <h3>Email </h3>
                                </div>
                                {userData ? (
                                  <>
                                    <input
                                      type="text"
                                      value={userData.email}
                                      // onChange={handleEmailChange}
                                    />
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
                              <div className="user-detailes-txt">
                                <h3>Phone Number </h3>
                              </div>
                              {userData ? (
                                <>
                                  <input
                                    type="text"
                                    value={userData.mobile}
                                    // onChange={handlePhoneNumberChange}
                                  />
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
                          <div>
                            {editprof && (
                              <form
                                className="edit-user-profile"
                                onSubmit={handleSubmitu}
                              >
                                <VscClose onClick={toggleEdit} />
                                <div className="prof-input">
                                  <label for="profilePic" role="button">
                                    Upload New Image
                                  </label>
                                  <hr></hr>
                                  <input
                                    type="file"
                                    name="profilePic"
                                    id="profilePic"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    required
                                    style={{ display: "none" }}
                                  />
                                  <hr></hr>
                                  {error && (
                                    <div className="error">{error}</div>
                                  )}
                                  {profilePic && (
                                    <div>
                                      <img src={profilePic} alt="Profile" />
                                      <p
                                        role="button"
                                        onClick={removeProfilePic}
                                        style={{ cursor: "pointer" }}
                                      >
                                        Remove
                                      </p>
                                      {/* <button type="button">Remove</button> */}
                                    </div>
                                  )}
                                </div>
                                <div className="delete-prof">
                                  <label role="button">Delete your Profile</label>

                                  {/* <button type="button">Delete</button> */}
                                </div>
                                <div className="save-imsha">
                                  <button type="submit">Save</button>
                                </div>
                              </form>
                            )}
                          </div>
                          {userData.profilePic ? (
                            <img src={userData.profilePic} alt="" />
                          ) : (
                            <img
                              src={
                                userData.gender === "male"
                                  ? profileMale
                                  : userData.gender === "female"
                                  ? profileFemale
                                  : defaultProfile
                              }
                              alt=""
                              onClick={toggleEdit}
                            />
                          )}
                          <MdAddCircleOutline
                            onClick={toggleEdit}
                            className="add-prof"
                          />
                          <p>{userData.name}</p>
                          <span>{userData.email}</span>
                          {/* <div className="save-blacka">
                            <button>UPDATE</button>
                          </div> */}
                        </div>
                      </div>

                      <div className="save-cancel">
                        <button onClick={togglePopup}>Update</button>
                        <div className="update">
                          <p>
                            Update your password through the button below. You
                            will be redirected to a new page and must follow the
                            instructions.
                          </p>
                        </div>
                      </div>
                      {showPopup && (
                        <div className="save-black">
                          <IoIosCloseCircleOutline
                            onClick={togglePopup}
                            className="close-edit"
                          />

                          <form
                            className="profile-form-edit"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                          >
                            <div className="prof-input-edit">
                              <label htmlFor="new-username">
                                Enter New Username
                              </label>
                              <input
                                type="text"
                                id="new-username"
                                name="username"
                                value={userDataedit.username}
                                onChange={handleUserDataChange}
                                placeholder="Enter New Username"
                                required
                              />
                            </div>
                            <div className="prof-input-edit">
                              <label htmlFor="new-username">
                                Enter New Email
                              </label>
                              <input
                                type="email"
                                id="new-username"
                                name="email"
                                value={userDataedit.email}
                                onChange={handleUserDataChange}
                                placeholder="Enter New Username"
                                required
                              />
                            </div>

                            <div className="prof-input-edit">
                              <label htmlFor="new-phone">
                                Enter New Phone Number
                              </label>
                              <input
                                type="text"
                                id="new-phone"
                                name="phone"
                                value={userDataedit.phone}
                                onChange={handleUserDataChange}
                                placeholder="Enter New Phone Number"
                                required
                              />
                            </div>
                            {/* <div>
                              <label htmlFor="profile-image">
                                Upload Profile Image
                              </label>
                              <input
                                type="file"
                                id="profile-image"
                                accept="image/*"
                                onChange={handleProfileImageChange}
                                required
                              />
                            </div> */}
                            <div className="save-cancel">
                              <button type="submit">Save</button>
                            </div>
                          </form>
                        </div>
                      )}
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
                          <img src={defaultProfile} alt="" />
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
    </div>
  ) : null;
};

export default UserProfile;