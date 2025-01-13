import EmotionBar from "./EmotionBar";

const EmotionsChart = () => {
  const emotions = [
    { label: "Joy", value: 420, maxValue: 480, color: "bg-[#FD27E0]" },
    { label: "Disgust", value: 120, maxValue: 185, color: "bg-blue_main" },
    { label: "Anger", value: 120, maxValue: 220, color: "bg-error" },
    { label: "Surprise", value: 40, maxValue: 95, color: "bg-warning" },
    { label: "Sadness", value: 20, maxValue: 72, color: "bg-[#8D8D8D]" },
  ];

  return (
    <div className="space-y-3">
      {emotions.map((emotion, index) => (
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
