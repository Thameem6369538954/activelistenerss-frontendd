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
import WatsapIcon from "../Images/WatsapIcon.jpeg";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorform = {};
    const emailPattern = /^[a-z]+[a-z0-9]*@gmail\.(com|in)$/;

    if (!email) {
      errorform.email = "Email is required";
    }

    if (!email) {
      errorform.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errorform.email = "Email address is invalid";
    }
    if (Object.keys(errorform).length > 0) {
      setError(errorform);
      return;
    }

    try {
      const response = await axios.post("/newsletter_subscription", {
        email,
      });
      if (response) {
        console.log(response);
        if (response.status === 200) {
          if (response.data.message === "already subscribed!!") {
            toast.error("Already subscribed!!");
          } else {
            toast.success("Thank you for subscribing");
            setEmail("");
          }
        } else {
          toast.error("Please try again Later!!");
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
            <Link to="/Privacy_Policy" className="Links" onClick={scrollToTop}>
              <li>Privacy Policy</li>
            </Link>
            <Link
              to="/Terms_and_condition"
              className="Links"
              onClick={scrollToTop}
            >
              <li>Terms of Conditions</li>
            </Link>
            <Link
              to="/Cancellation_and_refunds"
              className="Links"
              onClick={scrollToTop}
            >
              <li>Cancellation and refunds</li>
            </Link>
            <Link
              to="/Customer_support"
              className="Links"
              onClick={scrollToTop}
            >
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
                <a
                  href="https://www.youtube.com/@ActiveListeners"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="footer-icon" />
                </a>
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
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <a
          href="https://wa.me/+917892858593"
          style={{ textDecoration: "none", cursor: "pointer", color: "black" }}
          target="_blank"
        ></a>
        <a
          href="https://wa.me/+917892858593"
          style={{ textDecoration: "none", cursor: "pointer", color: "black" }}
          target="_blank"
        >
          <div className="w-app">
            <img src={WatsapIcon} alt="" className="whatsapp-fix-img" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
