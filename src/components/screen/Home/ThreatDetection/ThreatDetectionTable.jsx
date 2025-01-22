import { rowData } from "@/data/threatTableData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
                <td className="w-[20%] p-4">
                  <div className="flex items-center justify-between gap-1">
                    <button className="relative flex h-8 min-w-[110px] items-center justify-between rounded-md bg-error px-3 font-medium text-white dark:bg-opacity-50">
                      Mitigate
                      <IoChevronDown />
                      {row.status && (
                        <span className="absolute inset-0 rounded-md bg-white opacity-40 dark:hidden"></span>
                      )}
                    </button>
                    <button className="relative flex h-8 min-w-[110px] items-center justify-between rounded-md bg-success px-3 font-medium text-white dark:bg-opacity-50">
                      Dismiss
                      <IoChevronDown />
                      {row.status && (
                        <span className="absolute inset-0 rounded-md bg-white opacity-40 dark:hidden"></span>
                      )}
                    </button>
                  </div>
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
      <div className="mt-6 flex w-full items-center justify-center">
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronLeft size={22} className="text-[#667085]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000000F] text-sm font-medium text-secondary_main dark:bg-[#FFFFFF0F] dark:text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary dark:text-white">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary dark:text-white">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary dark:text-white">
            4
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary dark:text-white">
            5
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary dark:text-white">
            ...
          </button>
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronRight
              size={20}
              className="text-secondary_main dark:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetectionTable;
