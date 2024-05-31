import React, { useEffect, useState } from "react";
import "../Css/TeleTherapy.css";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import { TiArrowRightThick } from "react-icons/ti";
import Plan from "../Images/Plan.png";
import Planb from "../Images/Planb.png";
import Speekeasy from "../Components/Speekeasy.js";
import { TiTick } from "react-icons/ti";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
import Doc from "../Images/Doc.png";
import Telegroup from "../Images/Telegroup.png";
import Arrow from "../Images/Arrow.png";
import Breadcrumps from "../Components/Breadcrumps.js";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import  Subscribe from "../Images/Subscribe.png";
import  Fourtyfive from "../Images/Fourtyfive.png";
import appConfig from "../Utils/appConfig.js";
import { useSelector } from "react-redux";

const Speak_easy = () => {
  const [data,setData] = useState({})
  const user = useSelector((state) => state.auth.user);
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const appointmentSubmit = (e) => {
    e.preventDefault();
    setWantComplimentaryCall(true);
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    // setCloseClick(true);
  };
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get("admin/get_all_packages");
        console.log(response, "iiii");
        if (response) {
          setCard(response.data.packageList);
          console.log(response.data.packageList);
        } else {
          toast.error("Something went wrong!!");
        }
      } catch (error) {
        toast.error("Something went wrong!!");
      }
    };
    fetchCard();
  }, []);

  // PAYMENT SECTION......................................................
  useEffect(() => {
    if (user) {
      setData({
        item: "premium",
        itemCod: "99",
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        userId: user._id,
      });
    }
  }, [user]); // Only update data when user changes

  const handleSubscription = async (packageData) => {
    console.log(packageData, "package details");

    const paymentCCAvenue = async () => {
      var paymentData = {
        merchant_id: "MERCHANT_ID", // Merchant ID (Required)
        order_id: `ORD${Date.now()}`, // Order ID - It can be generated from our project
        amount: packageData.price, // Payment Amount (Required)
        currency: "INR", // Payment Currency Type (Required)
        billing_email: user.email, // Billing Email (Optional)
        billing_name: user.name, // Billing Name (Optional)
        billing_address: "Address Details", // Billing Address (Optional)
        billing_city: "City", // Billing City (Optional)
        billing_state: "State", // Billing State (Optional)
        billing_zip: "Zip Code", // Billing Zip (Optional)
        billing_country: "India", // Billing Country (Optional)
        redirect_url: `${window.location.origin}/api/ccavenue-handle`, // Success URL (Required)
        cancel_url: `${window.location.origin}/api/ccavenue-handle`, // Failed/Cancel Payment URL (Required)
        merchant_param1: "Extra Information", // Extra Information (Optional)
        merchant_param2: "Extra Information", // Extra Information (Optional)
        merchant_param3: "Extra Information", // Extra Information (Optional)
        merchant_param4: "Extra Information", // Extra Information (Optional)
        language: "EN", // Language (Optional)
        billing_tel: user.mobile, // Billing Mobile Number (Optional)
      };

      // let encReq = CCAvenue.getEncryptedOrder(paymentData);
      // let accessCode = "ACCESS_CODE";
      // let URL = https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encReq}&access_code=${accessCode};
      // window.location.href = URL;

      try {
        const token = localStorage.getItem("accessToken");
        console.log(
          paymentData,
          "daaaatttttttttttttttttt",
          token,
          "tokennnnnnnnnnnnnnnnnnnnnnnn::::::::::::::::>>>>>>>>>>>>>"
        );
        const response = await axios.post(
          "/create-ccavenue-order",
          paymentData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // const { encRequest } = response.data;
        // const accessCode = "YOUR_ACCESS_CODE"; // Replace with your access code
        // const URL = https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encRequest}&access_code=${accessCode};
        // window.location.href = URL;
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };
    paymentCCAvenue();

    // try {
    //   const token = localStorage.getItem("accessToken");

    //   const response = await axios.post('/create-stripe-session-subscription',packageData,
    //   {
    //     headers: {
    //       Authorization: Bearer ${token},
    //     },
    //   }
    //   )
    // } catch (error) {
    //   console.log(error)
    // }
  };

  return (
    <div>
      <Navbar />
      <Breadcrumps />
      <div className="teletheropy">
        <Speekeasy />
      </div>

      <div className="teletheropy-plans">
        <div className="top-baner">
          <img src={Subscribe} alt="" />
          <div className="top-baner-inside">
            <p>Packages for you!</p>
            <h1>Subscribe to our</h1>
            <h2>Packages</h2>
          </div>
          <img src={Fourtyfive} alt="" />
        </div>
        <div className="dis-fle">
          {card.map((data) => {
            return (
              <div className="card-container">
                <div className="card">
                  <div className="card-text">
                    <div>
                      <img src={data.package_icon} alt="" />
                    </div>
                    <div>
                      <p>{data.days_plan} Days</p>
                      <h1>{data.package_title}</h1>
                    </div>
                  </div>

                  <p>{data.description}</p>

                  <h1>
                    ₹{data.price} <span>// {data.days_plan} days</span>
                  </h1>
                  <p>What’s included</p>
                  <ul className="plan-list">
                    <li>
                      <TiTick className="tick" />
                      {data.benefits}
                    </li>
                    <li>
                      <TiTick className="tick" />
                      {data.sub_benefits}
                    </li>
                    {/* <li>
                      <TiTick className="tick" />1 intro session
                    </li>
                    <li>
                      <TiTick className="tick" />1 review session
                    </li> */}
                  </ul>
                  <button onClick={() => handleSubscription(data)}>
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="imsai-two">
        <div className="bottom-tele-image">
          {/* <img src={FlowerL} alt="" /> */}
          <div className="tele-bottom-box-main">
            <div className="tele-bottom-box">
              <h1>Psychologists available via Phone consultation !</h1>
              <ul className="tele-bottom-txt">
                <li>Bullying, Body Shaming, Cyber Trolling</li>
                <li>Low Self Esteem / Suicidal Tendencies </li>
                <li>Introverts</li>
                <div className="tele-bottom-image">
                  {wantComplimentaryCall ? (
                    <>
                      <div className="sub-telecall">
                        <span className="close-calendly" onClick={handleClose}>
                          <AiOutlineCloseCircle className="senestop-icon" />
                        </span>

                        <InlineWidget
                          url="https://calendly.com/teammentoons/active-listeners"
                          // className="calendly-embed-header"
                          // style={{ width: "10%", height: "100%" }}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {wantComplimentaryCall ? (
                    <></>
                  ) : (
                    <button onClick={appointmentSubmit}>Get Appointment</button>
                  )}
                  <img src={Doc} alt="" />
                </div>
              </ul>
            </div>
            <div className="tele-bottom-box">
              <h1>Introducing  Personality Assessment Test </h1>
              <ul className="tele-bottom-txt">
                <p>
                  Discover your unique traits and valuable insights with our
                  Personality Assessment Test. Uncover hidden strengths and
                  areas for growth with this comprehensive too
                </p>

                {/* <img src={Arrow} width={1} alt="" /> */}
                <div className="tele-bottom-image">
                  <img src={Telegroup} alt="" />
                </div>
              </ul>
            </div>
          </div>
          {/* <img src={FlowerR} alt="" /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Speak_easy;
