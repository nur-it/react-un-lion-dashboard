import Toggle from "@/components/shared/Toggle";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { knowledgeTableData } from "@/data/knowledgeTableData";
import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import writeIcon from "../../../assets/icon/pencil.svg";

const FullKnowledgeTable = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...knowledgeTableData];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [knowledgeTableData, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="mt-6 w-80 min-[375px]:w-[300px] min-[425px]:w-[350px] min-[430px]:w-[356px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto border border-[#0000001A] dark:border-[#FFFFFF1A] sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm font-bold text-[#4A5773] dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
            <tr>
              {["title", "type", "date", "source", "isActive"].map(
                (header, index) => (
                  <th key={index} scope="col" className="p-4">
                    <div className="flex items-center justify-between">
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                      <button
                        onClick={() => requestSort(header)}
                        className="flex flex-col items-center"
                      >
                        <FaSortUp
                          size={16}
                          className={`${
                            sortConfig.key === header &&
                            sortConfig.direction === "ascending"
                              ? "text-[#687588]"
                              : "text-gray-400"
                          }`}
                        />
                        <FaSortDown
                          size={16}
                          className={`mt-[-14px] ${
                            sortConfig.key === header &&
                            sortConfig.direction === "descending"
                              ? "text-[#687588]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </th>
                ),
              )}

              <th scope="col" className="w-[5%] p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#101828] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
              >
                <td className="whitespace-nowrap p-4">{row.title}</td>
                <td className="whitespace-nowrap p-4">{row.type}</td>
                <td className="p-4">{row.data}</td>
                <td className="whitespace-nowrap p-4">{row.source}</td>
                <td className="p-4">
                  <Toggle initialActive={row.isActive} />
                </td>
                <td className="p-4">
                  <button>
                    <img src={writeIcon} alt="writeIcon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious to="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext to="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FullKnowledgeTable;
