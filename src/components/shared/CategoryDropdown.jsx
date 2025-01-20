import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategoryDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Filter by category");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-[260px]">
      {/* Dropdown button */}
      <div
        className="flex h-10 items-center justify-between gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] dark:bg-[#FFFFFF0D] dark:border-[#344054] px-4 py-3 cursor-pointer text-[#00000099] dark:text-[#FFFFFF99] text-sm sm:text-base"
        onClick={toggleDropdown}
      >
        {selectedCategory} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute left-0 z-10 mt-1 w-full rounded-lg border border-gray300 dark:border-[#FFFFFF33] dark:bg-[#FFFFFF0A] bg-white shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-[#00000099] dark:text-white cursor-pointer hover:dark:bg-[#FFFFFF0A] hover:bg-gray-100"
              onClick={() => selectCategory(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
