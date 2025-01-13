import StatisticChart from "./StatisticChart";
const Statistic = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold text-secondary_main dark:text-white">
          Statistic
        </h5>
        <div className="flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white/[2%] px-3">
          <p className="pt-0.5 text-sm font-medium text-text_secondary">
            04/01/2025
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-error"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            High Risk
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-warning"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Medium Risk
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Low Risk
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-blue_main"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Mitigated Risk
          </p>
        </div>
      </div>
      <StatisticChart />
    </div>
  );
};

export default Statistic;
