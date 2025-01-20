import CategoryDropdown from "@/components/shared/CategoryDropdown";
import search from "../../../assets/icon/search.svg";
// import FullKnowledgeTable from "./FullKnowledgeTable";

const KnowledgeTable = () => {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  return (
    <div className="pb-5">
      <div className="mb-4 h-[1px] w-full bg-gray200"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h6 className="text-lg font-bold text-secondary_main">Information</h6>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex h-10 w-full sm:max-w-[260px] items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search Threats"
              className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-[#98A2B3]"
            />
          </div>
          <CategoryDropdown options={categories} />
        </div>
      </div>
      <div>
        {/* <FullKnowledgeTable /> */}
      </div>
    </div>
  );
};

export default KnowledgeTable;
