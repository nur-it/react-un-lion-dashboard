import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const MentionChart = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const data = {
    labels: [
      "Jan 10",
      "Jan 11",
      "Jan 12",
      "Jan 13",
      "Jan 14",
      "Jan 15",
      "Jan 16",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 35, 19, 25, 18, 10],
        borderColor: "#F23838",
        backgroundColor: "#F23838",
        pointHoverRadius: 6,
        pointRadius: 0,
      },
      {
        label: "Dataset 2",
        data: [30, 35, 39, 30, 42, 30, 50],
        borderColor: "#1C89F6",
        backgroundColor: "#1C89F6",
        pointHoverRadius: 6,
        pointRadius: 0,
      },
      {
        label: "Dataset 3",
        data: [50, 45, 50, 45, 55, 53, 75],
        borderColor: "#0CAF60",
        backgroundColor: "#0CAF60",
        pointHoverRadius: 6,
        pointRadius: 0,
      },
      {
        label: "Dataset 4",
        data: [30, 62, 55, 55, 62, 62, 30],
        borderColor: "#F79009",
        backgroundColor: "#F79009",
        pointHoverRadius: 6,
        pointRadius: 0,
      },
      {
        label: "Dataset 5",
        data: [75, 55, 75, 50, 78, 70, 78],
        borderColor: "#FE16D4",
        backgroundColor: "#FE16D4",
        pointHoverRadius: 6,
        pointRadius: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      title: {
        display: false, // Disable the title
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
    interaction: {
      mode: "nearest", // Ensure tooltip is shown only for points
      intersect: true, // Trigger tooltip only when hovering over a point
    },
    elements: {
      line: {
        borderWidth: 2, // Line width
        hoverBorderWidth: 0, // Disable hover effects for the line
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: isDarkMode ? "#4a4e5e" : "#e0d9d9",
        },
        ticks: {
          stepSize: 20,
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
        },
      },
    },
  };

  return (
    <div className="h-[210px] w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default MentionChart;
