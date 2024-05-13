import React from 'react'
import "./adminlogin.css"
import ALlogo from "../../Images/ALlogo.png"
import team from "../../Images/team.png"

const Adminlogin = () => {
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
              <form>
                <div className="login-input-inside">
                  <label>Email*</label>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="login-input-inside">
                  <div className="login-input-label">
                    <label>Password*</label>
                  </div>
                  <input type="text" placeholder="Email" />
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

export default Adminlogin