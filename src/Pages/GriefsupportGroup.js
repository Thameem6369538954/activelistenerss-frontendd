import React, { useEffect, useRef, useState } from "react";
import "../Css/GriefsupportGroup.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import SmallElements from "../Images/SmallElements.png";
import Grief from "../Images/Grief.png";
import Navarrow from "../Images/Navarrow.png";
import Elements from "../Images/Elements.png";
import THands from "../Images/THands.png";
import PinkHand from "../SmallElements/PinkHand.png";
import GreenBulb from "../SmallElements/GreenBulb.png";
import House from "../SmallElements/House.png";
import Scale from "../SmallElements/Scale.png";
import Brine from "../SmallElements/Brine.png";
import Think from "../Images/Think.svg";
import Reg from "../Images/Reg.png";
import Psyco from "../Images/Psyco.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { InlineWidget } from "react-calendly";
import Breadcrumps from "../Components/Breadcrumps";
import { Header } from "antd/es/layout/layout";
import axios from "../Utils/Baseurl.js";
import "react-toastify/dist/ReactToastify.css";

const GriefsupportGroup = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [day, setDay] = useState("00");
  const [hours, setHours] = useState("00");
  const [minute, setMinute] = useState("00");
  const [sec, setSec] = useState("00");

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 16, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setDay(days.toString().padStart(2, "0"));
        setHours(hours.toString().padStart(2, "0"));
        setMinute(minutes.toString().padStart(2, "0"));
        setSec(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  //   carsel

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // carosel

  const employees = [
    {
      id: 1,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 2,
      name: "Anam Fatima",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 3,
      name: "Joice Lincy",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 4,
      name: "Ajay",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 5,
      name: "Aleeshya krishna",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 6,
      name: "Dhanasekar",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 7,
      name: "Dhinesh",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 8,
      name: "Harris",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 9,
      name: "Sankar",
      position: "Psychologist",
      image: Psyco,
    },
  ];

  
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const appointmentSubmit = (e) => {
    e.preventDefault();
    setWantComplimentaryCall(true);
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    // setCloseClick(true);
  };



      // VALIDATION FUNCTION  .....................................................................
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

        const formErrors ={};
        if(!formData.enrollAs){
          formErrors.enrollAs = "Enroll as is required";
        }
        if(!formData.fullName){
          formErrors.fullName = "Full Name is required";
        }
        if(!formData.email){
          formErrors.email = "Email is required";
        }
        if(!formData.phoneNumber){
          formErrors.phoneNumber = "Phone Number is required";
        }
        if(!formData.country){
          formErrors.country = "Country is required";
        }
        if(!formData.state){
          formErrors.state = "State is required";
        }
        if(!formData.message){
          formErrors.message = "Message is required";
        }


        if(Object.keys(formErrors).length > 0){
          setErrors(formErrors);
          return;
        }


         try {
           const response = await axios.post(
             "/getintouch_griefSupport",
             formData
           );
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
               })
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
      {/* header */}
      <div className="gs-header-main">
        <div className="gs-header">
          <div className="gs-header-text">
            <div className="gs-header-text-main">
              <div className="gs-header-inner-text">
                <p>
                  Contact us to get help <img src={SmallElements} alt="" />
                </p>
                <h1>Grief Support</h1>
                <h2>Group</h2>
                <h5>
                  In the heart of Bengalooru city, there's a unique gathering
                  called "Let's Revive" that brings people together to celebrate
                  and bring back ancient values, especially the respect for
                  elders. Our group meets regularly in the local community
                  center, where members of all ages share stories, learn from
                  each other, and engage activities that highlight the wisdom
                  and traditions of the past. Through discussions, workshops,
                  and cultural events, "Let's Revive" fosters a sense of
                  community and connection, reminding everyone of the importance
                  of honoring those who have paved the way for us. It's a
                  wonderful opportunity for people to connect with their roots,
                  learn valuable lessons from the elderly, and ensure that these
                  age-old values continue to enrich our lives today..
                </h5>
              </div>

              <img src={Grief} alt="" />
            </div>
            <div className="button">
              <div className="center">
                {wantComplimentaryCall ? (
                  <>
                    <span className="close-calendly" onClick={handleClose}>
                      <AiOutlineCloseCircle className="grif-icon" />
                    </span>

                    <InlineWidget
                      url="https://calendly.com/teammentoons/active-listeners"
                      className="embed"
                    />
                  </>
                ) : (
                  <></>
                )}

                {wantComplimentaryCall ? (
                  <></>
                ) : (
                  <button className="get-support" onClick={appointmentSubmit}>
                    Get Support
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grif-btn"></div>
      {/* Green-box */}
      <div className="gsg-green-bar">
        <div className="gsg-box">
          <h1>April 16th, 2024</h1>
          <div className="black-round">
            <h3>Get Grief Support on</h3>
          </div>
          <h1>At 15:00 pm</h1>
        </div>
      </div>
      {/* Timer-box */}
      <div className="Time-box-container">
        <div className="time-box">
          <h1>{day}</h1>
          <p>Days</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{hours}</h1>
          <p>Hours</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{minute}</h1>
          <p>Min</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{sec}</h1>
          <p>Sec</p>
        </div>
      </div>
      {/* color-boxes */}
      <div className="color-box-main-container">
        <div className="div-color-a">
          <img src={THands} alt="" />
          <h1>How to bring the Self Confidence back</h1>
          <p>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </p>
        </div>
        <div className="div-color-b">
          <img src={THands} alt="" />
          <h1>Tips to Get your deaddicted to social media</h1>
          <p>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </p>
        </div>
        <div className="div-color-c">
          <img src={THands} alt="" />
          <h1>Maintain you work life Balance</h1>
          <p>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </p>
        </div>
        <div className="div-color-d">
          <img src={THands} alt="" />
          <h1>How to bring the Self Confidence back</h1>
          <p>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </p>
        </div>
      </div>
      {/* from-this-form */}
      <div className="benefit-boxes-main">
        <div className="therapy-heading">
          <p>Meetup groups developed and Delivered By Psychologists</p>
          <h1>What you will gain</h1>
          <h2>From this meetup</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
        <div className="benifit-main">
          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={THands} alt="" />
              </li>
              <li>
                {" "}
                <h2>Deeper Family Connections</h2>
              </li>
              <li>
                {" "}
                <p>
                  Build lasting bonds through improved communication and shared
                  experiences.
                </p>
              </li>
            </ul>
          </div>

          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={GreenBulb} alt="" />
              </li>
              <li>
                {" "}
                <h2>Enhanced Learning and Focus</h2>
              </li>
              <li>
                {" "}
                <p>
                  Propel your loved ones toward academic and personal success
                  with sharpened focus and engagement.
                </p>
              </li>
            </ul>
          </div>
          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={PinkHand} alt="" />
              </li>
              <li>
                {" "}
                <h2>Stress Reduction</h2>
              </li>
              <li>
                <p>
                  Let the worries of the day melt away, creating a calm
                  environment for all family members.
                </p>
              </li>
            </ul>
          </div>

          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={House} alt="" />
              </li>
              <li>
                {" "}
                <h2>Personal Growth</h2>
              </li>
              <li>
                {" "}
                <p>
                  Empower every individual to explore their interests, overcome
                  challenges, and achieve their goals.
                </p>
              </li>
            </ul>
          </div>

          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={Scale} alt="" />
              </li>
              <li>
                {" "}
                <h2>Balanced Digital Life</h2>
              </li>
              <li>
                {" "}
                <p>
                  Strike the perfect balance with technology, ensuring it
                  enriches rather than detracts from your family's life.
                </p>
              </li>
            </ul>
          </div>
          <div className="benefit-inside-box">
            <ul className="benefit-box-for-griefsupport-group">
              <li>
                {" "}
                <img src={Brine} alt="" />
              </li>
              <li>
                {" "}
                <h2>Balanced Digital Life</h2>
              </li>
              <li>
                <p>
                  Improved mental health through our therapeutic interventions
                  is achievable
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Psychologists */}
      <div className="Psychologists-main">
        <div className="imsha-for-grief">
          <div className="Psychologists-container">
            <div className="imsha-for-grief">
              <div className="therapy-heading">
                <p>Meetup groups developed and Delivered By Psychologists</p>
                <h1>What you will gain</h1>
                <h2>From this meeetup</h2>
                <img src={Yellowline} className="Yellowline" alt="" />
              </div>
              <div className="goal-box-container-hole">
                <Slider {...settings}>
                  {employees.map((employee) => (
                    <div>
                      <div className="goal-box-container" key={employee.id}>
                        <img src={employee.image} alt="" />
                        <div className="positon-name">
                          <p style={{ color: "green" }}>{employee.position}</p>
                          <h1>{employee.name}</h1>
                        </div>
                        <div className="caro-follw">
                          <div className="line-caro"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* price-heading */}
      <div className="price-heading">
        <div className="caro-heading-tag-a">
          <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
            <span>Meetup groups developed and Delivered By Psychologists</span>
            <p>Grab the opportunity</p>
            <h1>For this month</h1>
          </div>
          <div className="element">
            {/* <img
              src={Elements}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              alt=""
            /> */}
            {/* <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
          </div>
          {/* <div className="re"> */}

          <img
            src={Reg}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            alt=""
          />
          {/* </div> */}
        </div>
        <div className="buttom-txt-gs">
          <span>
            A safe space to share experiences, connect with others, and receive
            support while navigating.
          </span>
        </div>
      </div>
      {/* Booking-Seats */}
      <div className="booking-seats">
        <div className="seat-indecater">
          <div className="dis">
            <div className="indiecate-box"></div>
            <p>Available Seats</p>
          </div>
          <div className="dis">
            <div className="indiecate-box-b"></div>
            <p>Reserved Seats</p>
          </div>
        </div>
      </div>
      {/* seet-box */}
      <div className="seat-box-container">
        <main>
          <article className="orange">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </article>
          <article className="orange">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </article>
          <article className="orange">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </article>
          <article className="orange">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </article>
        </main>
      </div>
      {/* GriefSupport-form */}
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
      <Footer />
    </div>
  );
};

export default GriefsupportGroup;
