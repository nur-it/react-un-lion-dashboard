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
        className="flex h-10 items-center justify-between gap-2.5 rounded-lg border border-gray300 bg-[#0000000F] px-4 py-3 cursor-pointer text-[#00000099]"
        onClick={toggleDropdown}
      >
        {selectedCategory} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute left-0 z-10 mt-1 w-full rounded-lg border border-gray300 bg-white shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-[#00000099] cursor-pointer hover:bg-gray-100"
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
