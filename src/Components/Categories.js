import React,{ useState,useEffect,useRef } from "react";
import "../Css/Categories.css";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
import Static from "../Images/Static.png";
import Elements from "../Images/Elements.png";
import { NavLink } from "react-router-dom";
import WHYAL from "../Videos/WHYAL.mp4";
import { MdPlayCircleFilled } from "react-icons/md";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
const Categories = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
 const videoRef = useRef(null);
 const [lastScrollTop, setLastScrollTop] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
   const videoElement = videoRef.current;

   const handleScroll = () => {
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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

  const [vid2, setVid2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response.data.reslt, "oooooqqqqqqqqqqq"); // Log the second object in the response
        if (response) {
          // const videoData = response.data.reslt[1]; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
          setVid2(response.data.reslt[1].source);
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
  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="categories-main-holecontainer">
      <div className="puzzle-boy">
        <div className="imsha">
          <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
            <span>Services we Offer</span>
            <p>Our Core</p>
            <h1>Discoveries</h1>
          </div>
        </div>
        <div className="element">
          <img
            src={Elements}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            alt=""
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Transformative support for those seeking clarity and understanding
            through active listening.
          </h4>
        </div>
        {/* <img
          src={Maskgroup}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt=""
        /> */}
      </div>
      <div className="categories-main">
        <div className="cate-yellow-box">
          <div className="Hoodi">
            <div style={{ position: "relative", width: "100%" }}>
              {vid2 && (
                <video
                  controls // Ensure controls are enabled for user interaction
                  className="Header-video"
                 onClick={handlePlayClick}
                  // onPlay={() => setIsPlaying(true)}
                  // onPause={() => setIsPlaying(false)}
                  ref={videoRef}
                >
                  <source src={vid2} type="video/mp4" />
                  {/* Make sure src and type are correctly set */}
                  Your browser does not support the video tag.
                </video>
              )}
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
                      <MdPlayCircleFilled onClick={handlePlayClick} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cate-left-box">
          <div
            className="box1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            <img src={community} alt="" />
            <h2>Mobile Addiction</h2>
            <p>
              Obsessive smartphone usage hampers daily life, social interaction,
              productivity.
            </p>
            <NavLink onClick={scrollToTop} to="/MobileAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2900"
          >
            <img src={chat} alt="" />
            <h2>Social Media Addiction</h2>
            <p>
              Continuous scrolling, likes, and shares diminish real-world
              connections profoundly.
            </p>
            <NavLink onClick={scrollToTop} to="/SocialMediaAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2500"
          >
            <img src={weekly} alt="" />
            <h2>Gaming Addiction</h2>
            <p>
              Excessive gaming disrupts routines, relationships, and overall
              well-being detrimentally.
            </p>
            <NavLink onClick={scrollToTop} to="/GamingAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box4"
            data-aos-duration="3000"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={emoji} alt="" />
            <h2>Entertainment & Performance Addiction</h2>
            <p>
              Constant pursuit of thrill undermines personal growth,
              relationships, and well-being.
            </p>
            <NavLink
              onClick={scrollToTop}
              to="/EntertainmentandperformanceAddiction"
            >
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
