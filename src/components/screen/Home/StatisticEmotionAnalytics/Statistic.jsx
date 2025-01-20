import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import StatisticChart from "./StatisticChart";
const Statistic = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex w-full items-center justify-between gap-3">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Statistic
        </h5>
        <div>
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
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
