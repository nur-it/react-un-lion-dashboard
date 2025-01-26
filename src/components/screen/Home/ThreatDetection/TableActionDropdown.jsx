import { cn } from "@/lib/utils"; // Utility function for conditional classes
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // Import the down arrow icon

const TableActionDropdown = ({
  initialStatus,
  onStatusChange,
  options,
  isDisabled,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown container

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    setIsDropdownOpen(false);
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  // Define styles based on status
  const statusStyles = {
    Dismissed: "bg-success text-white dark:bg-success dark:text-white",
    Mitigated: "bg-error text-white dark:bg-error dark:text-white",
    Default: "bg-gray-200 text-black dark:bg-[#14182d] dark:text-white",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-max" ref={dropdownRef}>
      {/* Dropdown trigger */}
      <button
        onClick={() => !isDisabled && setIsDropdownOpen(!isDropdownOpen)}
        disabled={isDisabled} // Disable the dropdown button if isDisabled is true
        className={cn(
          "flex w-full min-w-[110px] items-center justify-between rounded-md px-3 py-2 outline-none",
          isDisabled
            ? cn(
                "",
                options.value === "Dismissed" && "bg-success/[0.50] text-white",
                options.value === "Mitigated" && "bg-error/[0.50] text-white",
              )
            : options.value === "Dismissed"
              ? statusStyles.Dismissed
              : options.value === "Mitigated"
                ? statusStyles.Mitigated
                : statusStyles.Default,
        )}
      >
        {selectedStatus || "Select an option"}
        <FiChevronDown
          size={18}
          className="ml-2 transform text-sm text-white"
          style={{
            transition: "transform 0.2s",
            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Dropdown options */}
      {isDropdownOpen && (
        <div className="absolute left-0 z-10 mt-0.5 w-full rounded-md border bg-white shadow-md dark:border-[#FFFFFF33] dark:bg-[#14182d]">
          {options.items.map((item, index) => (
            <div
              key={index}
              role="button"
              onClick={() => handleStatusChange(item)}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm text-secondary_main hover:bg-gray-100 dark:text-white dark:hover:bg-[#FFFFFF1A]",
                isDisabled && "cursor-not-allowed opacity-75",
              )}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableActionDropdown;
