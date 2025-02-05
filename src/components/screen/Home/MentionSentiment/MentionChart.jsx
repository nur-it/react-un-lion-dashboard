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
import useDashboard from "@/hooks/use-dashboard.jsx";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MentionChart = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const { getMentionsData } = useDashboard();
  const [mentionsData, setMentionsData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMentionsData();

        setMentionsData(data);
      } catch (error) {
        console.error("❌ Error fetching mentions data:", error);
      }
    };

    fetchData();
  }, []);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
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
    interaction: {
      mode: "nearest",
      intersect: true,
    },
    elements: {
      line: {
        borderWidth: 3,
        hoverBorderWidth: 0,
      },
    },
    scales: {
      x: {
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
        beginAtZero: true,
        grid: {
          display: true,
          color: isDarkMode ? "#4a4e5e" : "#e0d9d9",
          borderDash: [5, 5],
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 20,
          color: isDarkMode ? "#FFFFFFCC" : "#4A5773",
        },
      },
    },
  };

  return (
    <div className="h-[210px] w-full max-w-full" style={{ width: "100%", height: "210px" }}>
      <Line data={mentionsData} options={options} />
    </div>
  );
};

export default MentionChart;