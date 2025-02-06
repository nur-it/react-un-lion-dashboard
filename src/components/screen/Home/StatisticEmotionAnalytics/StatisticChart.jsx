import useDashboard from "@/hooks/use-dashboard";
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

const StatisticChart = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const { getStatisticsData } = useDashboard();
  const [statisticsData, setStatisticsData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStatisticsData();
        if (data && data.labels && data.datasets) {
          setStatisticsData(data);
        } else {
          console.error("❌ Invalid data structure:", data);
        }
      } catch (error) {
        console.error("❌ Error fetching statistic data:", error);
      }
    };
    fetchData();
  }, []);

  const cumulativeData = statisticsData.datasets.map((dataset, idx) =>
    dataset.data.map((value, index) =>
      statisticsData.datasets
        .slice(0, idx)
        .reduce(
          (acc, prevDataset) => acc + (prevDataset.data[index] || 0),
          value,
        ),
    ),
  );

  const cumulativeDataSets = statisticsData.datasets.map((dataset, idx) => ({
    ...dataset,
    data: cumulativeData[idx] || [],
  }));

  const transformedData = {
    ...statisticsData,
    datasets: cumulativeDataSets,
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
            const index = tooltipItems[0]?.dataIndex;
            return statisticsData.labels[index] || "";
          },
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            const stack = tooltipItem.dataset.stack;

            if (stack === "stack2") {
              const blueValue = statisticsData.datasets[3]?.data[index] || 0;
              return `🟣 ${blueValue}`;
            }

            const values = {
              green: statisticsData.datasets[2]?.data[index] || 0,
              red: statisticsData.datasets[0]?.data[index] || 0,
              orange: statisticsData.datasets[1]?.data[index] || 0,
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
      <Bar data={transformedData} options={options} />
    </div>
  );
};

export default StatisticChart;
