import React,{useState,useEffect,useRef } from "react";

import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Therapycategories from "../Components/Therapycategories";
import earlyAgeright2 from "../Images/earlyAgeright.png";
import earlyAgeleft from "../Images/earlyAgeleft.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import earlyAgeBoxImg from "../Images/earlyAgeBoxImg.png";
import "../Css/EarlyAgeGadgetExposure.css";
import Group119 from "../Images/Group 119.png";
import Maskgroup from "../Images/Mask group.png";
import cover from "../Images/cover.png";
import PodcastRed from "../Images/PodcastRed.png";
import WHYAL from "../Videos/WHYAL.mp4";
import { Link } from "react-router-dom";
import Breadcrumps from "../Components/Breadcrumps";
import { ToastContainer, toast } from "react-toastify";
import axios from "../Utils/Baseurl.js";


const AdaptationtoMobilePhones = () => {
const [rows, setRows] = useState("");
const [rows2, setRows2] = useState("");

 const videoRef = useRef(null);
 const [lastScrollTop, setLastScrollTop] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("admin/get_allVideos");
      console.log(response.data.reslt[2], "array----------------------->>obj"); // Log the second object in the response
      if (response) {
        // const videoData = response.data.reslt[1]; // Retrieve the video data
        // Now you can use videoData to set the state or display the video
        setRows(response.data.reslt[2].source);
        setRows2(response.data.reslt[3].source);
      } else {
        toast.error("something went wrong!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);
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



   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  return (
    <div>
      <div className="home-main">
        <Navbar />
        <Breadcrumps />
        <div className="header">
          <div className="header-container">
            <img
              src={earlyAgeleft}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />

            <div className="hdr-text">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                Adaptation to
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Mobile
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Phones
              </h3>
            </div>
            {/* <img
              src={earlyAgeright2}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            /> */}
            {rows && (
              <video
                controls // Ensure controls are enabled for user interaction
                className="Header-video-top"
                // onClick={togglePlay}
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
              >
                <source src={rows} type="video/mp4" />
                {/* Make sure src and type are correctly set */}
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="hdr-btm-text">
            {/* <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p> */}
            {/* <button>Talk to us</button> */}
          </div>

          {/* <div className="hdr-btm-text">
          <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p>
          <button>Why Active Listeners?</button>
        </div> */}
        </div>
        <div className="green-bourd-Earlyage">
          <div className="card-grif">
            <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div className="card-inneR">
              <div className="card-inneR-text">
                <h1>Impact of</h1>
                <h1>Adaption of</h1>
                <p>Mobile Phones</p>
              </div>
              {/* <img src={earlyAgeBoxImg} alt="" /> */}
              {rows2 && (
                <video
                  controls // Ensure controls are enabled for user interaction
                  className="Header-video-top"
                  // onClick={togglePlay}
                  // onPlay={() => setIsPlaying(true)}
                  // onPause={() => setIsPlaying(false)}
                >
                  <source src={rows2} type="video/mp4" />
                  {/* Make sure src and type are correctly set */}
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
        <div className="getyoukow-main-container">
          <div className="getyoukow-container">
            <img src={cover} alt="" />
            <img src={PodcastRed} className="getyoukow-image-red" alt="" />
            <div className="getyoukow-text-recomended">
              <p>FEATURED EPISODE</p>
              <h1>Are you a Perplexed Mind Person?</h1>
              <Link to="/podcast" onClick={() => window.scrollTo(0, 0)}>
                <button>Watch Now </button>
              </Link>
            </div>
          </div>
        </div>
        <Therapycategories />
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default AdaptationtoMobilePhones;
