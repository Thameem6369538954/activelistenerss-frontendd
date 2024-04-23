import React from "react";
import "../Css/Header.css";
import Hdrleft from "../Images/Hdrleft.png";
import Hdrright from "../Images/Hdrright.png";
import Maskgroup from "../Images/Maskgroup.png";
import Elements from "../Images/Elements.png";
import Arrow from "../Images/Arrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import FrameA from "../Images/FrameA.png";
import FrameB from "../Images/FrameB.png";
const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  return (
    <div className="header-main">
      <div className="yellow-box">
        <ul className="yellow-box-ul" style={{ display: "flex" }}>
          <marquee>
            <div className="main-y-div">
              <div>
                <li>
                  Developed by <span>Psychologists</span>|
                </li>
              </div>
              <div>
                <li>Zero - Medication |</li>
              </div>
              <div>
                <li>Music, Aroma & Mandala Art Therapy |</li>
              </div>
              <div>
                <li>100% Safe for Kids |</li>
              </div>
            </div>

            {/* <li>Zero - Medication |</li>
            <li>  </li>
            <li></li> */}
          </marquee>
        </ul>
      </div>
      <div className="header">
        <div className="header-container">
          <img
            src={Hdrleft}
            
            alt=""
          />
          <div className="hdr-text">
            <h1>
              Helping you{" "}
            </h1>
            <h2>
              Find
            </h2>
            <h3>
              Balance & Focus
            </h3>
          </div>
          {/* <img
            src={Hdrright}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          /> */}
           <iframe
              className="header-top-video"
              src="https://www.youtube.com/embed/xMAQJtqDrK0?si=LzDZLLuGqNJmTpHX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
        <div className="hdr-tx">
          <p>
            At Active Listeners,We believe that early age gadgets exposure,
            Adaptation to mobile among children has now led to time where there
            is decrease in focus and learning
          </p>
        </div>
        <div className="categoreis-haeder">
          <div
            className="categoreis-grid-boxs"
            
          >
            <div>
              <NavLink to="/EarlyagegadgetExposure" className="Links">
                {" "}
                <div onClick={scrollToTop} className="categoreis-grid-box">
                  <span>Ages: 6-12</span>
                  <p>
                    Early age gadget exposure{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
              <NavLink to="/AdaptationtoMobilePhones" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Ages: 13-19</span>
                  <p>
                    Adaptation to mobile{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
            </div>

            <div>
              <NavLink to="/LearningandFocus" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Our Solutions</span>
                  <p>
                    Learning and Focus{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
              <NavLink to="/CurrentTimes" className="Links">
                <div className="categoreis-grid-box" onClick={scrollToTop}>
                  <span>Post Covid</span>
                  <p>
                    Current Times{" "}
                    <img src={Arrow} className="arrow-for-header" alt="" />
                  </p>
                </div>
              </NavLink>
            </div>
          </div>

          <div></div>
        </div>
        <div className="hdr-btm-text">
          <img src={FrameA} alt="" />
          <button>Why Active Listeners?</button>
          <img src={FrameB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
