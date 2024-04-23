import React, { useState } from "react";
import "../Css/TeamPage.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import mahesh from "../Images/mahesh.jpeg";
import anam from "../Images/anam.jpeg";
import joice from "../Images/joice.jpeg";
import ajay from "../Images/ajay.jpeg";
import aleeshya from "../Images/aleeshya.jpeg";
import dhanashekar from "../Images/dhanashekar.jpeg";
import dhinesh from "../Images/dhinesh.jpeg";
import harris from "../Images/harris.jpeg";
import shankar from "../Images/shankar.jpeg";
import Thameem from "../Images/Thameem.jpg";
import MoAddiction from "../Images/MoAddiction.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Psyco from "../Images/Psyco.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Components/Footer";
import Breadcrumps from "../Components/Breadcrumps";


const TeamPage = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
    },
    {
      id: 2,
      name: "Anam Fatima",
      position: "Senior Content Writer",
      image: anam,
    },
    {
      id: 3,
      name: "Joice Lincy",
      position: "Digital Marketing specialist",
      image: joice,
    },

    {
      id: 7,
      name: "Dhinesh",
      position: "Graphic Designer",
      image: dhinesh,
    },
    {
      id: 6,
      name: "Dhanasekar",
      position: "Sketch Artist",
      image: dhanashekar,
    },
    {
      id: 4,
      name: "Ajay",
      position: "Video Editor",
      image: ajay,
    },
    {
      id: 5,
      name: "Aleeshya krishna",
      position: "Backend Developer",
      image: aleeshya,
    },
    {
      id: 8,
      name: "Harris",
      position: "UI/UX Designer",
      image: harris,
    },
    {
      id: 9,
      name: "Sankar",
      position: "Illustrator",
      image: shankar,
    },
    {
      id: 10,
      name: "Thameem Ansari",
      position: "Frontend Developer",
      image: Thameem,
    },
  ]);
  const psycologiest = [
    {
      id: 1,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 2,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 3,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 4,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 5,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
    {
      id: 6,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
      dis: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    },
  ];
  return (
    <div>
      <Navbar />
      <Breadcrumps />
      {/* taempage-header */}
      <div className="teampage-main-container">
        <div className="therapy-heading">
          <p>Who we are</p>
          <h1>meet the Team Of</h1>
          <h2>Active Listening</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <div className="teampage-intro">
            <img src={ElementB} alt="" />
            <span>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </span>
          </div>
        </div>

        {/* meet-our-psycologist */}

        {/* TeamGreen-card-container */}

        <div className="mobile-addiction-box-green">
          <img
            src={Roundb}
            style={{
              marginTop: "-40%",
              marginLeft: "-10%",
              zIndex: "-1",
              width: "20%",
            }}
            alt=""
          />

          <div className="inside-mobile-addiction-txt">
            <img
              src={mahesh}
              style={{
                width: "40%",
              }}
              alt=""
            />
            <div className="mobile-addiction-txt-inside">
              <span style={{ color: "#CD4631", fontSize: "20px" }}>
                Founder
              </span>
              <h1>Mentor Mahesh</h1>
              <hr></hr>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </p>
              <button>Get in Touch</button>
            </div>
          </div>
          <img
            src={Rounda}
            style={{
              marginRight: "-17%",
              marginTop: "35%",
              width: "30%",
              zIndex: "-1",
            }}
            alt=""
          />
        </div>

        <div className="therapy-heading">
          <p>Psycologist Team</p>
          <h1>Meet our Phycologist</h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <div className="teampage-intro">
            {/* <img src={ElementB} alt="" /> */}
            <span>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </span>
          </div>
        </div>

        <div className="team-psycologiest-box-conatiner">
          {psycologiest.map((items) => (
            <div>
              <div className="team-psycologiest-box" key={items.id}>
                <img src={Psyco} alt="" />
                <div className="psycologiest-box-inside">
                  <span style={{ color: "#256C55" }}>{items.position}</span>
                  <h1>{items.name}</h1>
                  <p>{items.dis}</p>
                  <hr></hr>
                  <div className="follow-box">
                    <p>Follow me :</p>
                    <div className="follw-icons">
                      <FaWhatsapp />
                      <FaInstagram />
                      <PiFacebookLogoBold />
                      <FaXTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="therapy-heading">
        <p>Psycolgits Team</p>
        <h1>Meet our Project</h1>
        <h2>Team</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
        <div className="teampage-intro">
          {/* <img src={ElementB} alt="" /> */}
          <span>
            Transformative support for those seeking clarity and understanding
            through active listening.
          </span>
        </div>
      </div>

      {/* team-caro */}
      <div className="team-caro-display">
        <div className="goal-box-container-hole">
          <Slider {...settings}>
            {employees.map((employee) => (
              <div>
                <div className="Team-box-container" key={employee.id}>
                  <img src={employee.image} alt="" />
                  <div className="positon-name-team">
                    <h1>{employee.name}</h1>
                    <p>{employee.position}</p>
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
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default TeamPage;
