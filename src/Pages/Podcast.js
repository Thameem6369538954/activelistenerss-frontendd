import React from "react";
import "../Css/Podcast.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import cover from "../Images/cover.png";
import emoji from "../Images/emoji.png";
import { FaPlay } from "react-icons/fa";
import PodcastProductlist from "../Components/PodcastProductlist";

import Breadcrumps from "../Components/Breadcrumps";

const Podcast = () => {
  return (
    <div>
      <Navbar />

      <Breadcrumps />
      <div className="podcast-main">
        {/* <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Podcasts To refresh your</h1>
          <h2>Mind</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div> */}

        <div className="green-bourd-grief">
          <div className="card-grif">
            {/* <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div>
            <div className="card-hole">
              <div className="podcast-card-inner">
                <img
                  src={cover}
                  style={{ width: "30%", margin: 40, borderRadius: 20 }}
                  alt=""
                />
                <div className="podcast-text">
                  <span>FEATURED EPISODE</span>
                  <h1>Listening: the ultimate healer </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud.
                  </p>
                  <div className="user-name">
                    <img src={emoji} alt="" />
                    <p>Hosted By:Thameem</p>
                  </div>
                  <div className="user-name-audio">
                    <button>SUBSCRIBE</button>
                    <p>
                      <FaPlay style={{ marginRight: 13 }} />
                      LISTEN NOW (46 min)
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="therapy-heading">
              <p>Our</p>
              <h1>Latest Episodes</h1>
              <h2>podcast......</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
          </div>
        </div>
      </div>
      <PodcastProductlist />
      <Footer />
    </div>
  );
};

export default Podcast;
