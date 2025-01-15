import RelevantKeywords from "./RelevantKeywords";
import TrustedOnlineSources from "./TrustedOnlineSources";

const InitialInformation = () => {
  return (
    <div className="pb-6">
      <div className="mb-8 h-[1px] w-full bg-gray200"></div>
      <RelevantKeywords />
      <div className="my-8 h-[1px] w-full bg-gray200"></div>
      <TrustedOnlineSources />
    </div>
  );
};

export default InitialInformation;
