import React,{useState, useRef} from "react";

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

const Loginwithotp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
  // FIRST STEP  ............................................................................

  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otpSend,setOtpSend] = useState(false)
  const [mobile,setMobile] = useState("")
const handleChange = (e) => {
  const inputValue = e.target.value;
  setPhoneNumber(inputValue);
  if (!/^[6789]\d{9}$/.test(inputValue)) {
    setError(
      "Phone number must start with 6, 7, 8, or 9 and be exactly 10 digits long."
    );
  } else {
    setError("");
  }
};


  const handleSubmitphone =async (e) => {
    e.preventDefault();
    if (!error) {
      // Form submission logic goes here
      console.log("Form submitted successfully!");
      console.log(phoneNumber, "phone number");
      try {
        const response = await axios.post("/send_login", {
          mobile: phoneNumber,
        });
        console.log(response, "hehehuhu");
        if (response && response.data) {
          if (response.data.message === "otp send successfully!!") {
            toast.success("otp send to your mobile number");
            setOtpSend(true);
            setMobile(response.data.user.mobile);
          } else if (
            response.data.message === "Mobile number not registered!!"
          ) {
            toast.error("Mobile number not registered!!");
          } else {
            console.log(error, "confusion");
            toast.error("Try another method to login!!");
          }
        }
      } catch (error) {
        console.log(error, "im catch error");
        toast.error("Try another method to login");
      }
    } else {
      console.log("Form has errors. Please correct them before submitting.");
    }
    
  };

  // SECOND STEP    ................................................................................
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
  const handleSubmitOtp =async (e) => {
    e.preventDefault();
    // Your verification logic here
    console.log(otp,mobile, "otp and mobile");
    //api
    try {
      const verification = await axios.post('/verify_otp',{
        mobile:mobile,
        otp:otp
      })
  
      console.log(verification,"verificaiton....")
      if(verification){
        if(verification.data.message === "otp verified"){
          console.log(
            verification.data.Token,
            "-------------->jwt token generated",
            verification.data.user,
            "------------>userdata"
          );
          toast.success("otp verified")
          dispatch(loginSuccess(verification));
          navigate("/");
          toast.success("Login successful with registered mobile number")

          
        }else if(verification.data.message === "Invalid OTP"){
          toast.error("Invalid otp")
        }else{toast.error(verification.data.message) }
      }
    } catch (error) {
      console.log(error)
      toast.error("Invalid OTP!")
    }
  };

  return (
    <div className="loginwithotp">
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

      {/* First Step for OTP */}
      {!otpSend ? (<div className="first-step-otp">
        <div className="step">
          <div className="sigin-heading">
            <div>
              <img src={ElementB} className="ElementB" alt="" />
            </div>
            <div className="log-txt">
              <h1>Log in</h1>
              <h2>Now</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <div>
              <img src={Tbox} className="GreenRound" alt="" />
            </div>
          </div>
          <div>
            <div>
              <div className="signup-form">
                <form onSubmit={handleSubmitphone}>
                  <div className="inside-sigup-from">
                    <div className="form-input-a">
                      <label>
                        Phone Number<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handleChange}
                        className={error ? "error-input" : ""}
                      />
                      {error && <p className="error-msg">{error}</p>}
                    </div>
                  </div>
                  <div className="login-btm">
                    <div className="signup-aggry-form">
                      <button type="submit">Login</button>
                    </div>
                  </div>
                </form>
                <div className="other-signup">
                  <p>or Login using </p>
                  <div className="ggl-fc-athentication">
                    <div className="fb">
                      <LiaFacebookF />
                    </div>
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
        </div>
      </div>):(<div className="second-step-for-otp">
        <div className="step">
          <div className="second-step">
            <div className="otp-verfiy-container">
              <div className="recover-main-container">
                <div className="recover-pass-otp">
                  <div className="recoverpass-heading">
                    <p>Active Listeners</p>
                    <h1>verify</h1>
                    <h2>Phone Number Otp</h2>
                    <img src={Yellowline} className="Yellowline" alt="" />
                  </div>
                  <p>
                    Please enter the 6-digits code sent to metalmahesh@gmail.com
                  </p>

                  <div className="email-in-otp">
                    <div className="input-otp">
                      <form onSubmit={handleSubmitOtp} className="otp-form">
                        <div>
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
                        </div>
                        <div className="otp-verfiy-submit">
                          <button type="submit">Verify</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p style={{ margin: "10px" }}>
                    Didn’t receive the code?{" "}
                    <span style={{ color: "brown", margin: "10px" }}>
                      Resend
                    </span>
                  </p>
                  <div className="pass-sub"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      

      {/* second step for OTP */}

      
    </div>
  );
};

export default Loginwithotp;