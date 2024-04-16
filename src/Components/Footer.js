import React from "react";
import "../Css/Footer.css";
import ALWhitelogo from "../Images/ALWhitelogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const handleSubmit = () => {
    console.log("subscribed");
    toast.success("Thank you for subscribing");
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
            <li>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br></br>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br></br>
                enim ad minimuat.{" "}
              </p> */}
            </li>
            <li>Copyright © 2024 • Propelling Stories.</li>
          </ul>
          {/* <ul className="navigation">
            <li>
              <label>Navigation</label>
            </li>
            <li>Home</li>
            <li>Blog</li>
            <li>Engage</li>
            <li>podcast</li>
            <li>Login/Signup</li>
          </ul> */}
          {/* <ul className="legal">
            <li>
              <label>legal</label>
            </li>
            <li>Get in Touch</li>
            <li>Testimonials</li>
            <li>FAQ’S</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul> */}
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
              <li>{/* <BsTwitterX className="footer-icon" /> */}</li>
            </div>
          </ul>
        </div>
        <div className="news-letter-main">
          <form>
            <div className="news-letter">
              <p>Newsletter Sign Up</p>
              <input type="text" placeholder="Enter your email here..." />
            </div>
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
