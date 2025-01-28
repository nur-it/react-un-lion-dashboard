import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategoryDropdown = ({ options, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCategory = (category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-[260px]">
      {/* Dropdown button */}
      <div
        className="flex h-10 cursor-pointer items-center justify-between gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3 text-sm text-[#00000099] dark:border-[#344054] dark:bg-[#1b1f33] dark:text-[#FFFFFF99] sm:text-base"
        onClick={toggleDropdown}
      >
        {selectedCategory} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute left-0 z-10 mt-1 w-full rounded-lg border border-gray300 bg-white shadow-lg dark:border-[#FFFFFF33] dark:bg-[#1b1f33]">
          {options.map((option, index) => (
            <li
              key={index}
              role="button"
              className="cursor-pointer px-4 py-2 text-sm text-[#00000099] hover:bg-gray-100 dark:text-white hover:dark:bg-[#FFFFFF0A]"
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
