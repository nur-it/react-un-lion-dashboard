import Toggle from "@/components/shared/Toggle";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { format } from "date-fns";
import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import writeIcon from "../../../assets/icon/pencil.svg";

const FullKnowledgeTable = ({ data }) => {
  const [tableData, setTableData] = useState(data); // Local state for the table data
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [newRow, setNewRow] = useState({
    title: "",
    type: "",
    timestamp: "",
    name: "",
    isActive: false,
  });

  const [errors, setErrors] = useState({
    title: "",
    type: "",
    timestamp: "",
    name: "",
  });

  // Function to handle sorting
  const requestSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.direction === "ascending") {
          return {
            key,
            direction: "descending",
          };
        } else if (prev.direction === "descending") {
          return {
            key: null, // Reset sorting
            direction: null,
          };
        }
      }
      return { key, direction: "ascending" };
    });
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...tableData];

    // Apply sorting logic
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [sortConfig, tableData]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pageNumbers;
  };

  const paginatedData = React.useMemo(() => {
    // Apply pagination after sorting
    return sortedData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
  }, [sortedData, currentPage, itemsPerPage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : "This field is required",
    }));
  };

  // const handleAddRow = () => {
  //   // Check if all fields are filled and set errors accordingly
  //   const newErrors = {};
  //   let hasError = false;
  //
  //   if (!newRow.title) {
  //     newErrors.title = "Title is required!";
  //     hasError = true;
  //   }
  //   if (!newRow.type) {
  //     newErrors.type = "Type is required!";
  //     hasError = true;
  //   }
  //   if (!newRow.timestamp) {
  //     newErrors.timestamp = "Date is required!";
  //     hasError = true;
  //   }
  //   if (!newRow.name) {
  //     newErrors.name = "Source is required!";
  //     hasError = true;
  //   }
  //
  //   // If there are errors, update the errors state and don't add the row
  //   if (hasError) {
  //     setErrors(newErrors);
  //     return;
  //   }
  //
  //   // Create the new row object
  //   const newRowData = {
  //     ...newRow,
  //     isActive: newRow.isActive,
  //   };
  //
  //   // Update the local tableData state with the new row
  //   setTableData((prevData) => [newRowData, ...prevData]);
  //
  //   // Reset the input fields and errors
  //   setNewRow({
  //     title: "",
  //     type: "",
  //     timestamp: "",
  //     name: "",
  //     isActive: false,
  //   });
  //   setErrors({
  //     title: "",
  //     type: "",
  //     timestamp: "",
  //     name: "",
  //   });
  // };

  const handleDateChange = (selectedDate) => {
    setNewRow((prev) => ({
      ...prev,
      timestamp: selectedDate ? format(selectedDate, "dd/MM/yyyy") : "",
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      timestamp: selectedDate ? "" : "This field is required",
    }));
  };

  return (
    <div className="mt-6 w-[270px] min-[375px]:w-[300px] min-[425px]:w-[350px] min-[430px]:w-[356px] sm:w-[540px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto rounded-lg border border-[#0000001A] dark:border-[#FFFFFF1A]">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm font-bold text-[#4A5773] dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
            <tr>
              {["title", "type", "date", "source", "in use"].map(
                (header, index) => (
                  <th key={index} scope="col" className="p-4">
                    <div className="flex items-center justify-between">
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                      <button
                        onClick={() => requestSort(header)}
                        className="flex flex-col items-center"
                      >
                        <FaSortUp
                          size={16}
                          className={`${
                            sortConfig.key === header &&
                            sortConfig.direction === "ascending"
                              ? "text-[#687588]"
                              : "text-gray-400"
                          }`}
                        />
                        <FaSortDown
                          size={16}
                          className={`mt-[-16px] ${
                            sortConfig.key === header &&
                            sortConfig.direction === "descending"
                              ? "text-[#687588]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </th>
                ),
              )}
              <th scope="col" className="w-[5%] p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#101828] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
              >
                <td className="w-[20%] whitespace-nowrap p-4">{row.title}</td>
                <td className="w-[20%] whitespace-nowrap p-4">{row.type}</td>
                <td className="w-[20%] p-4">{row.timestamp}</td>
                <td className="w-[20%] whitespace-nowrap p-4">{row.name}</td>
                <td className="w-[15%] p-4">
                  <Toggle initialActive={row.isActive} index={index}  />
                </td>
                <td className="p-4">
                  <button>
                    <img src={writeIcon} alt="writeIcon" />
                  </button>
                </td>
              </tr>
            ))}
            {/* Blank row for input */}
            {/*<tr className="bg-white text-sm text-[#101828] dark:bg-[#161b2f] dark:text-white">*/}
            {/*  <td className="w-[20%] whitespace-nowrap p-4">*/}
            {/*    <div className="flex flex-col">*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        name="title"*/}
            {/*        value={newRow.title}*/}
            {/*        required*/}
            {/*        onChange={handleInputChange}*/}
            {/*        placeholder="Enter title"*/}
            {/*        className="w-full whitespace-nowrap bg-transparent outline-none placeholder:text-[#98A2B3]"*/}
            {/*      />*/}
            {/*      {errors.title && (*/}
            {/*        <span className="text-xs text-red-500">{errors.title}</span>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*  <td className="w-[20%] whitespace-nowrap p-4">*/}
            {/*    <div className="flex flex-col">*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        name="type"*/}
            {/*        required*/}
            {/*        value={newRow.type}*/}
            {/*        onChange={handleInputChange}*/}
            {/*        placeholder="Enter type"*/}
            {/*        className="h-full w-full whitespace-nowrap bg-transparent outline-none placeholder:text-[#98A2B3]"*/}
            {/*      />*/}
            {/*      {errors.type && (*/}
            {/*        <span className="text-xs text-red-500">{errors.type}</span>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*  <td className="w-[20%] p-4">*/}
            {/*    <div className="flex flex-col">*/}
            {/*      <Popover>*/}
            {/*        <PopoverTrigger asChild>*/}
            {/*          <input*/}
            {/*            type="text"*/}
            {/*            name="date"*/}
            {/*            required*/}
            {/*            value={newRow.timestamp}*/}
            {/*            onChange={handleInputChange}*/}
            {/*            placeholder="Enter date"*/}
            {/*            className="h-full w-full whitespace-nowrap bg-transparent outline-none placeholder:text-[#98A2B3]"*/}
            {/*          />*/}
            {/*        </PopoverTrigger>*/}
            {/*        <PopoverContent className="w-auto p-0">*/}
            {/*          <Calendar*/}
            {/*            mode="single"*/}
            {/*            selected={*/}
            {/*              newRow.timestamp*/}
            {/*                ? new Date(*/}
            {/*                    newRow.timestamp.split("/").reverse().join("-"),*/}
            {/*                  )*/}
            {/*                : null*/}
            {/*            }*/}
            {/*            onSelect={handleDateChange}*/}
            {/*            className="rounded-lg border shadow"*/}
            {/*          />*/}
            {/*        </PopoverContent>*/}
            {/*      </Popover>*/}
            {/*      {errors.timestamp && (*/}
            {/*        <span className="text-xs text-red-500">{errors.timestamp}</span>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*  <td className="w-[20%] whitespace-nowrap p-4">*/}
            {/*    <div className="flex flex-col">*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        name="source"*/}
            {/*        value={newRow.name}*/}
            {/*        required*/}
            {/*        onChange={handleInputChange}*/}
            {/*        placeholder="Enter source"*/}
            {/*        className="h-full w-full whitespace-nowrap bg-transparent outline-none placeholder:text-[#98A2B3]"*/}
            {/*      />*/}
            {/*      {errors.name && (*/}
            {/*        <span className="text-xs text-red-500">*/}
            {/*          {errors.name}*/}
            {/*        </span>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  </td>*/}
            {/*  <td className="w-[15%] p-4">*/}
            {/*    <Toggle*/}
            {/*      initialActive={newRow.isActive}*/}
            {/*      onToggle={(isActive) =>*/}
            {/*        setNewRow((prev) => ({ ...prev, isActive }))*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </td>*/}
            {/*  <td className="p-4">*/}
            {/*    <button onClick={handleAddRow}>*/}
            {/*      <img src={checkIcon} alt="Check" />*/}
            {/*    </button>*/}
            {/*  </td>*/}
            {/*</tr>*/}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              to="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            />
          </PaginationItem>
          {getPageNumbers().map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <span className="px-2">...</span>
              ) : (
                <PaginationLink
                  to="#"
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              to="#"
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default FullKnowledgeTable;
