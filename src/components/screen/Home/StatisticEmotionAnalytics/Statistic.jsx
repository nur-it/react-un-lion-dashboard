import StatisticChart from "./StatisticChart";
const Statistic = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold text-secondary_main">Statistic</h5>
        <div className="flex h-9 items-center rounded-lg border border-gray-300 bg-white/[2%] px-3">
          <p className="text-text_secondary text-sm font-medium">04/01/2025</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-error"></div>
          <p className="text-text_secondary text-xs font-normal">High Risk</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-warning"></div>
          <p className="text-text_secondary text-xs font-normal">Medium Risk</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
          <p className="text-text_secondary text-xs font-normal">Low Risk</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-blue_main"></div>
          <p className="text-text_secondary text-xs font-normal">
            Mitigated Risk
          </p>
        </div>
      </div>
      <StatisticChart />
    </div>
  );
};

export default Statistic;
