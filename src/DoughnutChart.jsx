import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DoughnutChart() {
  const data = {
    labels: ["Red", "Blue", "Gray"],
    datasets: [
      {
        data: [20, 40, 40], // Specify the percentages for each section
        backgroundColor: ["red", "blue", "lightgray"], // Colors for each section
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "65% New Customer", // Center text
        font: {
          size: 16,
          weight: "bold",
        },
      },
      legend: {
        display: false,
      },
    },
    cutout: "85%", // Adjust the cutout size to create a hole in the center
  };

  return (
    <div className="doughnut-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
