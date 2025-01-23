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
        barThickness: 15,
      },
      {
        label: "Positive",
        data: [18, 18, 30, 20, 38, 20, 30],
        backgroundColor: "#E38604",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Negative",
        data: [58, 40, 56, 62, 75, 45, 62],
        backgroundColor: "#0CAF60",
        stack: "stack1",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Mitigated Risk",
        data: [30, 15, 20, 25, 40, 25, 25],
        backgroundColor: "#665CF3",
        stack: "stack2",
        borderRadius: 20,
        barThickness: 15,
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

            if (stack === "stack2") {
              const blueValue = data.datasets[3]?.data[index] || 0;
              return `🔵 ${blueValue}`;
            }

            const values = {
              green: data.datasets[2]?.data[index] || 0,
              red: data.datasets[0]?.data[index] || 0,
              orange: data.datasets[1]?.data[index] || 0,
            };

            return [
              `🔴 ${values.red}`,
              `🟠 ${values.orange}`,
              `🟢 ${values.green}`,
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
