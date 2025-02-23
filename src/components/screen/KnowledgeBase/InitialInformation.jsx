import RelevantKeywords from "./RelevantKeywords";
import TrustedOnlineSources from "./TrustedOnlineSources";
import UpdateInitialDocument from "./UpdateInitialDocument";

const InitialInformation = () => {
  return (
    <div className="pb-6">
      <div className="mb-8 h-[1px] w-full bg-gray200 dark:bg-[#344054]"></div>
      <RelevantKeywords />
      <div className="my-8 h-[1px] w-full bg-gray200 dark:bg-[#344054]"></div>
      <TrustedOnlineSources />
      <div className="my-8 h-[1px] w-full bg-gray200 dark:bg-[#344054]"></div>
      <UpdateInitialDocument />
    </div>
  );
};

export default InitialInformation;
