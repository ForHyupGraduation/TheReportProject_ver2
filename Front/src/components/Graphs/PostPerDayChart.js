import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

const PostPerDayChart = ({ postPerDayData }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);

  const recent = useMemo(() => postPerDayData.slice(0, 4), [postPerDayData]);

  useEffect(() => {
    const recentPostPerDay = recent.map((dto) => dto.postPerDay).reverse();
    const dates = recent.map((dto) => dto.companyDate).reverse();

    setData({
      labels: dates,
      datasets: [
        {
          data: recentPostPerDay,
          backgroundColor: "aqua",
          borderColor: "black",
          pointBorderColor: "aqua",
          tension: 0.4,
        },
      ],
    });

    setIsLoading(false);
  }, [recent]);

  const minValue = Math.min(...recent.map((dto) => dto.postPerDay));
  const maxValue = Math.max(...recent.map((dto) => dto.postPerDay));

  const options = {
    plugins: {
      animation: {
        duration: 1000,
      },
      legend: {
        position: "top",
        align: "end",
        display: false,
      },
    },
    scales: {
      y: {
        min: minValue,
        max: maxValue,
      },
    },
  };

  if (!isLoading) {
    return (
      <>
        <Line data={data} options={options} />
      </>
    );
  }
};

export default PostPerDayChart;
