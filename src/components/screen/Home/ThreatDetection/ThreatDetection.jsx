import search from "../../../../assets/icon/search.svg";
// import ThreatDetectionTable from "./ThreatDetectionTable";

const ThreatDetection = () => {
  return (
    <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-3 p-4 sm:p-6">
        <div className="w-full flex items-center justify-between sm:justify-start gap-1 sm:gap-2">
          <h5 className="text-lg sm:text-xl font-bold text-secondary_main dark:text-white whitespace-nowrap">
            Threat Detection
          </h5>
          <div className="flex items-center rounded-md bg-[#F238381A] px-2 sm:px-3 py-1">
            <p className="text-[10px] sm:text-sm text-error">8 open threats to review</p>
          </div>
        </div>
        <div className="flex h-10 w-full sm:max-w-[384px] items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search Threats"
            className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-[#98A2B3]"
          />
        </div>
      </div>
      <div className="">
        {/* <ThreatDetectionTable /> */}
      </div>
      
    </div>
  );
};

export default ThreatDetection;
