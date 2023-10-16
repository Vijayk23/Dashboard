import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Income from "./Income";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chartdesign() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 15,
            color: "balck",
          },
        },
      },

      y: {
        display: false,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [50, 30, 90, 75, 60, 30, 60, 100, 95, 60, 55, 60],
        borderRadius: 10,
        backgroundColor: labels.map((label) =>
          label === "Aug" ? "#5A32EA" : "#F2EFFF"
        ),
        base: 10,
        borderSkipped: "middle",
      },
    ],
  };

  return (
    <>
      <div className="charts2">
        <div className="chart">
          <div className="chart-title">
            <div>
              <p className="title">Overview</p>
              <p>Monthly Income</p>
            </div>
            <select>
              <option>Quarterly</option>
            </select>
          </div>
          <Bar options={options} data={data} />
        </div>
        <div>
          <Income />
        </div>
      </div>
    </>
  );
}

export default Chartdesign;
