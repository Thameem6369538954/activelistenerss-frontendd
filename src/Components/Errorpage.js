import React from 'react'
import "../Css/Errorpage.css";
import Lottie from 'lottie-react'
import Error from "../Anime/Error.json"
const Errorpage = () => {
  return (
    <div>
      <div className='error'>
        <Lottie animationData={Error} loop={true}  className='lottie-error'/>
        <h1> Sorry This Page was Not Found</h1>
      </div>
    </div>
  );
}

export default Errorpage