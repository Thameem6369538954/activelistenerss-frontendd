import React, { useContext } from "react";
import "../Css/Hiring.css";
import Navbar from "../Components/Navbar";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import MoAddiction from "../Images/MoAddiction.png";
import Doc from "../Images/Doc.png";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

const Hiring = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <div className="Hiring-main">
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Join our Amazing</h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h4>
            <img src={Downarrow} className="down-arrow" alt="" /> Transformative
            support for those seeking clarity and understanding through active
            listening.
          </h4>
        </div>

        <div className="grean-box-mobile-addiction">
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
              <h1>Are you Addicted to the Mobile phone?</h1>
              <img
                src={MoAddiction}
                style={{
                  width: "60%",
                }}
                alt=""
              />
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
            <p>Our team</p>
            <h1>Job Openings </h1>
            <h2>For you</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <div className="hiring-boxes">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Psychologist</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <p className="title">Apply Now</p>
                  <NavLink
                    onClick={scrollToTop}
                    to="/HiringForm/Psychologist"
                    className="Links"
                  >
                    <button>Apply Now</button>
                  </NavLink>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Story Teller</p>
                  <p>
                    {" "}
                    We are currently seeking a Storyteller to join our creative
                    team. This individual will be the heart ofour narrative,
                    weaving captivating stories to engage our audience. Your
                    role involves craftingcompelling content for various
                    platforms, evoking emotions, and conveying messages
                    effectively.The ideal candidate will have a passion for
                    storytelling, a vivid imagination, and the ability to
                    bringstories to life. Experience in content creation,
                    whether through writing, video, or other mediums, ishighly
                    valued. Join us in creating and sharing stories that leave a
                    lasting impact on our audience.
                  </p>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <p className="title">Apply Now</p>
                  <NavLink
                    onClick={scrollToTop}
                    to="/HiringForm/Story Teller"
                    className="Links"
                  >
                    <button>Apply Now</button>
                  </NavLink>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Actor / Model</p>
                  <p>
                    We are currently seeking an Actor/Model to become the face
                    of our creative projects.This versatileindividual will play
                    a pivotal role in bringing our stories and concepts to life
                    through performanceand visual representation. Your
                    responsibilities will include embodying characters,
                    conveyingemotions, and participating in photoshoots or video
                    productions. The ideal candidate will possessexceptional
                    acting or modeling skills, a strong stage or on-camera
                    presence, and a passion forstorytelling through performance.
                    Join us in showcasing our vision through your talent and
                    charisma,creating a lasting impact on our audience.
                  </p>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <p className="title">Apply Now</p>
                  <NavLink
                    onClick={scrollToTop}
                    to="/HiringForm/Actor and Model"
                    className="Links"
                  >
                    <button>Apply Now</button>
                  </NavLink>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Filmmaker</p>
                  <p>
                    We are currently seeking a Filmmaker to join our creative
                    team. This individual will be responsiblefor bringing our
                    stories to life through the art of film. Your role involves
                    concept development,scriptwriting, directing, and overseeing
                    the production process. The ideal candidate will have
                    astrong passion for filmmaking, a keen eye for visual
                    storytelling, and experience in creatingcompelling cinematic
                    content. Join us in producing films that captivate,
                    entertain, and inspire ouraudience
                  </p>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <p className="title">Apply Now</p>
                  <NavLink
                    onClick={scrollToTop}
                    to="/HiringForm/Filmmaker"
                    className="Links"
                  >
                    <button>Apply Now</button>
                  </NavLink>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Anchor</p>
                  <p>
                    Join Mentoons as an Anchor, where you'll connect with our
                    audience through YouTube videos and social media Your role
                    includes introducing new products and conducting insightful
                    interviews with experts. We seek excellent communication
                    skills, video hosting experience, and a passion for our
                    mission. Familiarity with LinkedIn, Facebook, Instagram, and
                    Pinterest is a plus. We embrace diversity and are proud to
                    be an equal opportunity employer. Ready to make learning fun
                    and easy? Apply now and let's explore potential together!{" "}
                  </p>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <p className="title">Apply Now</p>
                  <NavLink
                    onClick={scrollToTop}
                    to="/HiringForm/Anchor"
                    className="Links"
                  >
                    <button>Apply Now</button>
                  </NavLink>
                  <img
                    src={Doc}
                    style={{ width: "40%", margin: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Hiring;
