import SentimentBarChart from "./SentimentBarChart";

const Sentiment = () => {
  return (
    <div>
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/[10%] dark:bg-white/[4%]">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold text-secondary_main dark:text-white">
            Sentiment
          </h5>
          <div className="flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white/[2%] px-3">
            <p className="text-sm font-medium text-text_secondary pt-0.5">
              04/01/2025
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#4A5773]"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Neutral
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Positive
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-error"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Negative
            </p>
          </div>
        </div>
        <div>
          <SentimentBarChart />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
