import useDashboard from "@/hooks/use-dashboard.jsx";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SentimentBarChart = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const { getSentimentsData } = useDashboard();
  const [sentimentsData, setSentimentsData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataF = await getSentimentsData(); // ✅ Fetch avatars
      setSentimentsData(dataF); // ✅ Update state
    };
    fetchData();
  }, []); // ✅ Run once on mount

  const data = {
    labels: sentimentsData.labels,
    datasets: sentimentsData.datasets.map((dataset, index, datasets) => {
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
              gray: sentimentsData.datasets[2]?.data[index] || 0,
              green: sentimentsData.datasets[0]?.data[index] || 0,
              red: sentimentsData.datasets[1]?.data[index] || 0,
            };

            return [
              `🔘 ${values.gray}`,
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
        border: {
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
          borderDash: [5, 5],
        },
        border: {
          display: false,
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
