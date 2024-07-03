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
import Senses from "../Images/Senses.png";
import Speakeasy from "../Images/Speakeasy.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kadhoolu from "../Images/Kadhoolu.png";

const Therapycategories = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
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
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
            <NavLink onClick={scrollToTop} to="/Speak_easy" className="Links">
              <div
                className="therapy-box"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <h1>Speak Easy</h1>
                {/* <Lottie animationData={Talking} loop={true} /> */}
                <img src={Speakeasy} alt="" />
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
                <img src={Senses} alt="" />
                {/* <Lottie animationData={Gitar} loop={true} /> */}
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
                {/* <Lottie animationData={OneT} loop={true} /> */}
                <img src={Kadhoolu} alt="" />
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
