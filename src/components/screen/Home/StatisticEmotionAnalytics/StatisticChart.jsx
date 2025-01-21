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

const StatisticChart = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "High Risk",
        data: [11, 11, 10, 8, 25, 10, 18],
        backgroundColor: "#F23838",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
      },
      {
        label: "Positive",
        data: [18, 18, 30, 20, 38, 20, 30],
        backgroundColor: "#E38604",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
      },
      {
        label: "Negative ",
        data: [58, 40, 56, 62, 75, 45, 62],
        backgroundColor: "#0CAF60",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
      },
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
      tooltip: {
        callbacks: {
          title: () => null,

          label: (context) => context.raw,
        },
        displayColors: false,
        caretPadding: 10,
        yAlign: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        grid: {
          display: true,
          color: isDarkMode ? "#4a4e5e" : "#e0d9d9",
          
        },
        ticks: {
          stepSize: 20,
          max: 100,
        },
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

export default StatisticChart;
