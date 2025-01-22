import search from "../../../../assets/icon/search.svg";
import ThreatDetectionTable from "./ThreatDetectionTable";

const ThreatDetection = () => {
  return (
    <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex flex-col items-center justify-between gap-6 p-4 sm:flex-row sm:gap-3 sm:p-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-1 sm:justify-start sm:gap-2">
          <h5 className="whitespace-nowrap text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            Threat Detection
          </h5>
          <div className="flex items-center rounded-md bg-[#F238381A] px-2 py-1 sm:px-3">
            <p className="text-[10px] text-error sm:text-sm">
              8 open threats to review
            </p>
          </div>
        </div>
        <div className="flex h-10 w-full items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3 dark:border-[#E4E7EC1A] dark:bg-[#FFFFFF0F] sm:max-w-[384px]">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search Threats"
            className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-[#98A2B3] dark:text-white dark:placeholder:text-[#FFFFFF80]"
          />
        </div>
      </div>
      <div className="w-full pb-4 pl-4 sm:pb-6 sm:pl-6 sm:pr-6">
        <ThreatDetectionTable />
      </div>
    </div>
  );
};

export default ThreatDetection;
