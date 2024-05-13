import React, { useState,useRef } from "react";
import "../Step1/Recoverpassword.css";
import Navbar from "../../Components/Navbar.js";
import EmojiA from "../../Images/EmojiA.png";
import Tbox from "../../Images/Tbox.png";
import Key from "../../Images/Key.png";
import Warm from "../../Images/Warm.png";
import EllipseGreen from "../../Images/EllipseGreen.png";
import Yellowline from "../../Images/Yellowline.png";
import Downarrow from "../../Images/Downarrow.png";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "../../Utils/Baseurl";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";

const Recoverpassword = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpSend,setOtpSend] = useState(false)
  const [mobile,setMobile] = useState("")
  const [verified,setVerified] = useState(false)
  const [he,setHe] = useState(false)
  const [confirmPass,setConfirmPass] = useState("")

  // if(he){
  //   setVerified(false)
  // }
  const handleChangeFirst = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmitFirst = async(e) => {
    e.preventDefault();
    console.log(number, "number");
    //api
    try {
      const response = await axios.post('forgotPassword',{mobile:number})
    console.log(response,"hehehuhu")
    if(response){
      if(response.data.message === "otp send successfully!!"){
        toast.success("otp send to your mobile number")
        setOtpSend(true)
        setMobile(response.data.data.mobile)

      }else if(response.data.message === "mobile number not registered!!"){
        toast.error("mobile number not registered!!")
      }else{
        toast.error("Try another method oto login!!")
      }
    }
    } catch (error) {
      toast.error("Try another method to login")
    }
    
  };



      // SECOND STEP
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  // Function to handle changes in each input field
  const handleChangeSecond = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numeric input

    // Update the OTP string
    const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
    setOtp(newOtp);

    // Focus on the next input field if available
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle form submission
  const handleSubmitOtp = async(e) => {
    e.preventDefault();
    // Your verification logic here
    console.log(otp, "otp");
    //api
    try {
      const verification = await axios.post('/verify_otp',{
        mobile:mobile,
        otp:otp
      })
  
      console.log(verification,"verificaiton....")
      if(verification){
        if(verification.data.message === "otp verified"){
          toast.success("otp verified")
          setVerified(true)
          setHe(true)
          setConfirmPass(verification.data.user[0]._id)
        }else if(verification.data.message === "Invalid OTP"){
          toast.error("Invalid otp")
        }else{toast.error(verification.data.message) }
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
    
  };

              // STEP THREE
               const [showPassword, setShowPassword] = useState(false);
               const [showPasswordc, setShowPasswordc] = useState(false);
               const handleClick = () => setShowPassword(!showPassword);
               const handleClickc = () => setShowPasswordc(!showPasswordc);

               const [passwordValue, setPasswordValue] = useState("");
               const [confirmPasswordValue, setConfirmPasswordValue] =
                 useState("");
               const [passwordVisibility, setPasswordVisibility] =
                 useState(false);
               const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
                 useState(false);
               const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

               const handlePasswordChange = (e) => {
                 setPasswordValue(e.target.value);
                 // Reset password match status if passwords are being retyped
                 if (!passwordsMatch) setPasswordsMatch(true);
               };

               const handleConfirmPasswordChange = (e) => {
                 setConfirmPasswordValue(e.target.value);
                 // Reset password match status if passwords are being retyped
                 if (!passwordsMatch) setPasswordsMatch(true);
               };

               const togglePasswordVisibility = () => {
                 setPasswordVisibility(!passwordVisibility);
               };

               const toggleConfirmPasswordVisibility = () => {
                 setConfirmPasswordVisibility(!confirmPasswordVisibility);
               };

               const handleSubmit = async(e) => {
                 e.preventDefault();

                 if (passwordValue !== confirmPasswordValue) {
                   // If passwords don't match, set passwordsMatch to false
                   setPasswordsMatch(false);
                   return;
                 }
                    console.log(passwordValue, "passwordValue");
                 // Proceed with form submission
                 const setPass = await axios.post(`/createPassword/${confirmPass}`,{
                  password:passwordValue
                 })
                 console.log(setPass,"password set!!")
                 if(setPass.data.message === "Password updated!!"){
                  toast.success("Password Updated")
                  navigate('/Login')
                 }else if(setPass.data.message === "Internal server error!!"){
                  toast.error("Try again later")
                 }else{
                  toast.error("Try again later!!")
                 }
               };


  return (
    <div>
      <Navbar />
      <div className="recover-topimage-container">
        <img src={EmojiA} alt="" />
        <img src={Tbox} alt="" />
      </div>
      {/* SET ONE  */}
      {!otpSend ? (<div className="fisrt-step">
        <div className="recover-main-container">
          <div className="recover-pass">
            <img src={Downarrow} alt="" />
            <div className="recoverpass-heading">
              <p>Active Listeners</p>
              <h1>recover</h1>
              <h2>Password</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <p>Please enter your email address to recover your password</p>
            <form onSubmit={handleSubmitFirst}>
              <div className="email-in">
                <label>
                  Phone Number <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  value={number}
                  onChange={handleChangeFirst}
                />
              </div>
              <p style={{ margin: "10px" }}>
                Try Using <span style={{ color: "brown" }}>Mobile Number?</span>
              </p>
              <div className="pass-sub">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>):(
      <div className="second-step">
        <div>
          <div className="recover-main-container">
            <div className="recover-pass-otp">
              <div className="recoverpass-heading">
                <p>Active Listeners</p>
                <h1>verify</h1>
                <h2>Email</h2>
                <img src={Yellowline} className="Yellowline" alt="" />
              </div>
              <p>
                Please enter the 6-digits code sent to metalmahesh@gmail.com
              </p>

              <div className="email-in-otp">
                <div className="password">
                  <form onSubmit={handleSubmitOtp}>
                    {Array.from({ length: 6 }, (_, index) => (
                      <input
                        key={index}
                        maxLength="1"
                        className="input"
                        name={`otp-${index}`}
                        type="text"
                        value={otp[index] || ""}
                        onChange={(e) => handleChangeSecond(index, e)}
                        ref={(ref) => (inputRefs.current[index] = ref)} // Store reference to input field
                      />
                    ))}
                    <button type="submit">Verify</button>
                  </form>
                </div>
              </div>
              <p style={{ margin: "10px" }}>
                Didn’t receive the code?{" "}
                <span style={{ color: "brown", margin: "10px" }}>Resend</span>
              </p>
              <div className="pass-sub"></div>
            </div>
          </div>
        </div>
      </div>)}
      

      {/* SET TWO */}

      { he ? ( <div className="third-step">
        <div>
          <div>
           
            <div className="recover-main-container">
             
              <div className="recover-pass">
                <img src={Downarrow} alt="" />
                <div className="recoverpass-heading">
                  <p>Active Listeners</p>
                  <h1>Create new</h1>
                  <h2>Password</h2>
                  <img src={Yellowline} className="Yellowline" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>
                      Password
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </label>
                    <div className="pass-in">
                      <input
                        required
                        placeholder="Enter Password"
                        type={passwordVisibility ? "text" : "password"}
                        value={passwordValue}
                        onChange={handlePasswordChange}
                      />
                      <div className="pass-icons-re">
                        {passwordVisibility ? (
                          <FaRegEyeSlash onClick={togglePasswordVisibility} />
                        ) : (
                          <FaRegEye onClick={togglePasswordVisibility} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="input-container">
                    <label>
                      Retype Password
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </label>
                    <div className="pass-in">
                      <input
                        required
                        placeholder="Retype Password"
                        type={confirmPasswordVisibility ? "text" : "password"}
                        value={confirmPasswordValue}
                        onChange={handleConfirmPasswordChange}
                      />
                      <div className="pass-icons-re">
                        {confirmPasswordVisibility ? (
                          <FaRegEyeSlash
                            onClick={toggleConfirmPasswordVisibility}
                          />
                        ) : (
                          <FaRegEye onClick={toggleConfirmPasswordVisibility} />
                        )}
                      </div>
                    </div>
                 
                    {!passwordsMatch && (
                      <span style={{ color: "red" }}>
                        Passwords don't match
                      </span>
                    )}
                  </div>
                  <div className="email-para">
                   
                  </div>
                  <div className="email-in"></div>
                  <div className="pass-sub">
                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div> ):null}
      {/* SET THREE */}
      

      <div className="recover-bottomimage-container">
        <img src={Warm} alt="" />
        <img src={Key} alt="" />
        <img src={EllipseGreen} alt="" />
      </div>
    </div>
  );
};

export default Recoverpassword;