import React from "react";
import AdminLoginImage from "../../";
import ALlogo from "../../Images/ALlogo.png";
import Yellowline from "../../Images/Yellowline.png";
import { toast } from "react-toastify";
// import Navbar from "../../Components/Navbar";

import { NavLink, useNavigate } from "react-router-dom";
import "./adminlogin.css";
function Adminlogin() {
  // You can define your form submission handler here
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    toast.success("successfully logged In!!");
    // navigate('/')
    // Add your login logic here
  };

  return (
    <div className="master-admin">
      <div className="main-admin">
        {/* <Navbar /> */}
        <div className="signup-top-admin">
          <div>
            <img src={ALlogo} style={{ cursor: "pointer" }} alt="" />
          </div>
          {/* <img src={AdminLoginImage} style={{ cursor: "pointer" }} alt="" /> */}
        </div>

        <div className="signup-form-admin">
          <div className="grief-main-heading">
            <span>ActiveListeners -Admin </span>
            <h1>Login</h1>
            <p>Now</p>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>

          <form onSubmit={handleSubmit}>
            {" "}
            {/* Add onSubmit handler */}
            <div className="inside-sigup-from-admin">
              <div className="form-input-a-admin">
                <label>
                  email<span>*</span>
                </label>
                <input
                  type="email"
                  name="username"
                  placeholder="enter your email"
                />
              </div>
              <div className="form-input-b-admin">
                <label>
                  Password<span>*</span>
                </label>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="login-btm-admin">
              <div className="signup-aggry-form-admin">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
