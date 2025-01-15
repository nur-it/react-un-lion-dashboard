import Toggle from "@/components/ui/toggle";
import { knowledgeTableData } from "@/data/knowledgeTableData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import writeIcon from "../../../assets/icon/pencil.svg";
import sortIcon from "../../../assets/icon/sort.svg";

const FullKnowledgeTable = () => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-x-auto border border-[#0000001A] sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm font-bold text-[#4A5773] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-[20%] p-4">
                <div className="flex items-center justify-between">
                  Title
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="w-[20%] p-4">
                <div className="flex items-center justify-between">
                  Type
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="w-[20%] p-4">
                <div className="flex items-center justify-between">
                  Date
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="w-[25%] p-4">
                <div className="flex items-center justify-between">
                  Source
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="w-[10%] p-4">
                <div className="flex items-center justify-between">
                  In Use
                  <button>
                    <img src={sortIcon} alt="sortIcon" />
                  </button>
                </div>
              </th>
              <th scope="col" className="w-[5%] p-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {knowledgeTableData.map((row, index) => (
              <tr
                key={index}
                className="border-b bg-white text-sm text-[#101828] dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="p-4">{row.title}</td>
                <td className="p-4">{row.type}</td>
                <td className="p-4">{row.data}</td>
                <td className="p-4">{row.source}</td>
                <td className="p-4">
                <Toggle initialActive={row.isActive} />
                </td>
                <td className="p-4">
                  <button>
                    <img src={writeIcon} alt="writeIcon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex w-full items-center justify-center">
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronLeft size={22} className="text-[#667085]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0000000F] text-sm font-medium text-secondary_main">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            4
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            5
          </button>
          <button className="flex h-8 w-8 items-center justify-center text-sm font-medium text-text_secondary">
            ...
          </button>
          <button className="flex h-8 w-8 items-center justify-center">
            <FiChevronRight size={20} className="text-secondary_main" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullKnowledgeTable;
