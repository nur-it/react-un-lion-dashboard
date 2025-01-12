import Emotions from "./Emotions";
import Statistic from "./Statistic";

const StatisticEmotionAnalytics = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Statistic />
      <Emotions />
    </div>
  );
};

export default StatisticEmotionAnalytics;
