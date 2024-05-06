import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import GamingA from "../Images/GamingA.png";
import GamingB from "../Images/GamingB.png";
import Navarrow from "../Images/Navarrow.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import MoAddiction from "../Images/MoAddiction.png";
import Maskgroup from "../Images/Mask group.png";
import PodcastRed from "../Images/PodcastRed.png";
import cover from "../Images/cover.png";
import Therapycategories from "../Components/Therapycategories.js";
import Footer from "../Components/Footer.js";
import GetinTouch from "../Components/GetinTouch.js";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Brine from "../SmallElements/Brine.png";
import GreenClock from "../SmallElements/GreenClock.png";
import OldTime from "../SmallElements/OldTime.png";
import Pinkmen from "../SmallElements/Pinkmen.png";
import HandYellow from "../SmallElements/HandYellow.png";
import BrinBuzzle from "../SmallElements/BrinBuzzle.png";
const GamingAddiction = () => {
  
    const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
    const appointmentSubmit = (e) => {
      e.preventDefault();
      setWantComplimentaryCall(true);
    };

    const handleClose = () => {
      setWantComplimentaryCall(false);
      // setCloseClick(true);
    };
  return (
    <div>
      <div>
        <Navbar />
        <div className="mobile-addiction-main-container">
          <div className="mobile-addiction-header">
            <div className="header-container">
              <img
                src={GamingA}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
                width={"150px]"}
              />
              <div className="hdr-text">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  For Kids{" "}
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Gaming
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="3000">
                  Addiction
                </h3>
              </div>
              {/* <img
                src={GamingB}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
              /> */}
              <iframe
                className="gaming-videos-adi"
                src="https://www.youtube.com/embed/MSzppjFe1iM?si=-Bm6Z01t75zFvvZz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="btn-compo">
              {wantComplimentaryCall ? (
                <>
                  <div className="sub-telecall">
                    <span
                      className="close-calendly-addiction"
                      onClick={handleClose}
                    >
                      <AiOutlineCloseCircle className="senestop-icon" />
                    </span>
                    <div className="new-imsa">
                      <InlineWidget
                        url="https://calendly.com/teammentoons/active-listeners"
                        // className="calendly-embed-header"
                        // style={{ width: "10%", height: "100%" }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {wantComplimentaryCall ? (
                <></>
              ) : (
                <div>
                  <button onClick={appointmentSubmit}>Get Appointment</button>
                  <img onClick={appointmentSubmit} src={Navarrow} alt="" />
                </div>
              )}
            </div>
          </div>

          <div className="grean-box-mobile-addiction">
            <div className="mobile-addiction-box-green">
              {/* <img
                src={Roundb}
                style={{
                  marginTop: "-40%",
                  marginLeft: "-10%",
                  zIndex: "-1",
                  width: "20%",
                }}
                alt=""
              /> */}

              <div className="inside-mobile-addiction-txt">
                <h1>Are you Addicted to the Mobile phone?</h1>
                {/* <img
                  src={MoAddiction}
                  style={{
                    width: "60%",
                  }}
                  alt=""
                /> */}

                <iframe
                  className="adpatation-to-mobile-yt-vide"
                  src="https://www.youtube.com/embed/MSzppjFe1iM?si=-Bm6Z01t75zFvvZz"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <img
                src={Rounda}
                style={{
                  marginRight: "-17%",
                  marginTop: "35%",
                  width: "30%",
                  zIndex: "-1",
                }}
                alt=""
              /> */}
            </div>
          </div>

          <div className="observed-result">
            <div className="observed-result-header">
              <div className="Subscribe-heading">
                <p>Outcome</p>
                <h1>Observed Results of</h1>
                <h2>Gaming Addiction</h2>
              </div>
            </div>
            {/* boxes */}
            <div className="observed-result-cate">
              <div className="observed-result-main">
                {/* Fist-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <ul className="observed-result-box-align-ul">
                      <li>
                        {" "}
                        <img src={Brine} alt="" />
                      </li>
                      <li>
                        {" "}
                        <h2>Physical Health issues</h2>
                      </li>
                      <li>
                        <p>
                          Overuse of mobile devices can cause eye strain, pain,
                          and sleep disruption.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="observed-result-box-align">
                    <ul className="observed-result-box-align-ul">
                      <li>
                        {" "}
                        <img src={GreenClock} alt="" />
                      </li>
                      <li>
                        {" "}
                        <h2>Academic or work decline</h2>
                      </li>
                      <li>
                        <p>
                          Gaming addiction results in academic neglect, missed
                          assignments, and poor performance.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* second-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <ul className="observed-result-box-align-ul">
                      <li>
                        {" "}
                        <img src={OldTime} alt="" />
                      </li>
                      <li>
                        {" "}
                        <h2>Neglected Responsibilities</h2>
                      </li>
                      <li>
                        <p>
                          Gaming Addiction may neglect tasks, causing academic,
                          work, or familial problems.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="observed-result-box-align">
                    <ul className="observed-result-box-align-ul">
                      <li>
                        {" "}
                        <img src={Pinkmen} alt="" />
                      </li>
                      <li>
                        <h2>Sleep Deprivation</h2>
                      </li>
                      <li>
                        <p>
                          Gaming addiction disrupts sleep, worsening physical
                          and mental health issues.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* therod-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <ul className="observed-result-box-align-ul">
                      <li>
                        {" "}
                        <img src={HandYellow} alt="" />
                      </li>
                      <li>
                        {" "}
                        <h2>Aggression or violence</h2>
                      </li>
                      <li>
                    <p>
                      Exposure to violent games desensitizes, fosters
                      aggression, and triggers conflicts.
                    </p>
                    </li>
                    </ul>

                  </div>

                  <div className="observed-result-box-align">
                    <img src={BrinBuzzle} alt="" />
                    <h2>Lack of real-life experiences</h2>
                    <p>
                      Gaming addiction offers temporary escape but hinders
                      personal growth ultimately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="yellow-box-mobile-addiction">
                {/* <div className="mobile-addiction-yellow-box">
                  <h4>Lack of real-life experiences</h4>
                  <button>Take Test</button>
                  <img src={Maskgroup} className="maskgroup-mob" alt="" />
                </div> */}

                <div className="mobile-addiction-yellow-box">
                  <img
                    src={PodcastRed}
                    style={{
                      width: "100px",
                      position: "absolute",
                      marginLeft: "15%",
                      marginTop: "-16%",
                    }}
                    alt=""
                  />
                  <img
                    src={cover}
                    style={{
                      width: "200px",
                      marginLeft: "1%",
                      borderRadius: "30px",
                    }}
                    alt=""
                  />
                  <span>Recommended Podcast</span>
                  <h4>Are you Addicted to Mobile phone?</h4>
                  <Link to="/podcast">
                    {" "}
                    <button>Watch Now</button>
                  </Link>
                </div>
              </div>
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

export default GamingAddiction;
