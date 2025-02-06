import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import useDashboard from "@/hooks/use-dashboard";
import { exportToCSV, exportToJSON } from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import StatisticChart from "./StatisticChart";

const Statistic = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { getStatisticsData } = useDashboard(); // ✅ Define state for avatars
  const [statisticsData, setStatisticsData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStatisticsData();
        if (data && data.labels && data.datasets) {
          setStatisticsData(data);
        } else {
          console.error("❌ Invalid data structure:", data);
        }
      } catch (error) {
        console.error("❌ Error fetching statistic data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDownloadClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDownload = (format) => {
    if (format === "json") {
      exportToJSON(statisticsData);
    } else if (format === "csv") {
      exportToCSV(statisticsData);
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

  const riskCategories = [
    { label: "High Risk", color: "#F23838" },
    { label: "Medium Risk", color: "#E38604" },
    { label: "Low Risk", color: "#0CAF60" },
    { label: "Mitigated Risk", color: "#665CF3" },
  ];

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex w-full items-center justify-between gap-3">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Statistic
        </h5>
        <div className="flex items-center gap-3">
          {/* <DateRangePicker /> */}
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3 dark:border-[#FFFFFF4D]"
              onClick={() => handleDownload("csv")}
            >
              <img src={downloadIcon} alt="Download" />
            </button>
            {/*  {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-[#282C3F] shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left text-sm dark:hover:bg-black hover:bg-gray-100"
                  onClick={() => handleDownload("json")}
                >
                  JSON
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm dark:hover:bg-black hover:bg-gray-100"
                  onClick={() => handleDownload("csv")}
                >
                  CSV
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {riskCategories.map((category, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: category.color }}
            ></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              {category.label}
            </p>
          </div>
        ))}
      </div>
      <StatisticChart />
    </div>
  );
};

export default Statistic;
