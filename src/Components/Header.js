import React, { useState,useEffect } from "react";
import "../Css/Header.css";
import Hdrleft from "../Images/Hdrleft.png";
import Hdrright from "../Images/Hdrright.png";
import Maskgroup from "../Images/Maskgroup.png";
import Play from "../Images/Play.png";
import Arrow from "../Images/Arrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import FrameA from "../Images/FrameA.png";
import FrameB from "../Images/FrameB.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import WHYAL from "../Videos/WHYAL.mp4"
import { MdPlayCircleFilled } from "react-icons/md";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
import EllipseGreen from "../Images/EllipseGreen.png";

const Header = () => {

  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response.data.reslt); // Log the second object in the response
        if (response) {
          const videoData = response.data.reslt; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
          setRows(videoData);
        } else {
          toast.error("something went wrong!!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  
  return (
    <div className="header-main">
      <div className="yellow-box">
        <ul className="yellow-box-ul">
          <marquee>
            <div className="main-y-div">
              <div>
                <li>
                  Developed by <span>Psychologists</span>|
                </li>
              </div>
              <div>
                <li>Zero - Medication |</li>
              </div>
              <div>
                <li>Music, Aroma & Mandala Art Therapy |</li>
              </div>
              <div>
                <li>100% Safe for Kids |</li>
              </div>
            </div>

            {/* <li>Zero - Medication |</li>
            <li>  </li>
            <li></li> */}
          </marquee>
        </ul>
      </div>
      <div className="header">
        <div className="header-container">
          <img src={Hdrleft} alt="" />
          <div
            className="hdr-text-landing"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1>Helping you </h1>
            <h2>Find</h2>
            <h3>Balance & Focus</h3>
          </div>
          {/* <img
            src={Hdrright}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          /> */}
          {console.log(rows, "loooooooooooooooooooooo")}
          <video
            controls // Ensure controls are enabled for user interaction
            className="Header-video-top"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={WHYAL} type="video/mp4" />
            {/* Make sure src and type are correctly set */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hdr-tx">
          <p>
            At Active Listeners,We believe that early age gadgets exposure,
            Adaptation to mobile among children has now led to time where there
            is decrease in focus and learning
          </p>
        </div>
        <div className="categoreis-haeder">
          <div className="categoreis-grid-boxs">
            <div>
              <NavLink to="/EarlyagegadgetExposure" className="Links">
                {" "}
                <div onClick={scrollToTop} className="categoreis-grid-box">
                  <span>Ages: 6-12</span>
                  <p>
                    Early age gadget exposure{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
              <NavLink to="/AdaptationtoMobilePhones" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Ages: 13-19</span>
                  <p>
                    Adaptation to mobile{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
            </div>

            <div>
              <NavLink to="/LearningandFocus" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Our Solutions</span>
                  <p>
                    Learning and Focus{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
              <NavLink to="/CurrentTimes" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Post Covid</span>
                  <p>
                    Current Times{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
            </div>
          </div>

          <div></div>
        </div>
        <div className="hdr-btm-text">
          <img src={FrameA} alt="" />
          {!showPopup && (
            <button onClick={togglePopup}>Why Active Listeners?</button>
          )}
          {showPopup && (
            <div className="popup">
              <div className="popup-inner">
                <IoIosCloseCircleOutline
                  onClick={togglePopup}
                  className="Header-video-close"
                />
                <div>
                  {" "}
                  <div>
                    <div style={{ position: "relative", width: "100%" }}>
                      <video
                        controls
                        className="header-video"
                        onClick={togglePlay}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      >
                        <source src={WHYAL} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div>
                        {!isPlaying && (
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              cursor: "pointer",
                              // width:"20px"
                            }}
                            className="play-center-btn"
                            onClick={togglePlay}
                          >
                            <div>
                              <MdPlayCircleFilled onClick={togglePlay} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <img src={FrameB} alt="" />
          <img src={EllipseGreen} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
