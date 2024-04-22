import React, { useState } from 'react'
import "./Package.css"
import Plan from "../../Images/Plan.png";
import Planb from "../../Images/Planb.png";
import { TiTick } from "react-icons/ti";
const Package = () => {
           const togglePopup = () => {
             setShowPopup(!showPopup);
           };

           const [formData, setFormData] = useState({
             title: "",
             description: "",
             category: "",
             thumbnail: null,
             videoFile: null,
           });

           const handleChange = (e) => {
             const { name, value } = e.target;
             setFormData({
               ...formData,
               [name]: value,
             });
           };

           const [showPopup, setShowPopup] = useState(false);
           const handleSubmit = (e) => {
             e.preventDefault();
             // You can perform form submission logic here
             // For example, you can send the formData to your server
             console.log(formData);
           };
  return (
    <div>
      <div className="teletheropy-planss">
        {showPopup && (
          <div className="video-popup">
            <div className="video-popup-content">
              {/* <span className="close" onClick={togglePopup}>
                <CgCloseO />
              </span> */}
              <h2>Upload Video</h2>
              <form onSubmit={handleSubmit}>
                <div className="video-top-inputs">
                  <div>
                    <label>Title of the Video</label>
                    <input type="text" placeholder="Enter the title" />
                  </div>
                  <div className="select-page-videos">
                    <label>Select Page : </label>
                    <select name="cars" id="cars">
                      <option value="volvo">Select the Page</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Thumbnail</label>
                  <input type="file" />
                </div>
                <label>Upload Video</label>
                <div className="video-admin-inputs">
                  {/* <img src={Videoup} alt="" /> */}
                  <h2>Drag and Drop Files here</h2>
                  <input
                    type="file"
                    id="videoFile"
                    name="videoFile"
                    // onChange={handleFileChange}
                    style={{ display: "none" }} // Add this style inline
                  />
                  <label
                    htmlFor="videoFile"
                    className="custom-file-input"
                    data-file-name=""
                  >
                    Upload a file
                  </label>
                </div>
                <div className="video-submit-btns">
                  <button type="submit">Submit</button>
                  <button type="submit" onClick={togglePopup}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="packege-top-btns">
          <p>Packages Edit</p>
          <button onClick={togglePopup}>Add Package</button>
        </div>
        <div className="card-containers">
          <div className="card">
            <div className="card-text">
              <div>
                <img src={Plan} alt="" />
              </div>
              <div>
                <p>7 Days</p>
                <h1>Basic</h1>
              </div>
            </div>

            <p>
              Are you ready to embark on a journey of discovery with your child?
              Join us for an immersive experience where learning meets fun!
            </p>

            <h1>
              ₹ 999 <span>// 7 days</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list">
              <li>
                <TiTick className="tick" />4 sessions with kids
              </li>
              <li>
                <TiTick className="tick" />2 sessions with parents
              </li>
              <li>
                <TiTick className="tick" />1 intro session
              </li>
              <li>
                <TiTick className="tick" />1 review session
              </li>
            </ul>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <div className="card-text">
              <div>
                <img src={Planb} alt="" />
              </div>
              <div>
                <p style={{ color: "white" }}>15 Days</p>
                <h1 style={{ color: "#ffdd7e" }}>Premium</h1>
              </div>
            </div>

            <p style={{ color: "white" }}>
              Unlock a world of curiosity and growth with our premium plan
              designed just for them
            </p>

            <h1 style={{ color: "#ffdd7e" }}>
              ₹ 1999<span style={{ color: "white" }}>// 15 days</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list" style={{ color: "white" }}>
              {/* <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li> */}
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                8 sessions with kids
              </li>
              {/* <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li> */}
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                4 review sessions with parents
              </li>
            </ul>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <div className="card-text">
              <div>
                <img src={Plan} alt="" />
              </div>
              <div>
                <p>Monthly</p>
                <h1>Pro</h1>
              </div>
            </div>

            <p>
              - Experience education in a whole new light with our Pro Plan!
            </p>

            <h1>
              ₹ 2999<span>// Monthly</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list">
              <li>
                <TiTick className="tick" />
                16 sessions with kids
              </li>
              <li>
                <TiTick className="tick" />8 review sessions with parents
              </li>
            </ul>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package