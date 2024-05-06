import React,{useState} from "react";
import "../Css/GriefSupport.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import emoji from "../Images/emoji.png";
import joystick from "../Images/Joystick.png";
import Handsack from "../Images/Handsack.png";
import Clap from "../Images/Clap.png";
import { TiArrowRightThick } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { InlineWidget } from "react-calendly";
import Breadcrumps from "../Components/Breadcrumps";

const GriefSupport = () => {
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
      <Breadcrumps />
      <div className="grief-main">
        <div className="grief-main-heading">
          <span>Contact us to get help</span>
          <h1>Grief Support</h1>
          <p>Group</p>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h2>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </h2>
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
                <h1>Listening: the ultimate healer </h1>
                <p>With in</p>
              </div>

              <img src={Kadhoolu} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Packages for you! </p>
          <h1>OFFLINE & ONLINE</h1>
          <h2>Weekly Meetup</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>

        <div className="weekly-meetup-box-container">
          <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Loss of Loved Ones/ Relocation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Identity and Gender crisis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Substance abuse</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          {/* <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div> */}
          <div className="weeekly-meetup-box">
            <img src={joystick} alt="" />
            <h2>Gaming/ Social Media/ Mobile Addicts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={Handsack} alt="" />

            <h2>Elderly Support Group</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
        </div>
        {wantComplimentaryCall ? (
          <>
            <span className="close-calend" onClick={handleClose}>
              <AiOutlineCloseCircle className="gs-icon" />
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
            <button onClick={appointmentSubmit}>Get Support</button>
            <p>or Call us on +91 90360 33300</p>
            <TiArrowRightThick
              onClick={appointmentSubmit}
              className="arrow-for-tele"
            />
          </div>
        )}
        <div className="grief-suppot-form">
          <h1>Enroll Now in </h1>
          <h2>Grief Support Group</h2>
          <div className="grif-form-inputs">
            <div className="container-form">
              <form action="submit">
                <div className="form first">
                  <div className="details personal">
                    <div className="fields">
                      <div className="radio-buttons-container">
                        <div className="radio-button">
                          <label>Enroll as: </label>
                          <input
                            name="radio-group"
                            id="radio2"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio2" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Parent
                          </label>
                        </div>
                        <div className="radio-button">
                          <input
                            name="radio-group"
                            id="radio1"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio1" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Carer
                          </label>
                        </div>
                        <div className="radio-button">
                          <input
                            name="radio-group"
                            id="radio3"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio3" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Mentor/ Educator
                          </label>
                        </div>
                      </div>
                      <div className="input-field">
                        <label>Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          id="email"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Country </label>
                        <input
                          type="text"
                          placeholder="Enter Your Country "
                          required
                        />
                      </div>
                      <div className="input-field">
                        <label>State</label>
                        <input
                          type="text"
                          placeholder="Enter Your state"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <label>Support in</label>
                        <div className="custom-select">
                          <select>
                            <option value="0">Select Support:</option>
                            <option value="1">
                              Family, Relationships & Divorce
                            </option>
                            <option value="2">
                              Loss of Loved Ones/ Relocation
                            </option>
                            <option value="3">
                              Identity and Gender crisis
                            </option>
                            <option value="4">Substance abuse</option>                          
                          </select>
                        </div>
                      </div>

                      <div className="input-field">
                        <label>Message</label>
                        <input
                          type="text"
                          placeholder="Enter your Message"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="agree-get">
                  {/* <input type="checkbox" />
                  <p>
                    By Submitting your details means you agree with Privacy
                    Policy and Term & Conditions
                  </p> */}
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
          {/* <form></form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GriefSupport;
