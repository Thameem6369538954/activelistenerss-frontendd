import React, { useState } from "react";
import "./adminlogin.css"
import ALlogo from "../../Images/ALlogo.png"
import team from "../../Images/team.png"
import axios from "../../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Adminpanel = () => {
  const navigate = useNavigate();
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});

   const validateEmail = (email) => {
     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return pattern.test(email);
   };

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (event) => {
     event.preventDefault(); // Prevent form submission

     const validationErrors = {};

     if (!formData.email) {
       validationErrors.email = "Email is required";
     } else if (!validateEmail(formData.email)) {
       validationErrors.email = "Please enter a valid email address";
     }

     if (!formData.password) {
       validationErrors.password = "Password is required";
     } else if (formData.password.length < 6) {
       validationErrors.password =
         "Password must be at least 6 characters long";
     }

     if (Object.keys(validationErrors).length > 0) {
       setErrors(validationErrors);
     } else {
       // If no errors, handle successful form submission
       alert("Form submitted successfully!");
       // Clear form and errors (optional)
       setFormData({ email: "", password: "" });
       setErrors({});
     }
try{
  const response = await axios.post("admin/login", formData);

  console.log(response);
  if (response.data.message === "Admin loggedIn successfully!!") {
    toast.success("Login Successful");
    navigate("/Adminpanelhome/DaseBoard");
  }



}catch (error) {
  if(error.response.data.message === "invalid password/email"){
    toast.error("Invalid email or password");
  }


}





   };
  
  return (
    <div>
      <div className="adminlog-main-containrt">
        <div className="adminlog-container-left">
          <img src={ALlogo} alt="" />
          <img src={team} alt="" />
        </div>
        <div className="adminlog-container-right">
          <div className="login-text">
            <div className="login-text-inside">
              <p> For Admin</p>
              <h1>Login</h1>
              <span>Now</span>
            </div>
            <div className="login-input">
              <form onSubmit={handleSubmit}>
                <div className="login-input-inside">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </div>
                <div className="login-input-inside">
                  <div className="login-input-label">
                    <label>Password*</label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel