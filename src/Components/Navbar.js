
import React, { useState,useEffect } from "react";
import "../Css/Navbar.css";
import ALlogo from "../Images/ALlogo.png";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink,useNavigate,Link } from "react-router-dom";
import AlCloud from "../Images/AlCloud.png";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout,loginSuccess,setUser } from '../Redux/Slices/authSlice';
import { ToastContainer, toast } from "react-toastify";
import profileFemale from "../Images/profileFemale.jpg";
import profileMale from "../Images/profileMale.jpg";
import defaultProfile from "../Images/prof.jpg";
import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Menu, MenuItem } from "@mui/material";
import updatedLogo from "../Images/updatedLogo.png";
import NavA from "../Images/NavA.png";
import Navb from "../Images/Navb.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClicku = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
 const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 useEffect(() => {
   const token = localStorage.getItem("accessToken");
   const user = localStorage.getItem("user");
   if (token && user) {
     console.log(token, user, "vaaaaaaalidd??");
     dispatch(setUser({ token, user }));
   } else {
     dispatch(logout(user));
   }
 }, []);

 const user = useSelector((state) => state.auth.user);
 console.log(user, "heheeeeeeeeeeeeee user state");

 const handleLogout = () => {
   dispatch(logout(user));
   toast.success("Logout successully!");
   navigate("/");
 };

 const scrollToTop = () => {
   window.scrollTo(0, 0);
 };
 const [isOpen, setIsOpen] = useState(false);

 const handleClick = () => setIsOpen(!isOpen);
 const CloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="Navbar-main">
        <nav>
          <div onClick={handleClick} className="nav-icons">
            {isOpen ? (
              <IoCloseOutline className="nav-icon-close" onClick={CloseMenu} />
            ) : (
              <div>

                <RiMenu5Fill className="nav-icon" onClick={handleClick} />
              </div>
            )}
            {/* <RiMenu5Fill className="nav-icon" />
          <IoCloseOutline className="nav-icon" /> */}
          </div>
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <div>
              <NavLink to="/" className="Links">
                <li>Home</li>
              </NavLink>
              <NavLink to="/Speak_easy" className="Links">
                <li>Speak-Easy</li>
              </NavLink>
              <NavLink to="/Senses" className="Links">
                <li>Senses Resurrection</li>
              </NavLink>
              <NavLink to="/OneOnOne" className="Links">
                <li>One-On-One Session</li>
              </NavLink>
              {/* <NavLink to="/GriefSupport" className="Links">
                <li>Grief Support</li>
              </NavLink> */}
              <NavLink to="/AffiliateProgram" className="Links">
                <li>AffiliateProgram</li>
              </NavLink>
            </div>
            <div>
              <NavLink to="/GriefsupportGroup" className="Links">
                <li>Grief Support Meetup</li>
              </NavLink>
              <NavLink to="/Preppers" className="Links">
                <li>Preppers</li>
              </NavLink>
              <NavLink to="/Podcast" className="Links">
                <li>Podcast</li>
              </NavLink>
              <NavLink to="/TeamPage" className="Links">
                <li>TeamPage</li>
              </NavLink>
              <NavLink to="/Hiring" className="Links">
                <li>Careers</li>
              </NavLink>
              {/* <NavLink to="/GoalVision" className="Links">
                <li>About us</li>
              </NavLink> */}
            </div>
          </ul>

          <div className="nav-icons"></div>
          <NavLink to="/">
          <div className="logo-sets">
            <img src={NavA} alt="" />
            <img src={updatedLogo} alt="" />
            <img src={Navb} alt="" />
          </div>
          </NavLink>
          {user ? (
            <div className="Login-btns">
              <button onClick={handleLogout} className="full-rounded">
                <NavLink className="Links">
                  <span>Logout</span>
                </NavLink>
                {/* <div className="border full-rounded"></div> */}
              </button>
              {/* <img src={Navarrow} className="navarrow" alt="" /> */}
              {/* <NavLink to={"/UserProfile"} className="Links"> */}
              {/* <p>profile</p> */}

              {/* <img src={user.profilePic} alt="" /> */}
              {/* </NavLink> */}
              <div>
                <div
                  id="profile-menu"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClicku}
                  style={{ cursor: "pointer", display: "inline-block" }} // Add any other styling needed
                >
                  {!user.profilePic ? (
                    <img
                      src={
                        user.gender === "male"
                          ? profileMale
                          : user.gender === "female"
                          ? profileFemale
                          : defaultProfile
                      }
                      alt="noImage"
                    />
                  ) : (
                    <img src={user.profilePic} alt="noImage" />
                  )}
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "profile-menu",
                  }}
                >
                  <Link to="/UserProfile" className="Links">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          ) : (
            <div className="Login-btns">
              <button className="full-rounded">
                <NavLink to="/Login" className="Links">
                  <span>Already a member</span>
                </NavLink>
                <div className="border full-rounded"></div>
              </button>

              <button className="full-rounded">
                <NavLink to="/Signup" className="Links">
                  <span>Not a member</span>
                </NavLink>
                <div className="border full-rounded"></div>
              </button>
            </div>
          )}
        </nav>
      </div>
      <img src={AlCloud} className="Cloude" />
    </div>
  );
};

export default Navbar;
