import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./pie-chart.scss";

export default function PieChart({ data }) {
  const generateRandomColor = () =>
    `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.5)`;

  const manufacturer = data.map((product) => product.manufacturer.name);
  const newData = [...new Set(manufacturer)];
  const countOfManufacturer = {};
  data.map((product) => {
    if (!countOfManufacturer[product.manufacturer.name]) {
      countOfManufacturer[product.manufacturer.name] = 0;
    }
    countOfManufacturer[product.manufacturer.name]++;
  });

  const chartData = {
    labels: newData.map((m) => m),
    datasets: [
      {
        data: [
          countOfManufacturer.pfizer,
          countOfManufacturer.bayer,
          countOfManufacturer.hemofarm,
        ],

        backgroundColor: data.map(() => generateRandomColor()),
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Pie
        data={chartData}
        options={{
          type: "line",
          scales: {
            x: {
              ticks: {
                display: false,
              },
              position: "top",
              title: {
                display: true,
                text: "Manufacturer products count",
                color: "#565656",

                font: {
                  size: 16,
                  weight: "bold",
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
            },
          },

          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}
