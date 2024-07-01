import React,{useState} from 'react'
import "../Css/upcoming.css"
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UpcomingUbdates = () => {
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
      <div className="upcoming-ideas">
        <h1>Upcoming Events</h1>
        <div className="upcoming-events">
          <h1>Join Our Exciting Workshops and Sessions</h1>
          <div className="upcoming-events-categories">
            <div className="kids">
              <p>
                <span
                  style={{
                    fontWeight: "900",
                    color: "black",
                    fontSize: "25px",
                  }}
                >
                  Kids Creative Play Date :
                </span>{" "}
                August 15, 2024 - A day filled with fun, games, and creativity
                designed to boost confidence and social skills in children.
              </p>
            </div>
            <div className="adults-family">
              <p>
                <span
                  style={{
                    fontWeight: "900",
                    color: "black",
                    fontSize: "25px",
                  }}
                >
                  Family Therapy Workshop :{" "}
                </span>
                August 15, 2024- A workshop for families looking to enhance
                their communication and resolve conflicts through guided
                activities.
              </p>
            </div>
          </div>
          <div className="up-btn">
            {wantComplimentaryCall ? (
              <>
            <span className="up" onClick={handleClose}>
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
              <div>
                <button onClick={appointmentSubmit}>Register Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingUbdates