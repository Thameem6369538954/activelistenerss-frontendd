import React from "react";
import "../../Katha/InstentKadha/Instant.css";
import Kadha from "../../Katha/InstentKadha/kadhaimage/Kadha.png";
import KadhaAge from "../../Katha/InstentKadha/kadhaimage/KadhaAge.png";
import THands from "../../Images/THands.png";
const InstentKadha = () => {
  return (
    <div>
      <div className="instant-kadha-main">
        <div className="instant-kadha-box">
          <div className="kadha-top-image">
            <img src={Kadha} alt="" />
          </div>
          <div className="kadha-inside-box-hole">
            <div className="age-kadha">
              <img src={KadhaAge} alt="" />
            </div>
            <span>
              Our workshops offer a multitude of benefits. These unique,
              interactive and effective sessions will help you:
            </span>
            <div className="kadha-inside-box-container">
              <div className="kadha-inside-box">
                <img src={THands} alt="" />
                <h1>Ditch the Screens</h1>
                <p>
                  Escape from the addictive cycle of social media, online
                  gaming, and constantly being glued to your cellphone screen.
                </p>
              </div>
              <div className="kadha-inside-box">
                <img src={THands} alt="" />
                <h1>Improve Communication Skills</h1>
                <p>
                  Boost your personal and professional interactions, and build a
                  strong foundation for public speaking.
                </p>
              </div>
              <div className="kadha-inside-box">
                <img src={THands} alt="" />
                <h1>Enhance Creative Thinking</h1>
                <p>
                  Unlock your creative potential, encourage original thinking
                  and nurture your ability to visualize and convey ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstentKadha;
