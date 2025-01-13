import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MentionChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 30, 50, 70, 90, 60, 40], 
        borderColor: 'rgba(255, 99, 132, 1)', 
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4, // Smooth curve
      },
      {
        label: 'Dataset 2',
        data: [20, 40, 60, 80, 50, 30, 10],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dataset 3',
        data: [15, 25, 35, 45, 55, 65, 75],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dataset 4',
        data: [5, 15, 25, 35, 45, 55, 65],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Dataset 5',
        data: [25, 35, 45, 55, 65, 75, 85],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Weekly Line Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // Steps on the Y-axis
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MentionChart;


