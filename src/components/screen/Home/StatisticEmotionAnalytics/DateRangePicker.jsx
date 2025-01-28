import { Calendar } from "@/components/ui/calendar";
import { useEffect, useRef, useState } from "react";

const DateRangePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today
  const [tempDate, setTempDate] = useState(new Date()); // Store temporary selection
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  // Format date as "DD/MM/YY"
  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB");
  };

  // Apply button sets the selected date and closes the dropdown
  const handleApply = () => {
    setSelectedDate(tempDate);
    setIsCalendarOpen(false);
  };

  // Cancel button closes the dropdown without changing the date
  const handleCancel = () => {
    setTempDate(selectedDate); // Reset to previously selected date
    setIsCalendarOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  return (
    <div className="relative" ref={calendarRef}>
      {/* Button to trigger calendar */}
      <div
        className="flex h-9 min-w-[123px] cursor-pointer items-center justify-center rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm text-[#4A5773] dark:border-[#FFFFFF4D] dark:bg-[#FFFFFF05] dark:text-white"
        onClick={() => setIsCalendarOpen(true)}
      >
        {formatDate(selectedDate)}
      </div>

      {/* Calendar Popup */}
      {isCalendarOpen && (
        <div
          ref={calendarRef} // Add reference here to detect outside clicks
          className="absolute right-[-16px] z-10 mt-2 rounded-lg border border-[#DADDE5] bg-white shadow-lg dark:border-black dark:bg-black dark:text-white sm:right-0"
        >
          <Calendar mode="single" selected={tempDate} onSelect={setTempDate} />

          {/* Buttons for Apply and Cancel */}
          <div className="flex justify-between gap-4 border-t border-[#E2E4E9] p-2 dark:border-[#FFFFFF33] sm:p-4">
            <button
              className="w-full rounded-lg border border-[#E2E4E9] bg-white px-6 py-1.5 text-sm text-[#525866] dark:bg-black dark:text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="w-full rounded-lg bg-primary_main px-6 py-1.5 text-sm text-white"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
