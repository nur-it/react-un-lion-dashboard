import { FiPlus } from "react-icons/fi";
import info from "../../../assets/icon/information-circle.svg";
const RelevantKeywords = () => {
  return (
    <div className="grid grid-cols-9 gap-10">
      <div className="col-span-3">
        <div className="relative flex items-center gap-1.5">
          <p className="text-lg font-medium text-secondary_main">
            Relevant Keywords
          </p>
          <img src={info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="col-span-6 flex items-center gap-2">
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#473BF012] px-2.5 py-1.5 text-sm font-medium text-primary_main">
          <FiPlus />
          Best Price
        </button>
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-[#473BF012] px-2.5 py-1.5 text-sm font-medium text-primary_main">
          <FiPlus />
          Low Price
        </button>
        <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-primary_main px-2.5 py-1.5 text-sm font-medium text-white">
          <FiPlus />
          Add keyword
        </button>
      </div>
    </div>
  );
};

export default RelevantKeywords;
