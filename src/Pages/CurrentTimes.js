import React from "react";

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

const CurrentTimes = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  return (
    <div>
      <div className="home-main">
        <Navbar />
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
                Post Covid
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Current
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Times
              </h3>
            </div>
            <img
              src={earlyAgeright2}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
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
                <h1>Covid on </h1>
                <p>Today’s Life</p>
              </div>
              <video
                controls // Ensure controls are enabled for user interaction
                className="early-age-video"
                // onClick={togglePlay}
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
              >
                <source src={WHYAL} type="video/mp4" />{" "}
                {/* Make sure src and type are correctly set */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="getyoukow-main-container">
          {/* <div className="getyoukow-container">
            <div className="getyouknow-txt">
              <h1>How the Covid pandemic has affected your life?</h1>
              <button>Take Test </button>
            </div>
            <div className="getyouknow-image">
              <img src={Maskgroup} alt="" />
            </div>
          </div> */}
          <div className="getyoukow-container">
            <div className="getyouknow-image">
              <img
                src={cover}
                // style={{
                //   width: "80%",
                //   marginLeft: "10%",
                //   borderRadius: "20px",
                // }}
                alt=""
              />
            </div>
            <div className="getyouknow-txt">
              <h1>Are you a Perplexed Mind Person?</h1>
              <Link to="/podcast" onClick={scrollToTop}>
                <button>Watch Now </button>
              </Link>
            </div>
            <img src={PodcastRed} className="getyoukow-image-red" alt="" />
          </div>
        </div>
        <Therapycategories />
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default CurrentTimes;
