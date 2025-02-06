import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import useDashboard from "@/hooks/use-dashboard.jsx";
import { exportToCSV, exportToJSON } from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import SentimentBarChart from "./SentimentBarChart";

const Sentiment = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const { getSentimentsData } = useDashboard();
  const [sentimentsData, setSentimentsData] = useState([]); // ✅ Define state for avatars

  useEffect(() => {
    const fetchData = async () => {
      const dataF = await getSentimentsData(); // ✅ Fetch avatars
      setSentimentsData(dataF); // ✅ Update state
    };
    fetchData();
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDownload = (format) => {
    const title = "sentiment-data";
    if (format === "json") {
      exportToJSON(sentimentsData);
    } else if (format === "csv") {
      exportToCSV(sentimentsData, title);
    }

    setShowDropdown(false);
  };
  return (
    <div>
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            Sentiment
          </h5>
          <div className="flex items-center gap-3">
            <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
            {/* <DateRangePicker /> */}
            {/* Download button */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => handleDownload("csv")}
                className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3 dark:border-[#FFFFFF4D]"
              >
                <img src={downloadIcon} alt="Download" />
              </button>
              {/*  {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-[#282C3F]"
                >
                  <button
                    onClick={() => downloadAsJson(sentimentsData)}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  >
                    JSON
                  </button>
                  <button
                    onClick={() => downloadAsCsv(sentimentsData)}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  >
                    CSV
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#4A5773]"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Neutral
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-success"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Positive
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-error"></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              Negative
            </p>
          </div>
        </div>
        <div>
          <SentimentBarChart />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
