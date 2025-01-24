import { cn } from "@/lib/utils"; // Utility function for conditional classes
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // Import the down arrow icon

const TableActionDropdown = ({ initialStatus, onStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  const handleSelectChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  // Define styles based on status
  const statusStyles = {
    "In Progress": "bg-primary_main text-white dark:bg-primary_main dark:text-white",
    Dismissed: "bg-success text-white dark:bg-success dark:text-white",
    Mitigated: "bg-error text-white dark:bg-error dark:text-white",
    "To Review": "bg-primary_main text-white dark:bg-primary_main dark:text-white",
  };

  return (
    <div className="relative w-max">
      <select
        value={selectedStatus}
        onChange={handleSelectChange}
        className={cn(
          "appearance-none w-full px-3 py-2 pr-8 rounded-md cursor-pointer outline-none",
          statusStyles[selectedStatus] || "bg-gray-200 text-black dark:bg-[#14182d] dark:text-white"
        )}
      >
        <option
          value="In Progress"
          className="bg-white text-black dark:bg-[#14182d] dark:text-white"
        >
          In Progress
        </option>
        <option
          value="Dismissed"
          className="bg-white text-black dark:bg-[#14182d] dark:text-white"
        >
          Dismissed
        </option>
        <option
          value="Mitigated"
          className="bg-white text-black dark:bg-[#14182d] dark:text-white"
        >
          Mitigated
        </option>
        <option
          value="To Review"
          className="bg-white text-black dark:bg-[#14182d] dark:text-white"
        >
          To Review
        </option>
      </select>
      <FiChevronDown
        size={18}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm pointer-events-none"
      />
    </div>
  );
};

export default TableActionDropdown;
