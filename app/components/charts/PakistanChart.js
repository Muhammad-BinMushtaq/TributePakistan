"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PakistanChart = ({
  type = "line",
  title,
  data = [],
  unit = "",
  patrioticTheme = true,
  showCrescent = false,
  selectedYear = "all",
  source = "",
}) => {
  // Filter data by selected year
  const filteredData =
    selectedYear === "all"
      ? data
      : data.filter((item) => item.year <= Number(selectedYear));

  const chartData = {
    labels: filteredData.map((d) => d.year),
    datasets: [
      {
        label: `${title} (${unit})`,
        data: filteredData.map((d) => d.value),
        borderColor: patrioticTheme ? "#047857" : "#333",
        backgroundColor:
          type === "bar" ? (patrioticTheme ? "#10B981" : "#555") : "rgba(16,185,129,0.2)",
        tension: 0.3,
        fill: type === "line",
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: patrioticTheme ? "#047857" : "#333",
        pointBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y.toLocaleString()} ${unit}`;
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: "#065f46",
        font: { size: 18, weight: "bold" },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: unit,
          color: "#065f46",
          font: { size: 14, weight: "bold" },
        },
        ticks: {
          color: "#065f46",
          font: { size: 12 },
          beginAtZero: true,
          callback: function (value) {
            // Format numbers with commas for better readability
            return value.toLocaleString();
          },
        },
        grid: {
          color: "rgba(4,120,87,0.1)",
        },
      },
      x: {
        ticks: {
          color: "#065f46",
          font: { size: 12 },
        },
        grid: {
          color: "rgba(4,120,87,0.05)",
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 flex flex-col h-[350px] sm:h-[400px] md:h-[450px] w-full transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300 mb-7">
      <div className="flex-1 w-full">
        {type === "line" ? <Line data={chartData} options={options} /> : <Bar data={chartData} options={options} />}
      </div>
      {source && <p className="mt-2 text-sm text-green-900/80 text-center">Source: {source}</p>}
    </div>
  );
};

export default PakistanChart;
