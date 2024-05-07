import React, { useEffect, useRef, useState } from "react";
import "../Css/GoalVision.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Element from "../Images/Elements.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Flag from "../Images/Flag.png";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
import About from "../Images/About.png";
import Think from "../Images/Think.svg";
import Bulb from "../Images/Bulb.png";
import { GrNext, GrPrevious } from "react-icons/gr";
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
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import GetinTouch from "../Components/GetinTouch";
import Breadcrumps from "../Components/Breadcrumps";

const GoalVision = () => {
  const [counter, setCounter] = useState(false);
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
          slidesToScroll: 4,
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
  const employees = [
    {
      id: 1,
      name: "Mahesh",
      position: "Founder of Story Club",
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
      id: 6,
      name: "Dhanasekar",
      position: "Sketch Artist",
      image: dhanashekar,
    },
    {
      id: 7,
      name: "Dhinesh",
      position: "Graphic Designer",
      image: dhinesh,
    },
    {
      id: 8,
      name: "Thameem Ansari",
      position: "Frontend Developer",
      image: Thameem,
    },
    {
      id: 9,
      name: "Sankar",
      position: "Illustrator",
      image: shankar,
    },
    
  ];

  return (
    <div>
      <div className="goalvision">
        <Navbar />
        <Breadcrumps />
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Engage, understand, improve with</h1>
          <h2>Active Listening</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
        <div className="goal-header-text">
          <img src={Element} alt="" />
          <p>
            Transformative support for those seeking clarity and understanding
            through active listening.
          </p>
        </div>
        <div className="goalvision-headrer-box">
          <img src={Roundb} alt="" />
          <div className="goal-box">
            <div className="inside-box">
              <h1>About us</h1>
              {/* <img src={Yellowline} alt="" /> */}
              {/* <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p> */}
            </div>
            <div>
              <img
                src={About}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 100,
                  marginLeft: -250,
                  width: 330,
                }}
                alt=""
              />
            </div>
          </div>
          <div className="goal-box">
            <div className="inside-box">
              <h1>Our Goals</h1>
              {/* <img src={Yellowline} alt="" /> */}
              {/* <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p> */}
            </div>
            <div>
              <img
                src={Flag}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 100,
                  width: 330,
                  marginLeft: -240,
                }}
                alt=""
              />
            </div>
          </div>
          <img src={Rounda} alt="" />
        </div>
        <div className="therapy-heading">
          <p>Our</p>
          <h1> best</h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>

        <div className="goal-box-container-hole">
          <Slider {...settings}>
            {employees.map((employee) => (
              <div>
                <div className="goal-box-container" key={employee.id}>
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
        <div className="gaol-vision-last-box">
          <div className="gv-left">
            <div className="therapy-heading">
              <p>Our team</p>
              <h1>Talk. Listen. Get Motivated by every minute of it. </h1>
              {/* <h2>Focus</h2> */}
              <img src={Yellowline} className="Yellowline" alt="" />
              {/* <button className="gv-btn">Discover How?</button> */}
            </div>
            <div className="bulb-section">
              <div>
                <img src={Think} alt="" />
                <p>
                  Feeling trapped in a cycle of struggle? Whether it's fighting
                  against addiction or confronting any obstacle, know that
                  you're not alone in your journey
                </p>
              </div>
              <img src={Element} alt="" />
              <div>
                <img src={Bulb} alt="" />
                <p>
                  Our dedicated team is here to offer guidance, support, and
                  understanding every step of the way. Together, we'll work
                  towards breaking free from the chains of adversity and finding
                  a path towards healing and growth.
                </p>
              </div>
            </div>
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="goal-box-container-a">
                <div className="goalvision-box">
                  <img src={emoji} alt="" />
                  <br></br> <br></br>
                  {counter && <CountUp start={0} end={76} />}k
                  <p>Community Members</p>
                </div>
                <div className="goalvision-box">
                  <img src={emoji} alt="" />
                  <br></br> <br></br>
                  {counter && <CountUp start={0} end={128} />}k
                  <p>Podcast Subscribers</p>
                </div>
                <div className="goalvision-box">
                  <img src={emoji} alt="" />
                  <br></br> <br></br>
                  {counter && <CountUp start={0} end={59} />}k
                  <p>Daily Listeners</p>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
        {/* form */}
        {/* <div className="potcaste-form">
          <div className="get-form">
            <form>
              <h1>Get in Touch</h1>
              <p>With us</p>
              <div className="form-inputs">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" />
              </div>
              <div className="agree-get">
                <input type="checkbox" />
                <p>
                  By Submitting your details means you agree with Privacy Policy
                  and Term & Conditions
                </p>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div> */}
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default GoalVision;
