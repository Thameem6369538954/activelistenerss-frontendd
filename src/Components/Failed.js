import React from 'react'
import '../Css/Field.css'
import Greeting from "../Images/Greeting.png";

import Lottie from "lottie-react";
import Faileds from "../Anime/Faileds.json";
import Breadcrumps from "./Breadcrumps";
import EllipseGreen from "../Images/EllipseGreen.png";
import EllipseRed from "../Images/EllipseRed.png";

const Failed = () => {
  return (
    <div>
      <div className="Success-main-container">
        <div className="greeting">
          <Lottie animationData={Faileds} className="lottie-field" />
          <h1>Sorry Your Payment was Unsuccessful  !</h1>
          <div className="Failed">
            {/* <Lottie animationData={Failed} /> */}
          </div>

          <p>Please Try Again</p>
        </div>
        <img src={EllipseGreen} alt="EllipseGreen" />
        <img src={EllipseRed} alt="EllipseRed" />
      </div>
    </div>
  );
};

export default Failed