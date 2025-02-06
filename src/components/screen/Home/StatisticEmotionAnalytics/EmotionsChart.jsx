/* eslint-disable react-hooks/exhaustive-deps */
import EmotionBar from "./EmotionBar";
import useDashboard from "@/hooks/use-dashboard.jsx";
import { useEffect, useState } from "react";

const EmotionsChart = () => {
  const { getEmotionsData } = useDashboard();
  const [emotionsData, setEmotionsData] = useState([]); // ✅ Define state for avatars

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmotionsData(); // ✅ Fetch avatars
      setEmotionsData(data); // ✅ Update state
    };
    fetchData();
  }, []); // ✅ Run once on mount
  
  // const emotions = [
  //   { label: "Joy", value: 420, maxValue: 480, color: "bg-[#FD27E0]" },
  //   { label: "Disgust", value: 120, maxValue: 185, color: "bg-blue_main" },
  //   { label: "Anger", value: 120, maxValue: 220, color: "bg-error" },
  //   { label: "Surprise", value: 40, maxValue: 95, color: "bg-warning" },
  //   { label: "Sadness", value: 20, maxValue: 72, color: "bg-[#8D8D8D]" },
  // ];

  return (
    <div className="space-y-3">
      {emotionsData.map((emotion, index) => (
        <EmotionBar
          key={index}
          label={emotion.label}
          value={emotion.value}
          maxValue={emotion.maxValue}
          color={emotion.color}
        />
      ))}
    </div>
  );
};

export default EmotionsChart;
