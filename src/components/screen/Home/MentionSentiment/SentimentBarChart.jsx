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

const SentimentBarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Neutral",
        data: [102, 130, 110, 105, 140, 105, 130],
        backgroundColor: "#98A2B3",
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
        data: [140, 170, 145, 125, 160, 140, 160],
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
        label: "Negative ",
        data: [160, 190, 160, 155, 180, 155, 190],
        backgroundColor: "#F23838",
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
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
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 50,
          max: 200,
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

export default SentimentBarChart;
