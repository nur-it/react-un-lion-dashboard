import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import { exportToCSV, exportToJSON } from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import StatisticChart from "./StatisticChart";

const Statistic = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown visibility
  const handleDownloadClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle download actions
  const handleDownload = (format) => {
    const chartData = {
      labels: [
        "Jan 10",
        "Jan 11",
        "Jan 12",
        "Jan 13",
        "Jan 14",
        "Jan 15",
        "Jan 16",
      ],
      datasets: [
        {
          label: "High Risk",
          data: [20, 15, 20, 20, 25, 15, 22],
        },
        {
          label: "Positive",
          data: [10, 10, 15, 10, 15, 10, 10],
        },
        {
          label: "Negative",
          data: [40, 20, 30, 30, 45, 40, 35],
        },
        {
          label: "Mitigated Risk",
          data: [30, 15, 20, 25, 40, 25, 25],
        },
      ],
    };

    if (format === "json") {
      exportToJSON(chartData);
    } else if (format === "csv") {
      exportToCSV(chartData);
    }

    setShowDropdown(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex w-full items-center justify-between gap-3">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Statistic
        </h5>
        <div className="flex items-center gap-3">
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3"
              onClick={handleDownloadClick}
            >
              <img src={downloadIcon} alt="Download" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  onClick={() => handleDownload("json")}
                >
                  JSON
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  onClick={() => handleDownload("csv")}
                >
                  CSV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <StatisticChart />
    </div>
  );
};

export default Statistic;
