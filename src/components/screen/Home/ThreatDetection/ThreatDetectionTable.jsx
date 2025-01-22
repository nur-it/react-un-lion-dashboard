import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { rowData } from "@/data/threatTableData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import sortIcon from "../../../../assets/icon/sort.svg";

const ThreatDetectionTable = () => {
  const [data, setData] = useState([...rowData]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  return (
    <div className="w-80 min-[430px]:w-[356px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto rounded-lg border border-[#0000001A] dark:border-[#FFFFFF1A]">
        <table className="w-full bg-white text-left text-sm text-gray-500 dark:bg-[#FFFFFF1A] dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm text-text_secondary dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
            <tr>
              {[
                { label: "Threat Type", key: "threatType" },
                { label: "Platform", key: "platform" },
                { label: "Content Summary", key: "contentSummary" },
                { label: "ID", key: "id" },
                { label: "Reach", key: "reach" },
                { label: "Action", key: "action" }, // No sorting for Action
                { label: "Status", key: "status" },
              ].map((column) => (
                <th key={column.key || column.label} className="p-4">
                  <div className="flex items-center justify-between">
                    {column.label}
                    {column.key && (
                      <button onClick={() => handleSort(column.key)}>
                        <img
                          src={sortIcon}
                          alt="sortIcon"
                          className={`${
                            sortConfig.key === column.key
                              ? sortConfig.direction === "asc"
                                ? "rotate-0"
                                : "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#1880F0] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
              >
                <td className="p-4 underline dark:no-underline">
                  {row.threatType}
                </td>
                <td className="p-4 underline dark:no-underline">
                  {row.platform}
                </td>
                <td className="w-[25%] p-4 underline dark:no-underline">
                  <p className="line-clamp-1">{row.contentSummary}</p>
                </td>
                <td className="p-4 underline dark:no-underline">{row.id}</td>
                <td
                  className={`p-4 ${
                    row.reach === "High"
                      ? "text-error"
                      : row.reach === "Low"
                        ? "text-text_secondary dark:text-white"
                        : "text-warning"
                  }`}
                >
                  {row.reach}
                </td>
                <td className="p-4">
                  <Select>
                    <SelectTrigger
                      className={cn(
                        "w-max",
                        row.status === "In Progress" &&
                          "bg-primary_main text-white dark:bg-primary_main dark:text-white",
                        row.status === "Dismissed" &&
                          "bg-success text-white dark:bg-success dark:text-white",
                        row.status === "Mitigated" &&
                          "bg-error text-white dark:bg-error dark:text-white",
                        row.status === "To Review" &&
                          "bg-primary_main text-white dark:bg-primary_main dark:text-white",
                      )}
                    >
                      <SelectValue placeholder={row.status} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="dismissed">Dismissed</SelectItem>
                      <SelectItem value="mitigated">Mitigated</SelectItem>
                      <SelectItem value="to-review">To Review</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4">
                  {row.status && (
                    <button
                      className={`flex h-8 w-[100px] cursor-not-allowed items-center justify-center rounded-md px-3 font-medium ${
                        row.status === "Mitigated"
                          ? "bg-error/[0.15] text-error"
                          : ""
                      } ${
                        row.status === "Dismissed"
                          ? "bg-[#0CAF6014] text-success"
                          : ""
                      } ${
                        row.status === "In Progress"
                          ? "bg-[#F38E001A] text-warning dark:bg-white/[0.08] dark:text-white"
                          : ""
                      } ${
                        row.status === "To Review"
                          ? "bg-[#0CAF6014] text-success"
                          : ""
                      } `}
                      disabled
                    >
                      {row.status}
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
            <PaginationPrevious to="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationItem>
              <PaginationLink to="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">3</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink to="#">4</PaginationLink>
          </PaginationItem>{" "}
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
export default ThreatDetectionTable;
