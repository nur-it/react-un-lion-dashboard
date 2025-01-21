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
        label: "High Risk",
        data: [11, 11, 10, 8, 25, 10, 18],
        backgroundColor: "#F23838",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Positive",
        data: [18, 18, 30, 20, 38, 20, 30],
        backgroundColor: "#E38604",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Negative",
        data: [58, 40, 56, 62, 75, 45, 62],
        backgroundColor: "#0CAF60",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Mitigated Risk",
        data: [30, 15, 20, 25, 40, 25, 25],
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
        titleAlign: "center",
        callbacks: {
          title: (tooltipItems) => {
            const index = tooltipItems[0].dataIndex;
            return data.labels[index];
          },
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            const stack = tooltipItem.dataset.stack;

            // Filter datasets in the same stack and create a row of values
            const row = data.datasets
              .filter((dataset) => dataset.stack === stack)
              .map((dataset) => {
                const value = dataset.data[index];
                const color = dataset.backgroundColor;
                return `\u2022 ${value}`;
              })
              .join("   ");

            return row;
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
        categoryPercentage: 0.8,
        barPercentage: 0.7,
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
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
        },
      },
    },
  };

  return (
    <div className="h-[210px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatisticChart;
