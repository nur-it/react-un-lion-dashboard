import DateRangePicker from "./DateRangePicker";
import EmotionsChart from "./EmotionsChart";

const Emotions = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Emotions
        </h5>
        {/* <div className="flex h-9 min-w-[123px] items-center justify-center rounded-lg border border-[#D0D5DD] px-3 py-2">
          
        </div> */}
        <DateRangePicker />
      </div>
      <EmotionsChart />
    </div>
  );
};

export default Emotions;
