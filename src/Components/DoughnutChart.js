import React, { useEffect, useRef,useState } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import axios from "../Utils/Baseurl";
import { toast } from "react-toastify";

const DoughnutChart = () => {
    const chartRef = useRef(null);
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
       console.log(error, "iammmmmmmmmmmmmmm the error");
       toast.error("Something went wrong!!");
     }
   }
   fetchUserCount();
 }, []);
    useEffect(() => {
      const data = {
        labels: [
          "Registered Users",
          "Registered NGOs",
          "Registered College Graduates",
        ],
        datasets: [
          {
            label: "Number of Data",
            data: [52, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
  
      const config = {
        type: 'doughnut',
        data: data,
      };
  
      if (chartRef && chartRef.current) {
        var myCharts = new Chart(chartRef.current, config);
      }
  
      // Cleanup
      return () => {
        if (myCharts) {
          myCharts.destroy();
        }
      };
    }, []); // Run only once on component mount
  
    return <canvas ref={chartRef} />;
}

export default DoughnutChart