import React, { useState,useEffect } from "react";
import "../Css/Login.css";
import EmojiA from "../Images/EmojiA.png";
import ALlogo from "../Images/ALlogo.png";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import Tbox from "../Images/Tbox.png";
import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import LoginG from "../Images/LoginG.png";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginSuccess, setUser } from "../Redux/Slices/authSlice.js";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();





const handleCallbackResponse = async (response) => {
  console.log("encode jwt token" + response.credential);
  const userObject = jwtDecode(response.credential);
  console.log(userObject, userObject.name, "iam unstopable....");
  // Extract username and email from userObject
  const { name, email } = userObject;
  console.log(name, email, "im a porsche with no breaks");

  const respon = await axios.post("/user_signin", userObject);
  console.log(respon, "goooooooooooogle signupp");
  if (respon) {
    console.log(respon.data.message, "hhehheeeee");
    if (respon.data.message === "invalid password or id") {
      toast.error("Invalid username or password");
    } else if (respon.data.message === "User not found!!") {
      toast.error(respon.data.message);
    } else {
      toast.success("Login Successful");
      console.log(respon, "this is the response of registration............");

      navigate("/");
      console.log(
        respon.data.Token,
        "-------------->jwt token generated",
        respon.data.user,
        "------------>userdata"
      );
      //   dispatch(loginSuccess(response.data.Token));
      // dispatch(setUser(response.data.user));
      // const {datas} = response.data
      dispatch(loginSuccess(respon));
    }
  }
};
useEffect(() => {
  /*global google*/
  google.accounts.id.initialize({
    client_id:
      "179669308425-k80shl5pi8umfjns22sh80dvnq2u78hh.apps.googleusercontent.com",
    callback: handleCallbackResponse,
  });
  google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    theme: "outline",
    size: "large",
  });
});






  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!formData.username.trim()) {
      newErrors.username = "username is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = "username is invalid";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Login Form submitted :", formData);

      // If there are any errors, setErrors will handle them, no need to check newErrors here.
      // So, removing the below block.
      // if (Object.keys(newErrors).length > 0) {
      //   setErrors(newErrors);
      // } else {
      // Form submission logic here
      // console.log(formData, "Login Form submitted successfully!");
      // toast.success("Login Successful");
      // backend connectint area

      const response = await axios.post("/user_signin", formData);
      console.log(response, "this is the response of registration............");

      if (response) {
        console.log(response.data.message, "hhehheeeee");
        if (response.data.message === "invalid password or id") {
          toast.error("Invalid username or password");
        } else if (response.data.message === "User not found!!") {
          toast.error(response.data.message);
        } else {
          toast.success("Login Successful");
          console.log(
            response,
            "this is the response of registration............"
          );

          navigate("/");
          console.log(
            response.data.Token,
            "-------------->jwt token generated",
            response.data.user,
            "------------>userdata"
          );
          //   dispatch(loginSuccess(response.data.Token));
          // dispatch(setUser(response.data.user));
          // const {datas} = response.data
          dispatch(loginSuccess(response));
        }
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div>
        <div className="signup-main">
          <div className="signup-top">
            <img src={EmojiA} alt="" />
            <img
              src={ALlogo}
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </div>
          <div className="sigin-heading">
            <div>
              <img src={ElementB} className="ElementB" alt="" />
            </div>
            <div className="log-txt">
              {/* <p>Our Goals</p> */}
              <h1>Log in</h1>
              <h2>Now</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <div>
              <img src={Tbox} className="GreenRound" alt="" />
            </div>
          </div>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="inside-sigup-from">
              <div className="form-input-a">
                <label>
                  username<span>*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? "error-input" : ""} // Apply the error-input class if there's an error
                />
                {errors.username && (
                  <div className="error-message">{errors.username}</div>
                )}
                <p></p>
              </div>
              <div className="form-input-b">
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error-input" : ""} // Apply the error-input class if there's an error
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
                <Link to="/Recoverpassword">
                  <p>Forgot Password...</p>
                </Link>
              </div>
            </div>
            <div className="login-btm">
              <div className="signup-aggry-form">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
          <div className="other-signup">
            <p>
              or Login using <Link to="/Loginwithotp">phone number </Link>{" "}
            </p>
            <div className="ggl-fc-athentication">
              {/* <div className="fb">
                <LiaFacebookF />
              </div> */}
              <div id="signInDiv"></div>
            </div>
            <p>
              Don't have an account?{" "}
              <NavLink to="/Signup">
                <span style={{ color: "#256C55" }}>Sign up</span>
              </NavLink>
            </p>
            <img src={LoginG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
