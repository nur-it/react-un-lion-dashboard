import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import SentimentBarChart from "./SentimentBarChart";

const Sentiment = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);  // Ref for the dropdown container
  const buttonRef = useRef(null);  // Ref for the button

  const datasets = {
    labels: [
      "Jan 10",
      "Jan 11",
      "Jan 12",
      "Jan 13",
      "Jan 14",
      "Jan 15",
      "Jan 16",
    ],
    data: [
      { label: "Neutral", values: [125, 100, 140, 105, 105, 115, 105] },
      { label: "Positive", values: [40, 20, 20, 20, 25, 30, 20] },
      { label: "Negative", values: [25, 25, 25, 35, 30, 35, 30] },
    ],
  };

  // Utility function to download the file
  const downloadFile = (data, format) => {
    const blob = new Blob([data], {
      type: format === "json" ? "application/json" : "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `datasets.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Convert datasets to JSON
  const downloadAsJson = () => {
    const jsonData = JSON.stringify(datasets, null, 2);
    downloadFile(jsonData, "json");
  };

  // Convert datasets to CSV
  const downloadAsCsv = () => {
    const headers = ["Label", ...datasets.labels].join(",");
    const rows = datasets.data.map((dataset) =>
      [dataset.label, ...dataset.values].join(","),
    );
    const csvData = [headers, ...rows].join("\n");
    downloadFile(csvData, "csv");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
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
    <div>
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            Sentiment
          </h5>
          <div className="flex items-center gap-3">
            <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
            {/* Download button */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3"
              >
                <img src={downloadIcon} alt="Download" />
              </button>
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg"
                >
                  <button
                    onClick={downloadAsJson}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    JSON
                  </button>
                  <button
                    onClick={downloadAsCsv}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    CSV
                  </button>
                </div>
              )}
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
