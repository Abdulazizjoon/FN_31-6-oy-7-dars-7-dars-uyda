import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

function Test() {
  return (
    <div>
      <Line data={data} className="w-1/2 h-1/2 mx-auto" />
    </div>
  );
}

export default Test;
