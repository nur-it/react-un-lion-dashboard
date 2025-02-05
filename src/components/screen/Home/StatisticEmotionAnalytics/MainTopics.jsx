// import { topics } from "@/data/topicsData";
import {
  exportMainTopicToCSV,
  exportMainTopicToJSON,
} from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import DateRangePicker from "./DateRangePicker";
import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import useDashboard from "@/hooks/use-dashboard.jsx";

const MainTopics = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [topics, setTopicsData] = useState([]); // ✅ Define state for avatars
  const { getWordCloudData } = useDashboard();


  useEffect(() => {
    const fetchData = async () => {
      const data = await getWordCloudData(); // ✅ Fetch avatars
      setTopicsData(data); // ✅ Update state
    };
    fetchData();
  }, []); // ✅ Run once on mount

  const handleDownloadClick = () => {
    setShowDropdown(!showDropdown);
  };

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

  const exportEmotionToJSON = () => {
    exportMainTopicToJSON(topics);
  };

  const exportEmotionToCSV = () => {
    exportMainTopicToCSV(topics);
  };

  const getTextStyle = (value, color) => {
    let textSize = "";
    let fontWeight = "normal";

    if (color === "#F23838") {
      if (value >= 70) textSize = "text-2xl font-bold";
      else if (value >= 40) textSize = "text-base font-bold";
      else textSize = "text-xl font-bold";
    } else if (color === "#0CAF60") {
      if (value >= 70) textSize = "text-lg font-bold";
      else if (value >= 40) textSize = "text-base normal";
      else textSize = "text-xl font-bold";
    } else {
      if (value >= 70) textSize = "text-sm normal";
      else if (value >= 40) textSize = "text-sm medium";
      else textSize = "text-xl font-bold";
    }

    return `${textSize} ${fontWeight}`;
  };

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Main Topics
        </h5>
        <div className="flex items-center gap-3">
          {/* <DateRangePicker /> */}
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3 dark:border-[#FFFFFF4D]"
              onClick={exportEmotionToCSV}
            >
              <img src={downloadIcon} alt="Download" />
            </button>
            {/*   {showDropdown && (
              <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-[#282C3F]">
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  onClick={exportEmotionToJSON}
                >
                  JSON
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  onClick={exportEmotionToCSV}
                >
                  CSV
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 2xl:gap-x-6 2xl:gap-y-5">
        {topics.map(([text, value, color], index) => (
          <p
            key={index}
            className={getTextStyle(value, color)}
            style={{ color: color }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainTopics;
