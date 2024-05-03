import React from "react";
import "../Css/Therapycategories.css";
import Lottie from "lottie-react";
import OneT from "../Anime/OneT.json";
import Talking from "../Anime/Talking.json";
import Yellowline from "../Images/Yellowline.png";
import Gitar from "../Anime/Gitar.json";
import { NavLink } from "react-router-dom";
import Bulb from "../Images/Bulb.png";
import EllipseRed from "../Images/EllipseRed.png";
import EllipseGreen from "../Images/EllipseGreen.png";
const Therapycategories = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="eclip">
        {/* <img src={EllipseRed} alt="" /> */}
      <div className="therapy-cate">
        <div className="bulb">
          <img src={Bulb} alt="" />

          <div className="therapy-heading">
            <p>One Platform, Multiple touchpoints</p>
            <h1>We are here to</h1>
            <h2>Help</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
            {/* <img src={EllipseRed} alt="" /> */}
          </div>
        </div>

        <div className="theropy-box-main">
          <NavLink onClick={scrollToTop} to="/Teletherapy" className="Links">
            <div
              className="therapy-box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <h1>Speak Easy</h1>
              <Lottie animationData={Talking} loop={true} />
            </div>
          </NavLink>
          <NavLink onClick={scrollToTop} to="/Senses" className="Links">
            <div
              className="therapy-box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h1>Senses Resurrection</h1>
              <Lottie animationData={Gitar} loop={true} />
            </div>
          </NavLink>

          <NavLink onClick={scrollToTop} to="/OneOnOne" className="Links">
            <div
              className="therapy-box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <h1>One On One Session</h1>
              <Lottie animationData={OneT} loop={true} />
            </div>
          </NavLink>
        </div>
      </div>
      {/* <img src={EllipseGreen} alt="" /> */}
      </div>
    </div>
  );
};

export default Therapycategories;
