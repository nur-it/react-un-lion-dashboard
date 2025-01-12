import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "High Risk",
        data: [10, 15, 20, 25, 30, 35, 40],
        backgroundColor: "#F23838",
        stack: "stack1",
        borderRadius: 20,
      },
      {
        label: "Medium Risk",
        data: [20, 25, 30, 35, 40, 45, 50],
        backgroundColor: "#E38604",
        stack: "stack1",
        borderRadius: 20,
      },
      {
        label: "Low Risk",
        data: [30, 35, 40, 45, 50, 55, 60],
        backgroundColor: "#0CAF60",
        stack: "stack1",
        borderRadius: 20,
      },
      // Separate bar (single color)
      {
        label: "Mitigated Risk",
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: "#665CF3",
        stack: "stack2",
        borderRadius: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
          padding: 10,
          font: {
            size: 12,
          },
          color: "#4A5773",
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barThickness: 15,
    maxBarThickness: 20,
  };

  return (
    <div className="h-[210px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
