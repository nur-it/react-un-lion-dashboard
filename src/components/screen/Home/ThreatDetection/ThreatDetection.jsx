import ThreatDetectionTable from "./ThreatDetectionTable";

const ThreatDetection = () => {
  return (
    <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h5 className="text-xl font-bold text-secondary_main dark:text-white">
            Threat Detection
          </h5>
          <div className="flex items-center bg-[#F238381A] px-3 py-1 rounded-md">
            <p className="text-sm text-error">8 open threats to review</p>
          </div>
        </div>
        <div className="max-w-[384px] h-10 flex items-center gap-2.5 px-4 bg-[#0000000F] border border-gray300">

        </div>
      </div>
      <div>
        <ThreatDetectionTable />
      </div>
    </div>
  );
};

export default ThreatDetection;
