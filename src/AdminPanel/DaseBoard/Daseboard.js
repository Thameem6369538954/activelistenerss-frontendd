import React,{ useEffect, useState } from "react";
import "./Daseboard.css";
import { GrLineChart } from "react-icons/gr";
import GreenBulb from "../../Images/Greenbg.png";
import THands from "../../Images/THands.png";
import PinkHand from "../../SmallElements/PinkHand.png";
import Brine from "../../SmallElements/Brine.png";
import { Chart as Chartjs } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Videoup from "../../Images/Videoup.png";
import Thumb from "../../Images/Thumb.png";
import MyChart from "../../Components/MyChart";
import DoughnutChart from "../../Components/DoughnutChart.js";
import axios from "../../Utils/Baseurl.js";
import { toast } from "react-toastify";
import Hasyaa from "../../Katha/Hasya/Hasya.js"
const Daseboard = () => {
   const [userCount, setUserCount] = useState(0);
   useEffect(() => {
     console.log("lllllllllllllllllllllllllllllllllllllll");
     const fetchUserCount = async () => {
      console.log("insidde useeffect.........");
       try {
         const response = await axios.get("admin/registeredUser-count");
         console.log(response, "iiiikkkkkkkkkkkkkkkkkk");
         if (response) {
           setUserCount(response.data.totalUsers);
         } else {
           toast.error("Something went wrong!!");
         }
       } catch (error) {
        console.log(error,"iammmmmmmmmmmmmmm the error");
         toast.error("Something went wrong!!");
       }
      }
      fetchUserCount()
   }, []);
  return (
    <div>
      {/* <Hasyaa /> */}
      <div className="dase-main-container">
        <h2>Dashboard</h2>
        <div className="dase-borad-top-box-container">
          <div className="dase-borad-top-box">
            <p>Total Active Listeners</p>
            <div className="dase-borad-inside-box">
              <h1>40,689</h1>
              <img src={Brine} alt="" />
            </div>
            <p>
              <GrLineChart />
              8.5% Up from yesterday
            </p>
          </div>
          <div className="dase-borad-top-box">
            <div className="dase-borad-top-box">
              <p>Total Psychologist</p>
              <div className="dase-borad-inside-box">
                <h1>50</h1>
                <img src={THands} alt="" />
              </div>
              <p>
                <GrLineChart />
                8.5% Up from yesterday
              </p>
            </div>
          </div>
          <div className="dase-borad-top-box">
            <div className="dase-borad-top-box">
              <p>Total Registered Users</p>
              <div className="dase-borad-inside-box">
                <h1>{userCount}</h1>
                <img src={GreenBulb} alt="" />
              </div>
              <p>
                <GrLineChart />
                4.5% Up from yesterday
              </p>
            </div>
          </div>
          <div className="dase-borad-top-box">
            <div className="dase-borad-top-box">
              <p>Total NGO’s Registered</p>
              <div className="dase-borad-inside-box">
                <h1>100</h1>
                <img src={PinkHand} alt="" />
              </div>
              <p>
                <GrLineChart />
                4.5% Up from yesterday
              </p>
            </div>
          </div>
        </div>

        {/* chart */}

        <div className="dase-borad-chart-container">
          <div className="dase-borad-chart-a">
            <MyChart />
          </div>
          <div className="dase-borad-chart-b">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daseboard;
