import React, { useState } from "react";
import "../Css/Senses.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import { TiArrowRightThick } from "react-icons/ti";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Nool from "../Images/Nool.png";
import Coc from "../Images/Coc.png";
import Gitarakka from "../Images/Gitarakka.png";
import spa from "../Images/spa.png";
import Children from "../Images/Childern.png";
import Menbulb from "../Images/Menbulb.png";
import GetinTouch from "../Components/GetinTouch";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Breadcrumps from "../Components/Breadcrumps";
import { toast } from "react-toastify";

const Senses = () => {
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const appointmentSubmit = (e) => {
    e.preventDefault();
    setWantComplimentaryCall(true);
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    // setCloseClick(true);
  };

  return (
    <div>
      <Navbar />
      <div className="secnses-main-con">
        <Breadcrumps />
        <div className="therapy-heading">
          <p>Therapy for you!</p>
          <h1>Senses</h1>
          <h2>Resurrection</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          {wantComplimentaryCall ? (
            <>
              <span className="close-calendly" onClick={handleClose}>
                <AiOutlineCloseCircle className="senestop-icon" />
              </span>

              <InlineWidget
                url="https://calendly.com/teammentoons/active-listeners"
                className="calendly-embed"
              />
            </>
          ) : (
            <></>
          )}

          {wantComplimentaryCall ? (
            <></>
          ) : (
            <div className="tele-buttons">
              <button onClick={appointmentSubmit}>Get Appointment</button>
              <p>Book Your Complimentary 15-min Call</p>
              <TiArrowRightThick
                onClick={appointmentSubmit}
                className="arrow-for-tele"
              />
            </div>
          )}
        </div>
        <div className="green-bourd-grief">
          <div className="card-grif">
            <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div className="card-inner">
              <div>
                <h1>Senses</h1>
                <p>Resurrection</p>
              </div>

              <img src={Kadhoolu} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Therapies in senses Resurrecction</p>
          <h1> Reviving your</h1>
          <h2>Senses</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <span>
            We believe that early age gadget exposure adaption to mobile among
            Children has now led to a time where there is decrease in learning
          </span>
        </div>
        <div className="senses-category-cards">
          <div className="senses-card">
            <h1>Body Essential Salts & Oils</h1>
            <img src={Nool} alt="" />
          </div>

          <div className="senses-card">
            <h1>Music & Art</h1>
            <img src={Gitarakka} alt="" />
          </div>

          <div className="senses-card">
            <h1>Mandala Art Books</h1>
            <img src={Children} alt="" />
          </div>

          <div className="senses-card">
            <h1>brain-boosting diets</h1>
            <img src={Menbulb} alt="" />
          </div>

          <div className="senses-card">
            <h1>Flavour Exploration</h1>
            <img src={Coc} alt="" />
          </div>

          <div className="senses-card">
            <h1>DIY activities</h1>
            <img src={spa} alt="" />
          </div>
        </div>
      </div>

      {wantComplimentaryCall ? (
        <>
          <span className="close-calendly" onClick={handleClose}>
            <AiOutlineCloseCircle className="senesbottom-icon" />
          </span>

          <InlineWidget
            url="https://calendly.com/teammentoons/active-listeners"
            className="calendly-embed"
          />
        </>
      ) : (
        <></>
      )}

      {wantComplimentaryCall ? (
        <></>
      ) : (
        <button className="get-support" onClick={appointmentSubmit}>
          Get Support
        </button>
      )}

      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Senses;
