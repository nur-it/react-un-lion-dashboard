import Emotions from "./Emotions";
import MainTopics from "./MainTopics";
import Statistic from "./Statistic";

const StatisticEmotionAnalytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
      <Statistic />
      <Emotions />
      <MainTopics />
    </div>
  );
};

export default StatisticEmotionAnalytics;
