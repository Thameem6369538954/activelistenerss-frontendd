import React from 'react'
import Greeting from '../Images/Greeting.png'
import "../Css/Done.css";
import Lottie from 'lottie-react';
import Bush from '../Anime/Bush.json'
import Breadcrumps from './Breadcrumps';
import EllipseGreen from "../Images/EllipseGreen.png"
import EllipseRed from "../Images/EllipseRed.png"

const Success = () => {
  return (
    <div>
        <Breadcrumps />
    
        <div className="Success-main-container">
          
          <div className='greeting'>
          <img src={Greeting} alt="Greeting" />
          <h1>CONGRATULATIONS!</h1>
          <div className="bush">
            <Lottie animationData={Bush} />
          </div>
          <h1>Your Payment was successful </h1>
          <p>Thank you For Subscribing</p>

          </div>
          <img src={EllipseGreen} alt="EllipseGreen" />
          <img src={EllipseRed} alt="EllipseRed" />
        </div>
       
    </div>
  );
}

export default Success