import { rowData } from "@/data/threatTableData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import sortIcon from "../../../../assets/icon/sort.svg";

const ThreatDetectionTable = () => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-x-auto border border-[#0000001A] sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm text-text_secondary dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
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
              <th scope="col" className="p-4">
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
                className="border-b bg-white text-sm text-[#1880F0] dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="p-4 underline">{row.threatType}</td>
                <td className="p-4 underline">{row.platform}</td>
                <td className="w-[25%] p-4 underline">
                  <p className="line-clamp-1">{row.contentSummary}</p>
                </td>
                <td className="p-4 underline">{row.id}</td>
                <td
                  className={`p-4 ${
                    row.reach === "High"
                      ? "text-error"
                      : row.reach === "Low"
                        ? "text-text_secondary"
                        : "text-warning"
                  }`}
                >
                  {row.reach}
                </td>
                <td className="w-[20%] p-4">
                  <div className="flex items-center justify-between gap-1">
                    <button className="relative flex h-8 min-w-[110px] items-center justify-between rounded-md bg-error px-3 font-medium text-white">
                      Mitigate
                      <IoChevronDown />
                      {row.status && (
                        <span className="absolute inset-0 rounded-md bg-white opacity-40"></span>
                      )}
                    </button>
                    <button className="relative flex h-8 min-w-[110px] items-center justify-between rounded-md bg-success px-3 font-medium text-white">
                      Dismiss
                      <IoChevronDown />
                      {row.status && (
                        <span className="absolute inset-0 rounded-md bg-white opacity-40"></span>
                      )}
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  {row.status && (
                    <button
                      className={`flex h-8 w-[100px] items-center justify-center rounded-md px-3 font-medium ${
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
      <div className="mt-6 flex w-full items-center justify-center">
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronLeft size={22} className="text-[#667085]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000000F] text-sm font-medium text-secondary_main">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            4
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            5
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            ...
          </button>
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronRight size={20} className="text-secondary_main" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetectionTable;
