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

  const baseData = {
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
        data: [125, 100, 140, 105, 105, 115, 105],
        backgroundColor: "#98A2B3",
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Positive",
        data: [40, 20, 20, 20, 25, 30, 20],
        backgroundColor: "#0CAF60",
        borderSkipped: false,
        barThickness: 15,
      },
      {
        label: "Negative",
        data: [25, 25, 25, 35, 30, 35, 30],
        backgroundColor: "#F23838",
        borderSkipped: false,
        barThickness: 15,
      },
    ],
  };

  // Adjust the dataset to make the stacking incremental
  const data = {
    labels: baseData.labels,
    datasets: baseData.datasets.map((dataset, index, datasets) => {
      const adjustedData = dataset.data.map((value, i) => {
        // Sum the values of all previous datasets at the same index
        const previousSum = datasets
          .slice(0, index)
          .reduce((sum, prevDataset) => sum + prevDataset.data[i], 0);
        return value + previousSum;
      });
      return { ...dataset, data: adjustedData };
    }),
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
              gray: baseData.datasets[0]?.data[index] || 0,
              green: baseData.datasets[1]?.data[index] || 0,
              red: baseData.datasets[2]?.data[index] || 0,
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
  };

  return (
    <div className="h-[210px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SentimentBarChart;
