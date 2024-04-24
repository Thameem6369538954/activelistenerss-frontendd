import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js


const DoughnutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      const data = {
        labels: [
          'Registered Users',
          'Registered NGOs',
          'Registered College Graduates'
        ],
        datasets: [{
          label: 'Number of Data',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
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