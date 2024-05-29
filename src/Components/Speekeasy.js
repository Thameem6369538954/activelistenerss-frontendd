import React, { useState,useEffect } from "react";
import "../Css/Speekeasy.css";
import Greenbg from "../Images/Greenbg.png";
import { TiArrowRightThick } from "react-icons/ti";
import Yellowline from "../Images/Yellowline.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";


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


  const [rows, setRows] = useState("");
    // console.log(rows, "ppppppppppppppppppppppppppppppp");

   

    useEffect(() => {
       const fetch = async () => {
        try {
          const response = await axios.get("admin/get_allVideos");
          console.log(response, "ppppppppppppppppppppppppppppppp");
            
          if (response) {
            // const videoData = response.data.reslt[3].source; // Retrieve the video data
            // Now you can use videoData to set the state or display the video
            console.log(response.data.reslt[4].source, "pppppppppiiiippppppppiiiiiiiiipppppppppppppp");// // Log the second object in the response
            // const vidData = response.data.reslt[4].source;
            setRows(response.data.reslt[4].source);
            console.log(rows,"this is rowwwss aftr setting useState......")
          } else {
            toast.error("something went wrong!!");
          }
        } catch (error) {
          console.log(error);
        }
       };
     fetch();
    },[]);

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
            {rows && (
              <video
                controls // Ensure controls are enabled for user interaction
                className="early-age-video"
                // onClick={togglePlay}
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
              >
                <source src={rows} type="video/mp4" />{" "}
                {/* Make sure src and type are correctly set */}
                Your browser does not support the video tag.
              </video>
            )}
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
