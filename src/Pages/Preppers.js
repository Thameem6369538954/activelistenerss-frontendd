import React from "react";
import MentoonBenar from "../Images/MentoonBenar.png";
import "../Css/Preppers.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import PreppersImage from "../Images/PreppersImage.png";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import Greanline from "../Images/Greenline.png";
import SpeekAKka from "../Images/SpeekAKka.png";
import Gitarsis from "../Images/Gitarsis.png";
import DocCons from "../Images/DocCons.png";
import Navarrow from "../Images/Navarrow.png";
import GreenBulb from "../SmallElements/GreenBulb.png";
import Scale from "../SmallElements/Scale.png";
import House from "../SmallElements/House.png";
import THands from "../Images/THands.png";
import PreppersRed from "../Images/PreppersRed.png";
import PodacstwithDif from "../Images/PodacstwithDif.png";
const Preppers = () => {
  return (
    <div>
      <Navbar />
      <div className="preppers-main">
        <div className="preppers-header-image">
          <img src={PreppersImage} alt="" />
        </div>
        <div className="therapy-heading">
          <p>One Platform, Multiple touchpoints</p>
          <h1>Preppers Offer Multiple</h1>
          <h2>Therapies</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h4>
            <img src={Downarrow} className="down-arrow" alt="" /> Our sessions
            are not just activities; they are gateways to improved mental
            health,<br></br> heightened focus and a balanced lifestyle for the
            children's, Parents & Carers..
          </h4>
        </div>
        <div className="preppers-yellow-box-container">
          <div className="preppers-box">
            <h2>Speak Easy</h2>
            <img src={Greanline} className="greenline-preppers" alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={SpeekAKka} alt="" />
            </div>
          </div>
          <div className="preppers-box">
            <h2>Senses Resurrection</h2>
            <img src={Greanline} className="greenline-preppers" alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={Gitarsis} alt="" />
            </div>
          </div>
          <div className="preppers-box">
            <h2>One On One Session</h2>
            <img src={Greanline} className="greenline-preppers" alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={DocCons} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Workshops developed and Delivered By Psychologists</p>
          <h1>Learning & Focus </h1>
          <h2>Through Therapies</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
      </div>
      <div className="through-therapies-container">
        <ul className="through-therapies">
          <li>
            <img src={GreenBulb} alt="" />
            <h1>Enhanced Learning and Focus</h1>
            <p>
              Propel your loved ones toward academic and personal success with
              sharpened focus and engagement.
            </p>
          </li>
          <li>
            <img src={Scale} alt="" />
            <h1>Balanced Digital Life</h1>
            <p>
              Strike the perfect balance with technology, ensuring it enriches
              rather than detracts from your family's life.
            </p>
          </li>
          <li>
            <img src={House} alt="" />
            <h1>Personal Growth</h1>
            <p>
              Empower every individual to explore their interests, overcome
              challenges, and achieve their goals.
            </p>
          </li>
          <li>
            <img src={THands} alt="" />
            <h1>Deeper Family Connections</h1>
            <p>
              Build lasting bonds through improved communication and shared
              experiences.
            </p>
          </li>
        </ul>
        <div className="through-therapies-box">
          <img src={PodacstwithDif} alt="" />

          <img src={PreppersRed} alt="" />
          <h3>Podcast with a Difference !</h3>
          <button>Watch Now</button>
        </div>
      </div>
      <div className="mentoonsbaner">
        <img src={MentoonBenar} alt="" />
      </div>
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Preppers;
