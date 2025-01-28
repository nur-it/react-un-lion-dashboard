import CategoryDropdown from "@/components/shared/CategoryDropdown";
import { knowledgeTableData } from "@/data/knowledgeTableData";
import { FileWarning } from "lucide-react";
import { useEffect, useState } from "react";
import search from "../../../assets/icon/search.svg";
import FullKnowledgeTable from "./FullKnowledgeTable";

const KnowledgeTable = () => {
  const [categories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ]);
  const [filteredData, setFilteredData] = useState(knowledgeTableData);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    if (term) {
      const filtered = knowledgeTableData.filter(
        (row) =>
          row.title.toLowerCase().includes(term) ||
          row.type.toLowerCase().includes(term) ||
          row.source.toLowerCase().includes(term) ||
          row.id.toLowerCase().includes(term),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(knowledgeTableData);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pb-5">
      <div className="mb-4 h-[1px] w-full bg-gray200 dark:bg-[#344054]"></div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h6 className="text-lg font-bold text-secondary_main dark:text-white">
          Information
        </h6>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="flex h-10 w-full items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3 dark:border-[#344054] dark:bg-[#FFFFFF0D] sm:max-w-[260px]">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search Knowledge Base"
              value={searchTerm}
              onChange={handleSearch}
              className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-[#98A2B3] dark:text-white dark:placeholder:text-[#FFFFFF99]"
            />
          </div>
          <CategoryDropdown options={categories} />
        </div>
      </div>
      <div>
        {/* Pass filtered data to the table */}
        {filteredData.length > 0 ? (
          <FullKnowledgeTable data={filteredData} />
        ) : (
          <div className="flex min-h-[400px] items-center justify-center gap-2 text-error dark:text-white">
            <FileWarning />
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeTable;
