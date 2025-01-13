import MentionChart from "./MentionChart";

const Mentions = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold text-secondary_main dark:text-white">
          Mentions
        </h5>
        <div className="flex h-9 items-center rounded-lg border border-gray-300 bg-white/[2%] px-3">
          <p className="text-sm font-medium text-text_secondary">04/01/2025</p>
        </div>
      </div>
      <div>
        <MentionChart />
      </div>
    </div>
  );
};

export default Mentions;
