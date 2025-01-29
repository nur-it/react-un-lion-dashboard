import { Button } from "@/components/ui/button";
import { rowData } from "@/data/threatTableData";
import { FileWarning } from "lucide-react";
import { useEffect, useState } from "react";
import search from "../../../../assets/icon/search.svg";
import ThreatDetectionTable from "./ThreatDetectionTable";

const ThreatDetection = () => {
  const [openThreatsCount, setOpenThreatsCount] = useState(0);
  const [filteredData, setFilteredData] = useState(rowData);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate the initial count of open threats
  useEffect(() => {
    const count = rowData.filter((row) => !row.action).length;
    setOpenThreatsCount(count);
  }, []);

  // Update filtered data whenever searchTerm or rowData changes
  useEffect(() => {
    if (searchTerm) {
      const filtered = rowData.filter(
        (row) =>
          row.threatType.toLowerCase().includes(searchTerm) ||
          row.platform.toLowerCase().includes(searchTerm) ||
          row.contentSummary.toLowerCase().includes(searchTerm) ||
          row.id.toLowerCase().includes(searchTerm),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(rowData);
    }
  }, [searchTerm]);

  // Update the count when an action is performed
  const handleAction = (id) => {
    const threatIndex = rowData.findIndex((row) => row.id === id);
    if (threatIndex !== -1) {
      rowData[threatIndex].action = true;
      const count = rowData.filter((row) => !row.action).length;
      setOpenThreatsCount(count);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white dark:border-white/[10%] dark:bg-white/[4%]">
      <div className="flex flex-col items-center justify-between gap-6 p-4 sm:gap-3 sm:p-6 md:items-start xl:flex-row xl:items-center">
        <div className="flex w-full flex-wrap items-center justify-between gap-1 sm:justify-start sm:gap-2">
          <h5 className="whitespace-nowrap text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            Threat Detection
          </h5>
          <div className="flex items-center rounded-md bg-[#F238381A] px-2 py-1 sm:px-3">
            <p className="text-[10px] text-error sm:text-sm">
              {openThreatsCount} open threats to review
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-full flex-1 items-center gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-2 py-3 dark:border-[#E4E7EC1A] dark:bg-[#FFFFFF0F] sm:max-w-[384px] sm:px-4 xl:min-w-[384px]">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search Threats"
              value={searchTerm}
              onChange={handleSearch}
              className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-[#98A2B3] dark:text-white dark:placeholder:text-[#FFFFFF80]"
            />
          </div>
          <Button className="max-h-10">Detect a Threats</Button>
        </div>
      </div>
      <div className="w-full pb-4 pl-4 sm:pb-6 sm:pl-6 sm:pr-6">
        {filteredData.length > 0 ? (
          <ThreatDetectionTable onAction={handleAction} data={filteredData} />
        ) : (
          <div className="flex min-h-[400px] items-center justify-center gap-2 text-error dark:text-white">
            <FileWarning />
            No threats found
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreatDetection;
