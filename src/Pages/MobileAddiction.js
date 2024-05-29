import React,{useEffect, useState} from "react";
import "../Css/MobileAddiction.css";
import Navbar from "../Components/Navbar.js";
import MobileaddLeft from "../Images/MobileaddLeft.png";
import MobileaddRight from "../Images/MobileaddRight.png";
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
import Brine from "../SmallElements/Brine.png";
import BrinBuzzle from "../SmallElements/BrinBuzzle.png";
import OldTime from "../SmallElements/OldTime.png";
import CB from "../SmallElements/CB.png";
import Pinkmen from "../SmallElements/Pinkmen.png";
import GreenClock from "../SmallElements/GreenClock.png";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Breadcrumps from "../Components/Breadcrumps";
import WHYAL from "../Videos/WHYAL.mp4";
import axios from "../Utils/Baseurl";
const MobileAddiction = () => {
  
    const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
    const appointmentSubmit = (e) => {
      e.preventDefault();
      setWantComplimentaryCall(true);
    };

    const handleClose = () => {
      setWantComplimentaryCall(false);
      // setCloseClick(true);
    };

    const [video,setVideo] = useState('');

      useEffect(()=>{
        const apiFetch = async () => {
          try{
            const res = await axios.get("admin/get_allVideos");
            console.log(res,"dmskd--------------->>nkdsjcnsjdnskjdnskjdk");
            if(res){
            setVideo(res.data.reslt[5].source);
            }else{
              console.log("error");
            }

          }catch (error) {
            console.log("error");
          }
        };
        apiFetch();
      },[])

  return (
    <div>
      <Navbar />
      <Breadcrumps />
      <div className="mobile-addiction-main-container">
        <div className="mobile-addiction-header">
          <div className="header-container-mobile">
            <img
              src={MobileaddLeft}
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
                Mobile
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Addiction
              </h3>
            </div>
            <img
              src={MobileaddRight}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
          </div>
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

              {video && (
                <video
                  controls // Ensure controls are enabled for user interaction
                  className="early-age-video"
                  // onClick={togglePlay}
                  // onPlay={() => setIsPlaying(true)}
                  // onPause={() => setIsPlaying(false)}
                >
                  <source src={video} type="video/mp4" />{" "}
                  {/* Make sure src and type are correctly set */}
                  Your browser does not support the video tag.
                </video>
              )}
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
              <h2>Mobile Addiction</h2>
            </div>
          </div>
          {/* boxes */}
          <div className="observed-result-cate">
            <div className="observed-result-main">
              {/* Fist-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <ul>
                    <li>
                      <img src={Brine} alt="" />
                      <h2>Health Issues</h2>
                      <p>
                        Overuse of mobile devices can cause eye strain, pain,
                        and sleep disruption.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="observed-result-box-align">
                  <ul>
                    <li>
                      {" "}
                      <img src={GreenClock} alt="" />
                    </li>
                    <li>
                      {" "}
                      <h2>Decreased Productivity</h2>
                    </li>
                    <li>
                      {" "}
                      <p>
                        Mobile addiction leads to distractions, procrastination,
                        hindering productivity, and performance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* second-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <ul>
                    <li>
                      {" "}
                      <img src={OldTime} alt="" />
                    </li>
                    <li>
                      {" "}
                      <h2>Neglected Responsibilities</h2>
                    </li>
                    <li>
                      {" "}
                      <p>
                        Mobile addicts may neglect tasks, causing academic,
                        work, or family problems.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="observed-result-box-align">
                  <ul>
                    <li>
                      <img src={Pinkmen} alt="" />
                    </li>
                    <li>
                      {" "}
                      <h2>Unable to interact socially</h2>
                    </li>
                    <li>
                      <p>
                        Mobile addicts may struggle with in-person
                        communication, fostering isolation feelings.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* therod-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <img src={CB} alt="" />
                  <h2>Cyber Bullying</h2>
                  <p>
                    People may feel negative emotions due to social media
                    comparisons.
                  </p>
                </div>

                <div className="observed-result-box-align">
                  <img src={BrinBuzzle} alt="" />
                  <h2>Depression, Anxiety</h2>
                  <p>
                    Mobile addiction may elevate stress, anxiety, and depression
                    levels.
                  </p>
                </div>
              </div>
            </div>
            <div className="yellow-box-mobile-addiction">
              {/* <div className="mobile-addiction-yellow-box">
                <h4>Get to know How much you are Addicted to Mobile Phones</h4>
                <button>Take Test</button>
                <img src={Maskgroup} className="maskgroup-mob" alt="" />
              </div> */}

              <div className="mobile-addiction-yellow-box">
                <div className="podcast-ylo">
                  <img src={PodcastRed} alt="" />
                </div>
                <div className="over">
                  <img src={cover} alt="" />
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
      </div>
      <Therapycategories />
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default MobileAddiction;
