import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const config = {
      type: 'line',
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
};

export default MyChart;
