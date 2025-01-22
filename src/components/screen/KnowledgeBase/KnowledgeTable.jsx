import CategoryDropdown from "@/components/shared/CategoryDropdown";
import search from "../../../assets/icon/search.svg";
import FullKnowledgeTable from "./FullKnowledgeTable";

const KnowledgeTable = () => {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  return (
    <div className="pb-5">
      <div className="mb-4 h-[1px] w-full bg-gray200 dark:bg-[#344054]"></div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h6 className="text-lg font-bold text-secondary_main dark:text-white">
          Information
        </h6>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-10 w-full items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3 dark:border-[#344054] dark:bg-[#FFFFFF0D] sm:max-w-[260px]">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search Threats"
              className="h-full w-full bg-transparent text-sm dark:text-white text-black outline-none placeholder:text-[#98A2B3] dark:placeholder:text-[#FFFFFF99]"
            />
          </div>
          <CategoryDropdown options={categories} />
        </div>
      </div>
      <div>
        <FullKnowledgeTable />
      </div>
    </div>
  );
};

export default KnowledgeTable;
