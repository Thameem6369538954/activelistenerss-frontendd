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
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";

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


   const [formData, setFormData] = useState({
     fullName: "",
     email: "",
     phoneNumber: "",
     country: "",
     state: "",
     support: "0",
     message: "",
     enrollAs: "",
   });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
     const { name, value, type, checked } = e.target;
     const newValue = type === "checkbox" ? checked : value;
     setFormData({
       ...formData,
       [name]: newValue,
     });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     //  console.log(formData,"form data..............................................");

     const formErrors = {};
     if (!formData.enrollAs) {
       formErrors.enrollAs = "Enroll as is required";
     }
     if (!formData.fullName) {
       formErrors.fullName = "Full Name is required";
     }
     if (!formData.email) {
       formErrors.email = "Email is required";
     }
     if (!formData.phoneNumber) {
       formErrors.phoneNumber = "Phone Number is required";
     }
     if (!formData.country) {
       formErrors.country = "Country is required";
     }
     if (!formData.state) {
       formErrors.state = "State is required";
     }
     if (!formData.message) {
       formErrors.message = "Message is required";
     }

     if (Object.keys(formErrors).length > 0) {
       setErrors(formErrors);
       return;
     }

     try {
       const response = await axios.post("/getintouch_griefSupport", formData);
       console.log(response);
       if (response && response.data.message) {
         if (
           response.data.message ===
           "succesfully submitted the form!we will get in touch as soon as possible!"
         ) {
           toast.success("Your Form submited successfully !!");
           setFormData({
             fullName: "",
             email: "",
             phoneNumber: "",
             country: "",
             state: "",
             support: "0",
             message: "",
             enrollAs: "",
           });
         }
       }
     } catch {
       console.log("Error in form submission");
     }
     //  }else{
     //   //if error
     //   toast.error("please input valid datas!!")
     //  }
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
              <form onSubmit={handleSubmit}>
                <div className="form-group-radio">
                  <label>Enroll as:</label>
                  <div className="radio-buttons-container">
                    <div className="radio-button">
                      <input
                        name="enrollAs"
                        id="radio2"
                        className="radio-button__input"
                        type="radio"
                        value="Parent"
                        checked={formData.enrollAs === "Parent"}
                        onChange={handleChange}
                      />
                      {errors.enrollAs && (
                        <p className="error">{errors.enrollAs}</p>
                      )}
                      <label htmlFor="radio2" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Parent
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        name="enrollAs"
                        id="radio1"
                        className="radio-button__input"
                        type="radio"
                        value="Carer"
                        checked={formData.enrollAs === "Carer"}
                        onChange={handleChange}
                      />
                      <label htmlFor="radio1" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Carer
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        name="enrollAs"
                        id="radio3"
                        className="radio-button__input"
                        type="radio"
                        value="Mentor/ Educator"
                        checked={formData.enrollAs === "Mentor/ Educator"}
                        onChange={handleChange}
                      />
                      <label htmlFor="radio3" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Mentor/ Educator
                      </label>
                    </div>
                  </div>
                  {errors.enrollAs && (
                    <span className="error">{errors.enrollAs}</span>
                  )}
                </div>
                <div className="form-group-grief">
                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        {" "}
                        <label htmlFor="fullName">Full Name</label>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                        {errors.fullName && (
                          <span className="error">{errors.fullName}</span>
                        )}
                      </li>
                    </ul>
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        <label htmlFor="email">Email</label>
                      </li>
                      <li>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        <label htmlFor="phoneNumber">Phone Number</label>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>

                    {errors.phoneNumber && (
                      <span className="error">{errors.phoneNumber}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        <label htmlFor="country">Country</label>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>

                    {errors.country && (
                      <span className="error">{errors.country}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        {" "}
                        <label htmlFor="state">State</label>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>

                    {errors.state && (
                      <span className="error">{errors.state}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        <label htmlFor="support">Support in</label>
                      </li>
                      <li>
                        {" "}
                        <select
                          id="support"
                          name="support"
                          value={formData.support}
                          onChange={handleChange}
                        >
                          <option value="0">Select Support:</option>
                          <option value="Mobile Addiction">
                            Mobile Addiction
                          </option>
                          <option value="Gaming Addiction">
                            Gaming Addiction
                          </option>
                          <option value="Social Media Addiction">
                            Social Media Addiction
                          </option>
                          <option value="Entertainment and performance Addiction">
                            Entertainment and performance Addiction
                          </option>
                          <option value="Others">Others</option>
                        </select>
                      </li>
                    </ul>

                    {errors.support && (
                      <span className="error">{errors.support}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <ul className="form-ul-grif">
                      <li>
                        {" "}
                        <label htmlFor="message">Message</label>
                      </li>
                      <li>
                        {" "}
                        <input
                          type="text"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>

                    {errors.message && (
                      <span className="error">{errors.message}</span>
                    )}
                  </div>
                </div>
                <div className="grif-submit-btn">
                  <button type="submit">Submit</button>
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
