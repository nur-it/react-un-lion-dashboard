import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null); 
  const [tempEndDate, setTempEndDate] = useState(null); 
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Handle when a date range is selected
  const handleSelectDates = (dates) => {
    const [start, end] = dates;
    setTempStartDate(start);  
    setTempEndDate(end);    
  };

  // Apply the selected dates
  const handleApply = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    setIsCalendarOpen(false);
  };

  // Cancel the date selection
  const handleCancel = () => {
    setIsCalendarOpen(false);
  };

  // Format date in 'Jan 10' style
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative">
      <div
        className="flex h-9 min-w-[123px] items-center justify-center rounded-lg border border-[#D0D5DD] px-3 py-2 cursor-pointer"
        onClick={() => setIsCalendarOpen(true)}
      >
        {startDate && endDate
          ? `${formatDate(startDate)} - ${formatDate(endDate)}`
          : 'Jan 10 - Jan 16'}
      </div>

      {/* Calendar shown when clicked */}
      {isCalendarOpen && (
        <div className="absolute right-[-16px] sm:right-0 z-10 mt-2 bg-white border border-[#DADDE5] shadow-lg  rounded-lg">
          <DatePicker
            selected={tempStartDate || startDate}
            onChange={handleSelectDates}
            startDate={tempStartDate}
            endDate={tempEndDate}
            selectsRange
            inline
            monthsShown={1}
            
          />

          {/* Buttons for apply and cancel */}
          <div className="p-2 sm:p-4 flex justify-between gap-4 border-t border-[#E2E4E9] ">
            <button
              className="w-[50%] px-6 py-1.5 bg-white border border-[#E2E4E9] rounded-lg text-sm text-[#525866]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="w-[50%] px-6 py-1.5 bg-[#375DFB] text-white rounded-lg text-sm"
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
