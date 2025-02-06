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
