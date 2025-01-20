import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const TimePeriodDropdown = ({ options = ["Weekly", "Monthly", "Yearly"] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative inline-block">
      {/* Dropdown Trigger */}
      <div
        className="flex h-9 max-w-[107px] cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#D0D5DD] bg-[#FFFFFF05] px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm font-medium text-text_secondary">
          {selectedOption}
        </p>
        <FiChevronDown
          className={`text-text_secondary transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
  <div className="absolute right-0 z-50">
    <div className="relative mt-1 w-full rounded-lg border border-[#D0D5DD] bg-white py-1 shadow-md">
      {options.map((option) => (
        <div
          key={option}
          className={`cursor-pointer px-4 py-2 text-sm font-medium text-text_secondary hover:bg-[#9eb7ee10] bg-transparent ${
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
