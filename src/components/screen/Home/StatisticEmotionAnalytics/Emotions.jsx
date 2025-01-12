import EmotionsChart from "./EmotionsChart";

const Emotions = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6">
      <h5 className="text-xl font-bold text-secondary_main">Emotions</h5>
      <EmotionsChart />
    </div>
  );
};

export default Emotions;
