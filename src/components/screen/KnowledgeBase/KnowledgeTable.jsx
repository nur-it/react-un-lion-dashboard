import CategoryDropdown from "@/components/shared/CategoryDropdown";
// import { knowledgeTableData } from "@/data/knowledgeTableData";
import { FileWarning } from "lucide-react";
import { useEffect, useState } from "react";
import search from "../../../assets/icon/search.svg";
import FullKnowledgeTable from "./FullKnowledgeTable";
import useKnowledgeBase from "@/hooks/use-knowledge-base.jsx";

const KnowledgeTable = () => {
  const [categories] = useState([
    "All Time",
    "This Year",
    "This Month",
    "Past 3 Years",
  ]);

  const [knowledgeTableData, setKnowledgeData] = useState([]); // ✅ Define state for avatars
  const [filteredData, setFilteredData] = useState([]);
  const { fetchKnowledgeBase } = useKnowledgeBase();


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchKnowledgeBase(); // ✅ Fetch avatars
      setKnowledgeData(data); // ✅ Update state
      setFilteredData(data);
    };
    fetchData();
  }, []); // ✅ Run once on mount

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Filter by category");

  // Helper function to get the current year and month
  const getCurrentYearAndMonth = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // Months are zero-based
    return { currentYear, currentMonth };
  };

  // Handle category filtering
  useEffect(() => {
    const { currentYear, currentMonth } = getCurrentYearAndMonth();

    let data = knowledgeTableData;

    // Apply category filtering
    if (selectedCategory === "This Year") {
      data = data.filter((row) => {
        const rowYear = parseInt(row.timestamp.split("/")[2]);
        return rowYear === currentYear;
      });
    } else if (selectedCategory === "This Month") {
      data = data.filter((row) => {
        const [day, month, year] = row.timestamp.split("/").map(Number);
        return month === currentMonth && year === currentYear;
      });
    } else if (selectedCategory === "Past 3 Years") {
      data = data.filter((row) => {
        const rowYear = parseInt(row.timestamp.split("/")[2]);
        return rowYear >= currentYear - 3 && rowYear <= currentYear;
      });
    }

    // Apply search term filtering on top of the category filter
    const term = searchTerm.toLowerCase();
    if (term) {
      data = data.filter(
        (row) =>
          row.title.toLowerCase().includes(term) ||
          row.type.toLowerCase().includes(term) ||
          row.name.toLowerCase().includes(term) ||
          row.id.toLowerCase().includes(term),
      );
    }

    setFilteredData(data);
  }, [selectedCategory, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
          <CategoryDropdown
            options={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
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
