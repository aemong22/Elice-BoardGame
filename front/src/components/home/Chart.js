import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  tension: 0.3,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const generateLabels = () => {
  const years = [];
  for (var i = 2000; i < 2023; i++) {
    years.push(i);
  }
  return years;
};

const labels = generateLabels();

export const data = {
  labels,
  datasets: [
    {
      label: "Board Games",
      data: [
        47, 97, 163, 250, 347, 453, 550, 665, 805, 958, 1126, 1313, 1535, 1758,
        2007, 2322, 2677, 3065, 3461, 3876, 4162, 4398, 4429,
      ],
      borderColor: "#A98E64",
      backgroundColor: "#F3F0EC",
      fill: "origin",
    },
  ],
};

function Chart() {
  return (
    <div id="chart_wrapper">
      <div id="chart_title">"세상엔 보드게임이 너무 많아!"</div>
      <div id="chart_subtitle">
        <span style={{ color: "#A98E64" }}>보드게임</span>의 수는{" "}
        <span style={{ color: "#A98E64" }}>22년간</span> 꾸준히 증가
      </div>
      <div id="chart_visual">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Chart;
