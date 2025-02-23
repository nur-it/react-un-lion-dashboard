import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import TableActionDropdown from "./TableActionDropdown";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useDashboard from "@/hooks/use-dashboard";
import { Link } from "react-router";

const ThreatDetectionTable = ({ data, onAction }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [disabledRows, setDisabledRows] = useState({});
  const itemsPerPage = 4;
  const [status, setStatus] = useState({});
  const [newStatus, setNewStatus] = useState({});
  const { mitigate } = useDashboard();

  const requestSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.direction === "ascending") {
          return {
            key,
            direction: "descending",
          };
        } else if (prev.direction === "descending") {
          return {
            key: null, // Reset sorting
            direction: null,
          };
        }
      }
      return { key, direction: "ascending" };
    });
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];

    // Apply sorting logic
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
  }, [sortConfig, data]);

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
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pageNumbers;
  };

  const paginatedData = React.useMemo(() => {
    // Apply pagination after sorting
    return sortedData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [sortedData, currentPage, itemsPerPage]);

  const columns = [
    { header: "Threat Type", key: "threatType" },
    { header: "Platform", key: "platform" },
    { header: "Content Summary", key: "contentSummary" },
    { header: "ID", key: "id" },
    { header: "Reach", key: "level" },
    { header: "Action", key: "action" },
    { header: "Status", key: "status" },
  ];

  const handleDropdownChange = (id, index, newStatus) => {
    setDisabledRows((prev) => ({
      ...prev,
      [id]: true, // Disable only the specific row's dropdown using id
    }));
    setStatus({ id, newStatus });

    // Set the "In Progress" status immediately
    setNewStatus((prev) => ({
      ...prev,
      [id]: "In Progress",
    }));

    // Simulate the final status change after 1 second
    setTimeout(() => {
      setNewStatus((prev) => {
        const updatedStatus =
          newStatus === "Mitigate" ? "Mitigated" : "Dismissed";

        // Update the data action field using id
        const rowIndex = data.findIndex((row) => row.id === id);
        if (rowIndex !== -1) {
          data[rowIndex].action = true;
        }

        onAction(id);

        return {
          ...prev,
          [id]: updatedStatus,
        };
      });
    }, 1000);

    if (newStatus === "Mitigate") {
      mitigate({ index, action_id: id });
    }
  };

  const date = new Date().toLocaleDateString("en-US", "dd/mm/yyyy");

  return (
    <div className="w-[270px] min-[375px]:w-[300px] min-[425px]:w-[350px] min-[430px]:w-[356px] sm:w-[540px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto rounded-lg border border-[#0000001A] dark:border-[#FFFFFF1A]">
        <table className="w-full bg-white text-left text-sm text-gray-500 dark:bg-[#FFFFFF1A] dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm text-text_secondary dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
            <tr>
              {columns.map(({ header, key }) => (
                <th key={key} scope="col" className="whitespace-nowrap p-4">
                  <div className="flex items-center justify-between gap-1">
                    {header}
                    <button
                      onClick={() => requestSort(key)}
                      className="flex flex-col items-center"
                    >
                      <FaSortUp
                        size={16}
                        className={`${
                          sortConfig.key === key &&
                          sortConfig.direction === "ascending"
                            ? "text-[#687588]"
                            : "text-gray-400"
                        }`}
                      />
                      <FaSortDown
                        size={16}
                        className={`mt-[-16px] ${
                          sortConfig.key === key &&
                          sortConfig.direction === "descending"
                            ? "text-[#687588]"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#1880F0] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
              >
                <td className="w-[12%] p-4 transition-all duration-300 ease-in-out hover:underline">
                  <Link to={row.url}>{row.threatType}</Link>
                </td>
                <td className="w-[12%] p-4 transition-all duration-300 ease-in-out hover:underline">
                  <Link to={row.url}>{row.platform}</Link>
                </td>
                <td className="w-[26%] p-4 transition-all duration-300 ease-in-out hover:underline">
                  <Link
                    className="line-clamp-1"
                    to={row.contentSummary ? row.url : "#"}
                  >
                    {row.contentSummary ? row.contentSummary : "N/A"}
                  </Link>
                </td>
                <td className="w-[10%] p-4 transition-all duration-300 ease-in-out hover:underline">
                  <Link to={row.url}>{row.id}</Link>
                </td>
                <td
                  className={`w-[10%] p-4 ${
                    row.level === "high"
                      ? "text-error"
                      : row.level === "low"
                        ? "text-text_secondary dark:text-white"
                        : "text-warning"
                  }`}
                >
                  {row.level}
                </td>
                <td className="flex items-center justify-between gap-2 p-4">
                  <TableActionDropdown
                    options={{
                      value: "Mitigated",
                      items: ["Mitigate", "Mitigate 2"],
                    }}
                    initialStatus={"Mitigate"}
                    onStatusChange={
                      (newStatus) =>
                        handleDropdownChange(row.id, index, newStatus) // Pass row.id to the handler
                    }
                    isDisabled={!!disabledRows[row.id]} // Disable using row.id
                  />
                  <TableActionDropdown
                    options={{
                      value: "Dismissed",
                      items: ["Dismiss", "Dismiss 2"],
                    }}
                    initialStatus={"Dismiss"}
                    onStatusChange={
                      (newStatus) =>
                        handleDropdownChange(row.id, index, newStatus) // Pass row.id to the handler
                    }
                    isDisabled={!!disabledRows[row.id]} // Disable using row.id
                  />
                </td>
                <td className="w-[13%] p-4">
                  {newStatus[row.id] && (
                    <button
                      className={`flex h-8 w-[100px] cursor-pointer items-center justify-center rounded-md px-3 font-medium ${
                        newStatus[row.id] === "Mitigated"
                          ? "bg-[#473BF01A] text-primary_main"
                          : ""
                      } ${
                        newStatus[row.id] === "Dismissed"
                          ? "bg-[#0CAF6014] text-success"
                          : ""
                      } ${
                        newStatus[row.id] === "In Progress"
                          ? "bg-[#F38E001A] text-warning dark:bg-white/[0.08] dark:text-white"
                          : ""
                      }`}
                    >
                      <Tooltip>
                        <TooltipTrigger>{newStatus[row.id]}</TooltipTrigger>
                        <TooltipContent
                          side="top"
                          fillColor="#030303"
                          className="max-w-[142px] rounded-md border-secondary_main bg-[#030303] text-center text-xs text-white dark:bg-[#161b2f]"
                        >
                          {newStatus[row.id]} was initiated on {date}
                        </TooltipContent>
                      </Tooltip>
                    </button>
                  )}
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

export default ThreatDetectionTable;
