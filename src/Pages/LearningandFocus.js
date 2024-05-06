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
import LFA from "../Images/LFA.png";
import Maskgroup from "../Images/Mask group.png";
import cover from "../Images/cover.png";
import PodcastRed from "../Images/PodcastRed.png";
import Yellowline from "../Images/Yellowline.png";
import "../Css/Learning.css";
import WHYAL from "../Videos/WHYAL.mp4";
import { Link } from "react-router-dom";

const LearningandFocus = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  return (
    <div>
      <div>
        <div className="home-main">
          <Navbar />
          <div className="header">
            <div className="header-container">
              <img
                src={LFA}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
              />
              <div className="hdr-text">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Our Solution
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Learning &
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="3000">
                  Focus
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
            <p style={{ textAlign: "center" }}>
              Unlock the full academic and personal potential of both the young
              and mature.
            </p>

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
              {/* <div className="circle">
                <img src={Roundb} alt="" />
              </div>
              <div className="circle-b">
                <img src={Rounda} alt="" />
              </div> */}

              <div className="card-inneR">
                <div className="card-inneR-text">
                  <h1>Learning & Focus for both</h1>

                  <p>Young & Mature</p>
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
                <h1>Get to know your Progress of Learning and Focus!</h1>
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
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                    borderRadius: "20px",
                  }}
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
          <div className="benefit-boxes-main">
            <div className="therapy-heading">
              <p>One Platform, Multiple touchpoints</p>
              <h1>BenefIts of</h1>
              <h2>Active Listeners</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <div>
              <div className="benefit-box-grid">
                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Deeper Family Connections</h2>
                  <p>
                    Build lasting bonds through improved communication and
                    shared experiences.
                  </p>
                </div>

                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Enhanced Learning and Focus</h2>
                  <p>
                    Propel your loved ones toward academic and personal success
                    with sharpened focus and engagement.
                  </p>
                </div>
                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Stress Reduction</h2>
                  <p>
                    Let the worries of the day melt away, creating a calm
                    environment for all family members.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="benefit-box-grid">
                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Deeper Family Connections</h2>
                  <p>
                    Build lasting bonds through improved communication and
                    shared experiences.
                  </p>
                </div>

                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Enhanced Learning and Focus</h2>
                  <p>
                    Propel your loved ones toward academic and personal success
                    with sharpened focus and engagement.
                  </p>
                </div>
                <div className="benefit-inside-box">
                  <img src="" alt="" />
                  <h2>Stress Reduction</h2>
                  <p>
                    Let the worries of the day melt away, creating a calm
                    environment for all family members.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Therapycategories />
          <GetinTouch />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LearningandFocus;
