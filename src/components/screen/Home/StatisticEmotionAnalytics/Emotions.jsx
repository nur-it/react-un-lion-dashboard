import EmotionsChart from "./EmotionsChart";

const Emotions = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 dark:border-white/[10%] bg-white dark:bg-white/[4%] p-4 sm:p-6">
      <h5 className="text-lg sm:text-xl font-bold text-secondary_main dark:text-white">Emotions</h5>
      <EmotionsChart />
    </div>
  );
};

export default Emotions;
