import { rowData } from "@/data/threatTableData";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IoChevronDown } from "react-icons/io5";
import sortIcon from "../../../../assets/icon/sort.svg";

const ThreatDetectionTable = () => {
  return (
    <div className="w-80 min-[430px]:w-[356px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto rounded-lg border border-[#0000001A] dark:border-[#FFFFFF1A]">
        <table className="w-full bg-white text-left text-sm text-gray-500 dark:bg-[#FFFFFF1A] dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm text-text_secondary dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
            <tr>
              <th scope="col" className="min-w-40 p-4 xl:min-w-max">
                <div className="flex items-center justify-between">
                  Threat Type
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center justify-between">
                  Platform
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="min-w-60 p-4 xl:min-w-max">
                <div className="flex items-center justify-between">
                  Content Summary
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center justify-between">
                  ID
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center justify-between">
                  Reach
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center justify-between">
                  Action
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center justify-between">
                  Status
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
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
                  <button className="relative flex h-8 min-w-[110px] items-center justify-between rounded-md bg-error px-3 font-medium text-white dark:bg-opacity-50">
                    Mitigate
                    <IoChevronDown />
                  </button>
                </td>
                <td className="p-4">
                  {row.status && (
                    <button
                      className={`flex h-8 w-[100px] cursor-pointer items-center justify-center rounded-md px-3 font-medium ${
                        row.status === "Mitigated"
                          ? "bg-[#473BF01A] text-primary_main"
                          : ""
                      } ${
                        row.status === "Dismissed"
                          ? "bg-[#0CAF6014] text-success"
                          : ""
                      } ${
                        row.status === "In Progress"
                          ? "bg-[#F38E001A] text-warning"
                          : ""
                      }`}
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
