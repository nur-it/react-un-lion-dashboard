import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const TimePeriodDropdown = ({ options = ["Weekly", "Monthly", "Yearly"] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className="flex h-9 max-w-[107px] cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#D0D5DD] bg-[#FFFFFF05] px-3 py-2 dark:border-[#FFFFFF4D]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm font-medium text-text_secondary dark:text-white">
          {selectedOption}
        </p>
        <FiChevronDown
          className={`text-text_secondary transition-transform dark:text-white ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-50">
          <div className="relative mt-1 w-full rounded-lg border border-[#D0D5DD] bg-white py-1 shadow-md dark:bg-[#11162b] dark:border-[#FFFFFF4D]">
            {options.map((option) => (
              <div
                key={option}
                className={`cursor-pointer bg-transparent px-4 py-2 text-sm font-medium text-text_secondary dark:text-white hover:bg-[#9eb7ee10] ${
                  selectedOption === option ? "bg-[#FFFFFF10]" : ""
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePeriodDropdown;
