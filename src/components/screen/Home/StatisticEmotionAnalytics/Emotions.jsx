import TimePeriodDropdown from "@/components/shared/TimePeriodDropdown";
import useDashboard from "@/hooks/use-dashboard.jsx";
import { exportEmotionToCSV } from "@/utils/exportUtils";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "../../../../assets/icon/download.svg";
import EmotionsChart from "./EmotionsChart";
import { Skeleton } from "@/components/ui/skeleton";

const Emotions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { getEmotionsData, isLoading } = useDashboard();
  const [emotions, setEmotions] = useState([]); // ✅ Define state for avatars

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmotionsData(); // ✅ Fetch avatars
      setEmotions(data); // ✅ Update state
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

   if (isLoading) {
     return (
       <div className="min-h-[418px] space-y-5 bg-white p-4 dark:bg-white/[4%]">
         <Skeleton className="h-20 w-full" />
         <Skeleton className="h-10 w-full" />
         <Skeleton className="h-20 w-full" />
         <Skeleton className="h-10 w-full" />
         <Skeleton className="h-20 w-full" />
       </div>
     );
   }

  return (
    <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 dark:border-white/[10%] dark:bg-white/[4%] sm:p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
          Emotions
        </h5>
        <div className="flex items-center gap-3">
          {/* <DateRangePicker /> */}
          <TimePeriodDropdown options={["Weekly", "Monthly", "Yearly"]} />
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex h-9 items-center justify-center rounded-lg border border-gray300 bg-[#FFFFFF05] px-3 dark:border-[#FFFFFF4D]"
              onClick={() => exportEmotionToCSV(emotions)}
            >
              <img src={downloadIcon} alt="Download" />
            </button>
            {/*  {showDropdown && (
              <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-[#282C3F]">
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  onClick={() => exportEmotionToJSON(emotions)}
                >
                  JSON
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-black"
                  onClick={() => exportEmotionToCSV(emotions)}
                >
                  CSV
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <EmotionsChart />
      {/*<EmotionsChart emotions={emotions} />*/}
    </div>
  );
};

export default Emotions;
