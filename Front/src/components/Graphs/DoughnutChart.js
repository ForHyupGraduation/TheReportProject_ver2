import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { useState } from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = (subRatio) => {
  if (subRatio) {
    console.log(Object.keys(subRatio.subRatio));
  }
  const data = {
    labels: Object.keys(subRatio.subRatio),
    datasets: [
      {
        data: Object.values(subRatio.subRatio),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
