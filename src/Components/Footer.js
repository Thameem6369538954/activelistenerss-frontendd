// import React from "react";
// import "../Css/Footer.css";
// import ALWhitelogo from "../Images/ALWhitelogo.png";
// import { FaFacebookF } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io5";
// import { BsTwitterX } from "react-icons/bs";
// import FlowerL from "../Images/FlowerL.png";
// import FlowerR from "../Images/FlowerR.png";
// import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const Footer = () => {
//   const handleSubmit = () => {
//     console.log("subscribed");
//     toast.success("Thank you for subscribing");
//   };
//   const scrollToTop = () => {
//     window.scrollTo(0, 0);
//   };
//   return (
//     <div>
//       <div className="two-flower">
//         <img src={FlowerL} alt="" />
//         <img src={FlowerR} alt="" />
//       </div>
//       <div className="footer-main">
//         <div className="footer-list">
//           <ul className="logo">
//             <li>
//               <NavLink onClick={scrollToTop} to="/">
//                 <img src={ALWhitelogo} alt="" />
//               </NavLink>
//             </li>
//             <li>
//               {/* <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 <br></br>
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 <br></br>
//                 enim ad minimuat.{" "}
//               </p> */}
//             </li>
//             <li>Copyright © 2024 • Propelling Stories.</li>
//           </ul>
//           {/* <ul className="navigation">
//             <li>
//               <label>Navigation</label>
//             </li>
//             <li>Home</li>
//             <li>Blog</li>
//             <li>Engage</li>
//             <li>podcast</li>
//             <li>Login/Signup</li>
//           </ul> */}
//           {/* <ul className="legal">
//             <li>
//               <label>legal</label>
//             </li>
//             <li>Get in Touch</li>
//             <li>Testimonials</li>
//             <li>FAQ’S</li>
//             <li>Help</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//           </ul> */}
//           <ul className="contact">
//             <li>
//               <label>Contact Us</label>
//             </li>
//             <li>+91 7892858593</li>
//             <li>
//               Domlur, Bengaluru,<br></br> Karnataka 560071
//             </li>
//             <div className="footer-icons">
//               <li>
//                 <FaFacebookF className="footer-icon" />
//               </li>
//               <li>
//                 <IoLogoYoutube className="footer-icon" />
//               </li>
//               <li>{/* <BsTwitterX className="footer-icon" /> */}</li>
//             </div>
//           </ul>
//         </div>
//         <div className="news-letter-main">
//           <form>
//             <div className="news-letter">
//               <p>Newsletter Sign Up</p>
//               <input type="text" placeholder="Enter your email here..." />
//             </div>
//           </form>
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;





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
