import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import { downloadMentionCSV, downloadMentionJSON } from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import MentionChart from "./MentionChart";

const Mentions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const mentionData = [
    { platform: "Youtube", value: [10, 30, 35, 19, 25, 18, 10] },
    { platform: "Facebook", value: [30, 35, 39, 30, 42, 30, 50] },
    { platform: "X", value: [50, 45, 50, 45, 55, 53, 75] },
    { platform: "TikTok", value: [30, 62, 55, 55, 62, 62, 30] },
    { platform: "Instagram", value: [75, 55, 75, 50, 78, 70, 78] },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
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

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Mentions
        </h5>
        <div className="flex items-center gap-3">
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
          {/* Download button */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-[#FFFFFF05] px-3 dark:border-[#FFFFFF4D]"
            >
              <img src={downloadIcon} alt="Download" />
            </button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 z-10 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-[#282C3F]"
              >
                <button
                  onClick={() => downloadMentionJSON(mentionData)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                >
                  JSON
                </button>
                <button
                  onClick={() => downloadMentionCSV(mentionData)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                >
                  CSV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {[
          { color: "bg-error", platform: "Youtube" },
          { color: "bg-blue_dodger", platform: "Facebook" },
          { color: "bg-warning", platform: "X" },
          { color: "bg-success", platform: "TikTok" },
          { color: "bg-pink_main", platform: "Instagram" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div className={`h-2.5 w-2.5 rounded-full ${item.color}`}></div>
            <p className="text-xs font-normal text-text_secondary dark:text-white/[80%]">
              {item.platform}
            </p>
          </div>
        ))}
      </div>

      <MentionChart />
    </div>
  );
};

export default Mentions;
