import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  console.log("hellop");

  return <Doughnut data={data} />;
};

export default DoughnutChart;
