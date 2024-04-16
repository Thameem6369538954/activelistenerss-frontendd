import React, { useState } from "react";
import "../Css/Corediscover.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hdrleft from "../Images/Hdrleft.png";
import Hdrright from "../Images/Hdrright.png";
import Yellowline from "../Images/Yellowline.png";
import Elements from "../Images/Elements.png";
import emoji from "../Images/emoji.png";
import Arrow from "../Images/Arrow.png";
import { TiArrowRightThick } from "react-icons/ti";
import Maskgroup from "../Images/Maskgroup.png";
import Net from "../Images/Net.png";
import Social from "../SmallElements/Social.png";
import GadgetsAddicted from "../SmallElements/GadgetsAddicted.png";
import PreppersImage from "../Images/PreppersImage.png";
// import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import Greanline from "../Images/Greenline.png";
import SpeekAKka from "../Images/SpeekAKka.png";
import Gitarsis from "../Images/Gitarsis.png";
import DocCons from "../Images/DocCons.png";
import Navarrow from "../Images/Navarrow.png";
import GreenBulb from "../SmallElements/GreenBulb.png";
import Scale from "../SmallElements/Scale.png";
import House from "../SmallElements/House.png";
import Testbg from "../SmallElements/Testbg.png";
import chare from "../SmallElements/chare.png";
import MM from "../SmallElements/MM.png";
import MG from "../SmallElements/MG.png";
import THands from "../Images/THands.png";
import PreppersRed from "../Images/PreppersRed.png";
import PodacstwithDif from "../Images/PodacstwithDif.png";

const Corediscover = () => {
  return (
    <div>
      <Navbar />
      <div className="dicover-header-container">
        {/* <img
          src={Hdrleft}
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        /> */}
        <div className="discover-hdr-text">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Core Discoveries
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="2000">
            Our Core
          </h2>
          <h3 data-aos="fade-up" data-aos-duration="3000">
            Discoveries
          </h3>
          <img src={Yellowline} className="Yellowline" alt="" />
          <p>
            At Active Listeners, we have created a grief support group to extend
            our services to the needy you can join our grief support group and
            share your story with u. If you are addict of any of the given below
            .
          </p>
          <div className="dicover-top-btns">
            {/* <div className="dicover-buttons">
              <button>Get Appointment</button>
              <p>Book Your Complimentary 15-min Call</p>
              <TiArrowRightThick className="discover-arrow-for-tele" />
            </div> */}
          </div>
        </div>
        <img src={Elements} alt="" />
        <img
          src={Hdrright}
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        />
      </div>
      {/* <div className="discover-box-hole">
        <div className="discover-box-container">
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Cell Phone Addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Social media addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Gaming Addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
        </div>
        <button>Get Support</button>
      </div> */}
      <div className="discover-two-box-main">
        <div className="discover-tow-box">
          <div>
            <h1>Are you addicted to your Phone</h1>
            <img src={Arrow} style={{ marginTop: 60 }} alt="" />
          </div>
          <div>
            <img src={Social} alt="" />
          </div>
        </div>
        <div className="discover-tow-box">
          <div>
            <h1>Impact of Gadgets</h1>
            <img src={Arrow} style={{ marginTop: 26, width: "40%" }} alt="" />
          </div>
          <div>
            <img src={GadgetsAddicted} alt="" />
          </div>
        </div>
      </div>
      <div className="therapy-heading">
        <p>How we help</p>
        <h1>Let’s help you </h1>
        <h2>Open up</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
      </div>
      <div className="through-therapies-container">
        <ul className="through-therapies">
          <li>
            <img src={GreenBulb} alt="" />
            <h1>Mobile Addiction</h1>
            <p>
              Propel your loved ones toward academic and personal success with
              sharpened focus and engagement.
            </p>
          </li>
          <li>
            <img src={Scale} alt="" />
            <h1>Gaming Addiction</h1>
            <p>
              Strike the perfect balance with technology, ensuring it enriches
              rather than detracts from your family's life.
            </p>
          </li>
          <li>
            <img src={House} alt="" />
            <h1>Social Media Addiction</h1>
            <p>
              Empower every individual to explore their interests, overcome
              challenges, and achieve their goals.
            </p>
          </li>
          <li>
            <img src={THands} alt="" />
            <h1>Entertainment & Performance Addiction</h1>
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
      <div className="calandi-box-container">
        <div className="calandi-box">
          <div className="card-a">
            <div className="content">
              <div className="front">
                <h3 className="title">Depression Test</h3>
                <button>Take Test</button>
                <img src={chare} alt="" />
                <img src={Testbg} alt="" />
              </div>

              <div className="back">
                <p className="description">
                  Get Access to our 15 Minutes Complimentary Call
                </p>
                <button>Schedule a Call</button>
                <img src={SpeekAKka} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* box-2 */}
        <div className="calandi-box">
          <div className="card-a">
            <div className="content">
              <div className="front">
                <h3 className="title">Depression Test</h3>
                <button>Take Test</button>
                <img src={chare} alt="" />
                <img src={Testbg} alt="" />
              </div>

              <div className="back">
                <p className="description">
                  Get Access to our 15 Minutes Complimentary Call
                </p>
                <button>Schedule a Call</button>
                <img src={SpeekAKka} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* box-3 */}
        <div className="calandi-box">
          <div className="card-a">
            <div className="content">
              <div className="front">
                <h3 className="title">Depression Test</h3>
                <button>Take Test</button>
                <img src={chare} alt="" />
                <img src={Testbg} alt="" />
              </div>

              <div className="back">
                <p className="description">
                  Get Access to our 15 Minutes Complimentary Call
                </p>
                <button>Schedule a Call</button>
                <img src={SpeekAKka} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="therapy-heading">
        <p>Connect with us</p>
        <h1>Egange with </h1>
        <h2>Active Listeners</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
      </div>
      <div className="enagewith-conatiner">
        <div className="enage-box">
          <h2>Monthly Meets</h2>
          <img src={MM} alt="" />
        </div>
        <div className="enage-box">
          <h2>Meetup group</h2>
          <img src={MG} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Corediscover;
