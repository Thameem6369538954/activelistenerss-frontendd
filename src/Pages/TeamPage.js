import React, { useState,useEffect } from "react";
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
import axios from "../Utils/Baseurl";

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
  const [employees, setemployees] = useState([ ]);


  
  const [psychologist, setPsychologist] = useState([]);
  
  useEffect(() => {
    const getPsychologist = async () => {
      try {
        const response = await axios.get("admin/view_psychologyst");
        console.log(response.data.psychos, "allpsychoooooooos here");
        setPsychologist(response.data.psychos);
      } catch (error) {
        console.log(error);
      }
    };
    getPsychologist();



    const getEmployees = async () => {
      try {
        const response = await axios.get("admin/get_all_members");
        setemployees(response.data.members.allMembers);
      } catch (error) {
        console.log(error);
      }
    }
    getEmployees();
  }, []);



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
        <div className="team-psychologist-box-conatiner-main">
        <div className="team-psychologist-box-conatiner">
          {psychologist.map((items) => (
            <div>
              <div className="team-psychologist-box" key={items.id}>
                <img src={items.image} alt="" />
                <div className="psychologist-box-inside">
                  <span style={{ color: "#256C55" }}>Psychologist</span>
                  <h1>{items.name}</h1>
                  <p>{items.email}</p>
                  <p>{items.mobile}</p>
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
                <div className="Team-box-container" key={employee._id}>
                  <img src={employee.image} alt="" />
                  {/* <video width="640" height="360" controls>
                    <source src={employee.audio} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}

                  <div className="positon-name-team">
                    <h1>{employee.name}</h1>
                    <p>{employee.designation}</p>
                    <p>{employee.socialmediaLink}</p>
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
