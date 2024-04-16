import React, { useState } from "react";
import "../Css/CareerCounselling.css";
import GetinTouch from "../Components/GetinTouch";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import life from "../Images/life.png";
import { TiArrowRightThick } from "react-icons/ti";
import CareerMentorship from "../Images/CareerMentorship.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import EllipseRed from "../Images/EllipseRed.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mahesh from "../Images/mahesh.jpeg";
import anam from "../Images/anam.jpeg";
import joice from "../Images/joice.jpeg";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { TiMediaPlay } from "react-icons/ti";
import VR from "../Images/VR.png";
import MP from "../Images/MP.png";
import Counsling from "../Images/Counsling.png";
const CareerCounselling = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
  const [employees, setemployees] = useState([
    {
      id: 1,
      name: "Mahesh",
      position: "Founder of Active Listeners",
      image: mahesh,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 2,
      name: "Anam Fatima",
      position: "Senior Content Writer",
      image: anam,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 3,
      name: "Joice Lincy",
      position: "Digital Marketing specialist",
      image: joice,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="CareerCounselling-main-cantainer">
        {/* header */}
        <div className="Subscribe-heading">
          <p>Career Counselling</p>
          <h1>20+ Career</h1>
          <h2>Success Stories</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <div className="element-for-career-counselling">
            <img src={ElementB} alt="" />
            <p>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p>
          </div>
        </div>
        {/* complimentry call */}
        <div className="dicover-buttons">
          <button>Free Career Ambition understanding</button>
          <p>Book Your Complimentary 15-min Call</p>
          <TiArrowRightThick className="discover-arrow-for-tele" />
        </div>
        {/* yellowbaner */}

        <div>
          <div className="yellowbaner-for-career-counselling">
            <img src={Rounda} alt="" />

            <img src={CareerMentorship} alt="" />
            <img src={Roundb} alt="" />
          </div>
          {/* <img src={EllipseRed} className="elips" /> */}
        </div>
        {/* comics baner */}
        <div className="comic-baner-container">
          <div className="element-for-career-counselling">
            <p>2 Sample </p>
            <h1>Comics</h1>
            <p>For Free</p>
          </div>
        </div>
        {/* Meet our menter */}
        <div className="meetour-manter">
          <div className="Subscribe-heading">
            <p>Psychologist Team</p>
            <h1>Meet our Mentors</h1>
            <h2>Team</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
            <div className="element-for-career-counselling">
              {/* <img src={ElementB} alt="" /> */}
              <p>
                Transformative support for those seeking clarity and
                understanding through active listening.
              </p>
            </div>
            {/* carousel */}
            <div className="goal-box-container-hole">
              <Slider {...settings}>
                {employees.map((employee) => (
                  <div>
                    <div className="career-box-container" key={employee.id}>
                      <img src={employee.image} alt="" />
                      <div className="positon-name">
                        <p style={{ color: "green" }}>{employee.position}</p>
                        <h1>{employee.name}</h1>
                      </div>
                      <div className="caro-follw">
                        <div className="line-caro"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* success yellow box */}
        <div className="success-yellow-box-main">
          <div className="success-yellow-box">
            <img src={life} alt="" />
            <div className="main-host-for-career">
              <div className="success-yellow-box-inside">
                <span
                  style={{
                    color: "#CD4631",
                    fontWeight: "bolder",
                    fontFamily: "Questrial, sans-serif",
                  }}
                >
                  FEATURED EPISODE
                </span>
                <h1>Path to a Successful Life</h1>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
                <div className="host-career">
                  <div className="host-for-career">
                    <img
                      src={mahesh}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt=""
                    />
                    <p>
                      Host:{" "}
                      <span
                        style={{
                          color: "#256C55",
                          fontWeight: "bolder",
                          padding: "10px",
                        }}
                      >
                        Mahesh Kashinath
                      </span>
                    </p>
                  </div>
                  <div className="host-time-career">
                    <p>April,12,2024</p>
                  </div>
                </div>
                <div className="play-btn-for-career">
                  <button>SUBSCRIBE</button>
                  <button>
                    <TiMediaPlay
                      style={{
                        fontSize: "19px",
                        paddingTop: "5px",
                      }}
                    />
                    LISTEN NOW{" "}
                    <span style={{ color: "#CD4631", fontWeight: "bolder" }}>
                      (46 min)
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* black-box */}
        <div className="black-box-main-container">
          <div className="grean-career-box">
            <img src={VR} alt="" />
            <h1>Video Resume</h1>
          </div>
          <div className="black-box-for-career">
            <h1>Take your career to</h1>
            <h2>Highest Level</h2>
            <h3>
              <span style={{ fontSize: "30px" }}>--</span> in Just{" "}
              <span style={{ fontSize: "30px" }}>--</span>
            </h3>
            <h1
              style={{
                color: "#FFDD7E",
                fontWeight: "bolder",
                fontSize: "50px",
              }}
            >
              ₹ 2999
            </h1>
          </div>
          <div className="grean-career-box-a">
            <h1>Portfolio Management</h1>
            <img src={MP} alt="" />
          </div>
        </div>
      </div>
      <div className="couns">
        <img src={Counsling} alt="" />
      </div>
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default CareerCounselling;
