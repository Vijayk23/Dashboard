import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const sliceThicknessPlugin = {
  id: "sliceThickness",
  beforeDraw(chart, args, options) {
    const sliceThicknessPixelout = options.sliceThickness || [270, 295, 330];
    sliceThicknessPixelout.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].outerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
    const sliceThicknessPixel = options.sliceThickness || [450, 430, 400];
    sliceThicknessPixel.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].innerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
  },
};

function Income() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["Segment 1", "Segment 2", "Segment 3"];

  const data = {
    labels,
    datasets: [
      {
        data: [20, 60, 40],
        backgroundColor: ["#F43395", "#633BEB", "#F1EFFB"],
        borderWidth: 0,
        offset: 3,
      },
    ],
  };

  return (
    <>
      <div className="doughnut">
        <div className="chart-title">
          <div>
            <p className="title">Customers</p>
            <p>Customers that buy products</p>
          </div>
        </div>
        <Doughnut
          options={options}
          data={data}
          plugins={[sliceThicknessPlugin]}
          className="doubar"
        />
        <div className="doughnut-title">
          <h2 className="doughnut-per">65%</h2>
          <p className="doughnut-cust">Total New Customers</p>
        </div>
      </div>
    </>
  );
}

export default Income;
