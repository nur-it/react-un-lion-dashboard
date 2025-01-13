import ThreatDetectionTable from "./ThreatDetectionTable";

const ThreatDetection = () => {
  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold text-secondary_main dark:text-white">
          Threat Detection
        </h5>
      </div>
      <ThreatDetectionTable />
    </div>
  );
};

export default ThreatDetection;
