
import React, { useRef,useState, useEffect } from "react";
import "../Css/Header.css";
import Hdrleft from "../Images/Hdrleft.png";
import Arrow from "../Images/Arrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import FrameA from "../Images/FrameA.png";
import FrameB from "../Images/FrameB.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import WHYAL from "../Videos/WHYAL.mp4";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
import Navarrow from "../Images/Navarrow.png"

const Header = () => {
  const [rows, setRows] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response.data.reslt, "arrayobjjjjjjjjjjjjjjjj"); // Log the second object in the response
        if (response) {
          // const videoData = response.data.reslt[1]; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
          setRows(response.data.reslt[0].source);
          // setVid2;(response.data.reslt[1].source)
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
  const videoRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;
      setLastScrollTop(scrollTop);

      // Pause the video if scrolling down
      if (videoElement && isPlaying && isScrollingDown) {
        videoElement.pause();
        setIsPlaying(false);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!videoElement) return;

        if (entry.isIntersecting && !isPlaying) {
          // Play the video only if it's not already playing and user interacted
          if (videoElement.paused) {
            videoElement
              .play()
              .then(() => setIsPlaying(true))
              .catch((error) =>
                console.error("Failed to play the video:", error)
              );
          }
        } else if (!entry.isIntersecting && isPlaying) {
          videoElement.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, isPlaying]);

  // Handle video play on user click
  const handlePlayClick = () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Start playing only if it's paused and user interacted
    if (videoElement.paused) {
      videoElement
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Failed to play the video:", error));
    }
  };
  return (
    <div className="header-main">
      <div className="yellow-box">
        <ul className="yellow-box-ul">
          {/* <marquee> */}
          <div className="main-y-div">
            <div>
              <li>
                Developed by <span>Psychologists</span>
              </li>
            </div>
            <div>
              <li>Zero - Medication </li>
            </div>
            <div>
              <li>Music, Aroma & Mandala Art Therapy </li>
            </div>
            <div>
              <li>100% Safe for Kids </li>
            </div>
          </div>

          {/* <li>Zero - Medication |</li>
            <li>  </li>
            <li></li> */}
          {/* </marquee> */}
        </ul>
      </div>
      <div className="header">
        <div className="header-container">
          <img src={Hdrleft} alt="" />
          <div className="hdr-text-landing">
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

          {/* <img src={Maskgroup} alt="" /> */}

          {rows && (
            <video
              controls
              className="Header-video-top"
              onClick={handlePlayClick}
            >
              <source src={rows} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="hdr-tx">
          <p>
            Our diverse range of services includes workshops, listening
            sessions, and creative therapies tailored specifically for children
            and families dealing with anxiety, depression, and social isolation.
            From music and art therapy to engaging games and comics, we create
            safe, fun, and supportive environments to foster communication,
            understanding, and healing.
          </p>
        </div>
        <div className="categoreis-haeder">
          <div className="categoreis-grid-boxs">
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
                <p>Adaptation to mobile </p>
                <img src={Arrow} className="arrow-for-header" alt="" />
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

            <NavLink to="/LearningandFocus" className="Links">
              <div className="categoreis-grid-box" onClick={scrollToTop}>
                <span>Our Solutions</span>
                <p>
                  Learning and Focus{" "}
                  <img src={Arrow} className="arrow-for-header" alt="" />
                </p>
              </div>
            </NavLink>
          </div>

          <div></div>
        </div>
        <div className="hdr-btm-text">
          <div className="inside-hdr-btm-txt">
            <img src={FrameA} alt="" />
          </div>

          {!showPopup && (
            <div className="why-active-btn">
              <button onClick={togglePopup}>Why Active Listeners?</button>
              <img onClick={togglePopup} src={Navarrow} alt="" />
            </div>
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
                        onClick={handlePlayClick}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}

                        // ref={videoRef}
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
                            onClick={handlePlayClick}
                          >
                            <div>
                              {/* <MdPlayCircleFilled onClick={togglePlay} /> */}
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
          <div className="inside-hdr-btm-txt">
            <img src={FrameB} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
