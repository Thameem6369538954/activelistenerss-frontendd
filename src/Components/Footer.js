
import React, { useState } from "react";
import "../Css/Footer.css";
import ALWhitelogo from "../Images/ALWhitelogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../Utils/Baseurl.js";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/newsletter_subscription", {
        email,
      });
      if (response) {
        console.log(response);
        if(response.status === 200){
             if (response.data.message === "already subscribed!!") {
               toast.error("Already subscribed!!");
             } else {
               toast.success("Thank you for subscribing");
               setEmail("");  
             }
           
        }else{
          toast.error("Please try again Later!!")
        }
         
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe. Please try again later.");
    }
     
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="two-flower">
        <img src={FlowerL} alt="" />
        <img src={FlowerR} alt="" />
      </div>

      <div className="footer-main">
        <div className="footer-list">
          <ul className="logo">
            <li>
              <NavLink onClick={scrollToTop} to="/">
                <img src={ALWhitelogo} alt="" />
              </NavLink>
            </li>
            <li>Copyright © 2024 • Propelling Stories.</li>
          </ul>
          <ul className="footer-list-ul">
            <Link to="/Privacy_Policy"  className="Links"  onClick={scrollToTop}>
              <li>Privacy Policy</li>
            </Link>
            <Link to="/Terms_and_condition"  className="Links" onClick={scrollToTop}>
              <li>Terms of Conditions</li>
            </Link>
            <Link to="/Cancellation_and_refunds"  className="Links" onClick={scrollToTop}> 
              <li>Cancellation and refunds</li>
            </Link>
            <Link to="/Customer_support" className="Links"  onClick={scrollToTop}>
              <li>Customer_support</li>
            </Link>
          </ul>
          <ul className="contact">
            <li>
              <label>Contact Us</label>
            </li>
            <li>+91 7892858593</li>
            <li>
              Domlur, Bengaluru,<br></br> Karnataka 560071
            </li>
            <div className="footer-icons">
              <li>
                <FaFacebookF className="footer-icon" />
              </li>
              <li>
                <IoLogoYoutube className="footer-icon" />
              </li>
            </div>
          </ul>
        </div>
        <div className="news-letter-main">
          <form onSubmit={handleSubmit}>
            <div className="news-letter">
              <p>Newsletter Sign Up</p>
              <input
                type="email"
                placeholder="Enter your email here..."
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
