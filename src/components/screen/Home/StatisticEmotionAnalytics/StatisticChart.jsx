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
        data: [10, 15, 15, 25, 30, 10, 15],
        backgroundColor: "#F23838",
        stack: "stack1",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
       
      },
      {
        label: "Medium Risk",
        data: [5, 10, 15, 10, 20, 15, 10],
        backgroundColor: "#E38604",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Low Risk",
        data: [45, 15, 25, 35, 40, 25, 45],
        backgroundColor: "#0CAF60",
        stack: "stack1",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
      },
      // Separate bar (single color)
      {
        label: "Mitigated Risk",
        data: [30, 10, 20, 25, 40, 25, 25],
        backgroundColor: "#665CF3",
        stack: "stack2",
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barThickness: 12,
    maxBarThickness: 15,
  };

  return (
    <div className="h-[210px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
