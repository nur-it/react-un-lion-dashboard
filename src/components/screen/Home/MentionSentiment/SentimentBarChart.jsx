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
        barThickness: 15,
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
        barThickness: 15,
      },
      {
        label: "Negative",
        data: [160, 190, 160, 155, 180, 155, 190],
        backgroundColor: "#F23838", 
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20,
        },
        borderSkipped: false,
        barThickness: 15,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleAlign: "center",
        callbacks: {
          title: (tooltipItems) => {
            const index = tooltipItems[0].dataIndex;
            return data.labels[index];
          },
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;

       
            const values = {
              gray: data.datasets[0]?.data[index] || 0,
              green: data.datasets[1]?.data[index] || 0, 
              red: data.datasets[2]?.data[index] || 0,
            };

            return [
              `⚪ ${values.gray}`,
              `🟢 ${values.green}`,
              `🔴 ${values.red}`,
            ].join("  ");
          },
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
        ticks: {
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
        },
      },
      y: {
        stacked: false,
        grid: {
          display: true,
          color: isDarkMode ? "#4a4e5e" : "#e0d9d9",
        },
        ticks: {
          stepSize: 50,
          max: 200,
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
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
