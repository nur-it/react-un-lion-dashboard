import Toggle from "@/components/shared/Toggle";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Function to handle sorting
  const requestSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return { key, direction: "ascending" };
    });
  };

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
  }, [sortConfig]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-[270px] mt-6 min-[375px]:w-[300px] min-[425px]:w-[350px] min-[430px]:w-[356px] sm:w-[540px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-lg">
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
                          className={`mt-[-16px] ${
                            sortConfig.key === header &&
                            sortConfig.direction === "descending"
                              ? "text-[#687588]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </th>
                )
              )}

              <th scope="col" className="w-[5%] p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#101828] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
              >
                <td className="whitespace-nowrap p-4 w-[20%]">{row.title}</td>
                <td className="whitespace-nowrap p-4 w-[20%]">{row.type}</td>
                <td className="p-4 w-[20%]">{row.date}</td>
                <td className="whitespace-nowrap p-4 w-[20%]">{row.source}</td>
                <td className="p-4 w-[15%]">
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
            <PaginationPrevious
              to="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            />
          </PaginationItem>
          {getPageNumbers().map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <span className="px-2">...</span>
              ) : (
                <PaginationLink
                  to="#"
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              to="#"
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FullKnowledgeTable;
