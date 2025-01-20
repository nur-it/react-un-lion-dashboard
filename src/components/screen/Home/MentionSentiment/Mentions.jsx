import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import MentionChart from "./MentionChart";

const Mentions = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Mentions
        </h5>
        <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-error"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Youtube
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-blue_dodger"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Facebook
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-warning"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            X
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            TikTok
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-pink_main"></div>
          <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
            Instagram
          </p>
        </div>
      </div>
      <div>
        <MentionChart />
      </div>
    </div>
  );
};

export default Mentions;
