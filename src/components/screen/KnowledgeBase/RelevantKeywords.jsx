import { FiPlus } from "react-icons/fi";
import info from "../../../assets/icon/information-circle.svg";
const RelevantKeywords = () => {
  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1 sm:gap-1.5">
          <p className="text-base font-medium text-secondary_main dark:text-white sm:text-lg">
            Relevant Keywords
          </p>
          <img src={info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:col-span-6">
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#473BF012] px-2.5 py-1.5 text-sm font-medium text-primary_main dark:border dark:border-[#FFFFFF99] dark:bg-transparent dark:text-[#FFFFFFCC]">
        <FiPlus size={16} />
          Best Price
        </button>
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#473BF012] px-2.5 py-1.5 text-sm font-medium text-primary_main dark:border dark:border-[#FFFFFF99] dark:bg-transparent dark:text-[#FFFFFFCC]">
        <FiPlus size={16} />
          Low Price
        </button>
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-primary_main px-2.5 py-1.5 text-sm font-medium text-white ">
          <FiPlus size={16} />
          Add keyword
        </button>
      </div>
    </div>
  );
};

export default RelevantKeywords;
