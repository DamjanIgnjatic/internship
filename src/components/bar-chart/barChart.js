import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ data }) {
  const generateRandomColor = () =>
    `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.5)`;

  const sortData = data.sort(function (a, b) {
    return Number(a.price) - Number(b.price);
  });

  const lowest = sortData.slice(0, 5);
  const highest = sortData.slice(sortData.length - 5);
  const sortedData = [...lowest, ...highest];

  const sortedAphabeticly = sortedData.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const chartData = {
    labels: sortedAphabeticly.map((product) => product.name),
    datasets: [
      {
        label: "Price of medicine",
        data: sortedAphabeticly.map((product) => product.price),
        backgroundColor: data.map(() => generateRandomColor()),
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            y: {
              title: {
                display: true,
                text: "Prices",
                color: "#565656",
                font: {
                  size: 16,
                  weight: "bold",
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
              min: 0,
              max: 125,
              ticks: {
                stepSize: 25,
              },
            },
            x: {
              ticks: {
                display: true,
              },
              title: {
                display: true,
                text: "Prices of medicine",
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
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}
