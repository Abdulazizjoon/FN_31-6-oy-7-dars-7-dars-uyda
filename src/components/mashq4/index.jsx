import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart from "react-apexcharts";


const data = {
  labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May"],
  datasets: [
    {
      label: "Ma’lumotlar",
      data: [65, 59, 80, 81, 56],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

const chartData = {
  options: {
    chart: {
      type: "donut",
    },
    labels: ["Qism 1", "Qism 2", "Qism 3"],
  },
  series: [44, 55, 67],
};

function Test() {
  const [filter, setFilter] = useState("bar");

  return (
    <div>
      <select
        className="border flex justify-center mx-auto mt-2.5 mb-2"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="chart">Chart</option>
      </select>

      {filter === "line" && (
        <Line data={data} className="w-1/2 h-1/2 mx-auto" />
      )}
      {filter === "bar" && <Bar data={data} className="w-1/2 h-1/2 mx-auto" />}
      {filter === "chart" && (
        <Chart
          className="w-1/2 h-1/2 mx-auto"
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="380"
        />
      )}
    </div>
  );
}

export default Test;
