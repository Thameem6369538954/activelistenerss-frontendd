import React, { useState } from "react";
import "../Css/Speekeasy.css";
import Greenbg from "../Images/Greenbg.png";
import { TiArrowRightThick } from "react-icons/ti";
import Yellowline from "../Images/Yellowline.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { InlineWidget } from "react-calendly";
const Speekeasy = () => {
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
      <div className="therapy-heading">
        <p>Therapy for you!</p>
        <h1>Speak-Easy Therapy</h1>
        <h2>Session</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
      </div>
      <div className="tele-buttons">
        {wantComplimentaryCall ? (
          <>
            <span className="close-calend" onClick={handleClose}>
              <AiOutlineCloseCircle className="speektop-icon" />
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
      <div className="container-speek">
        <img src={Greenbg} />

        <div className="centered">
          <div className="para">
            <iframe
              className="iframe-for-speekeassy"
              src="https://www.youtube.com/embed/Ndu04N8ZcdE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <p>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speekeasy;
