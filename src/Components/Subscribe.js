import React, { Component, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "../Css/Subscribe.css";
import { NavLink,Link } from "react-router-dom";
import FreeMember from "../Images/FreeMember.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Doc from "../Images/Doc.png";
import Think from "../Images/Think.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MentoonBenar from "../Images/MentoonBenar.png";
import axios from "../Utils/Baseurl.js";
import Yellowline from "../Images/Yellowline.png";
import { TiArrowRightThick } from "react-icons/ti";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
// import Kadhoolu from "../Images/Kadhoolu.png";
import Nool from "../Images/Nool.png";
import Coc from "../Images/Coc.png";
import Gitarakka from "../Images/Gitarakka.png";
import spa from "../Images/spa.png";
import Children from "../Images/Childern.png";
import Menbulb from "../Images/Menbulb.png";
import GetinTouch from "../Components/GetinTouch";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Breadcrumps from "../Components/Breadcrumps";
const Subscribe = () => {
    const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
    const appointmentSubmit = (e) => {
      e.preventDefault();
      setWantComplimentaryCall(true);
    };

    const handleClose = () => {
      setWantComplimentaryCall(false);
      // setCloseClick(true);
    };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // const [caro, setCaro] = useState([
  //   {
  //     id: 1,
  //     episode: 1,
  //     name: "Social Media de-addiction Tips",
  //     EpiImage: require("../Images/Adiction.png"),
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Social Media",
  //     cateB: "Mental health",
  //     cateC: "health",
  //     // cateD: "",
  //   },
  //   {
  //     id: 2,
  //     episode: 2,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Loneliness due to Gaming",
  //     EpiImage: require("../Images/Lonely .png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Loneliness",
  //     cateB: "health",
  //     cateC: "Gaming",
  //     // cateD: "",
  //   },
  //   {
  //     id: 3,
  //     episode: 3,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "How to handle your  Teenage Children",
  //     EpiImage: require("../Images/GamingAddiction.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "teenange",
  //     cateB: "health",
  //     cateC: "parents",
  //     // cateD: "",
  //   },
  //   {
  //     id: 4,
  //     episode: 4,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Are you perplexed mind Person?",
  //     EpiImage: require("../Images/Untitled_Artwork 22.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Mental Guide",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  //   {
  //     id: 5,
  //     episode: 5,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Why WFH is preffered?",
  //     EpiImage: require("../Images/Untitled_Artwork 16.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Healthy Life",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  //   {
  //     id: 6,
  //     episode: 6,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Disconnect to Reconnect",
  //     EpiImage: require("../Images/Disconnect to reconnect .png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Relocation",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  // ]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const [caro, setCaro] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("admin/view_all_podcast");
      console.log(response, "kkk");
      if (response.data.reslt) {
        setCaro(response.data.reslt);
      } else {
        toast.error("Something went wrong!!");
      }
    };
    fetchData();
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div>
      <div className="Subscribe-main">
        <div className="Subscribe-cate">
          <div className="Subscribe-heading">
            <p>One Platform, Multiple touchpoints</p>
            <h1>How Else we can</h1>
            <h2>Help</h2>
          </div>

          <div
            className="Subscribe-box-main"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="2000"
          >
            <div className="Subscribe-box">
              <div className="Subscribe-box-1">
                <div style={{ width: "70%" }}>
                  <h1>Grief Support Group</h1>
                  <p>Offline & Online weekly meetup</p>
                </div>
                <img src={FreeMember} alt="" clas />
              </div>

              <ul className="Support-group">
                <li>Family, Relationships & Divorce</li>
                <li>Loss of Loved Ones/ Relocation</li>
                <li>Relocation</li>
                <li>Identity and Gender crisis</li>
                <li>Substance abuse</li>
                <li>Gaming/ Social Media/ Mobile Addicts</li>
                <li>Elderly Support Group</li>
              </ul>
              <div className="hdrsubs-butns">
                <Link to="/GriefsupportGroup" onClick={scrollToTop}>
                  <button className="btn-primary">Know More</button>
                </Link>
                <img src={Kadhoolu} alt="" />
              </div>
            </div>
            <div className="Subscribe-box">
              <div className="Subscribe-box-2">
                <div>
                  <h1>Psychologists available via Phone consultation !</h1>
                  {/* <p>Offline & Online weekly meetup</p> */}
                </div>
                {/* <img src={FreeMember} style={{ width: 100 }} alt="" /> */}
              </div>

              <ul className="Support-group">
                <li>Bullying, Body Shaming, Cyber Trolling</li>
                <li>Low Self Esteem / Suicidal Tendencies </li>
                <li>Introverts</li>
              </ul>
              <div className="hdrsubs-butns-a">
                {wantComplimentaryCall ? (
                  <>
                  <div className="sub-telecall">
                    <span className="close-calendly" onClick={handleClose}>
                      <AiOutlineCloseCircle className="senestop-icon" />
                    </span>

                    <InlineWidget
                      url="https://calendly.com/teammentoons/active-listeners"
                      // className="calendly-embed-header"
                      // style={{ width: "10%", height: "100%" }}
                    />

                  </div>
                  </>
                ) : (
                  <></>
                )}

                {wantComplimentaryCall ? (
                  <></>
                ) : (
                  
                    <button onClick={appointmentSubmit}>Get Appointment</button>
                    
                )}
                <img src={Doc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hdr-caro">
        <div className="hdr-caro-a">
          <div className="caro-heading-tag">
            <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
              <span>One Platform, Multiple touchpoints</span>
              <p>Podcast</p>
              <h1>Everyone</h1>
            </div>
            <div className="element">
              {/* <img
              src={Elements}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              alt=""
            /> */}
              {/* <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
            </div>
            <img
              src={Think}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              alt=""
            />
          </div>
          <div className="subscribe-caro-container">
            <div className="slider-container">
              <Slider {...settings}>
                {caro.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="caro-for-hdr">
                        <div className="home-caro-align">
                          <video
                            controls
                            
                            className="posdcast-video"
                            onClick={togglePlay}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            // poster={list.thumbnail}
                          >
                            <source src={item.source} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <ul className="epi-list">
                            <li>
                              <p style={{ fontWeight: "bold", color: "green" }}>
                                Episode {item.id}
                              </p>
                            </li>
                            <li>
                              <p
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                              >
                                {item.title}
                              </p>
                            </li>
                            <hr></hr>
                            <li>
                              <p>{item.discription}</p>
                            </li>
                          </ul>
                        </div>

                        <div className="cate-home-caro">
                          <div className="cate-home-caro-btns">
                            <label>Category</label>
                            <button>{item.category}</button>
                          </div>
                          {/* <div className="host-home-caro">
                            <p>Hosted by :</p>
                            <div className="host-imgage">
                              <img
                                src={item.fravatarb}
                                style={{ width: "60px" }}
                                alt=""
                              />
                              <img
                                src={item.fravatarb}
                                style={{
                                  width: "60px",
                                  borderRadius: "500%",
                                }}
                                alt=""
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="carosel-home-button">
          <NavLink className="Links" onClick={scrollToTop} to="/Podcast">
            <button>Discover</button>
          </NavLink>
        </div>
      </div>

      <div className="mentoonsbaner">
        <img src={MentoonBenar} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
