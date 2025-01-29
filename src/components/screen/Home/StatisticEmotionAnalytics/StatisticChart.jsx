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

  const stack1BaseData = [
    [20, 15, 20, 20, 25, 15, 22],
    [10, 10, 15, 10, 15, 10, 10],
    [40, 20, 30, 30, 45, 40, 35],
  ];

  const cumulativeData = stack1BaseData.map((dataset, idx) =>
    dataset.map((value, index) =>
      stack1BaseData
        .slice(0, idx)
        .reduce((acc, current) => acc + current[index], value),
    ),
  );

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
        data: cumulativeData[0],
        backgroundColor: "#F23838",
        stack: "stack1",
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Positive",
        data: cumulativeData[1],
        backgroundColor: "#E38604",
        stack: "stack1",
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Negative",
        data: cumulativeData[2],
        backgroundColor: "#0CAF60",
        stack: "stack1",
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Gap", 
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "transparent",
        stack: "gap",
        barThickness: 4, 
      },
      {
        label: "Mitigated Risk",
        data: [30, 15, 20, 25, 40, 25, 25],
        backgroundColor: "#665CF3",
        stack: "stack2",
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
            const stack = tooltipItem.dataset.stack;

            if (stack === "stack2") {
              const blueValue = data.datasets[3]?.data[index] || 0;
              return `🔵 ${blueValue}`;
            }

            const values = {
              green: stack1BaseData[2][index],
              red: stack1BaseData[0][index],
              orange: stack1BaseData[1][index],
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
        border: {
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
          drawBorder: false,
          color: isDarkMode ? "#4a4e5e" : "#e0d9d9",
          borderDash: [5, 5],
        },
        border: {
          display: false,
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
    <div className="h-[230px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatisticChart;
