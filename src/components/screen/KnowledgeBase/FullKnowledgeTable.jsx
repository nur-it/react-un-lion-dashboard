import Toggle from "@/components/shared/Toggle";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { knowledgeTableData } from "@/data/knowledgeTableData";
import writeIcon from "../../../assets/icon/pencil.svg";
import sortIcon from "../../../assets/icon/sort.svg";

const FullKnowledgeTable = () => {
  return (
    <div className="mt-6 w-80 min-[430px]:w-[356px] md:w-[670px] lg:w-[675px] xl:w-full">
      <div className="relative w-full overflow-x-auto border border-[#0000001A] sm:rounded-lg dark:border-[#FFFFFF1A]">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="border-b border-[#0000001A] bg-[#4444440D] text-sm font-bold text-[#4A5773] dark:border-[#FFFFFF1A] dark:bg-[#212639] dark:text-[#E4E7EC]">
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
              <th scope="col" className="min-w-[100px] p-4">
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
                className="border-b bg-white text-sm text-[#101828] dark:border-[#FFFFFF1A] dark:bg-[#161b2f] dark:text-white"
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
      {/* Pagination */}
           <Pagination className="mt-6">
             <PaginationContent>
               <PaginationItem>
                 <PaginationPrevious to="#" />
               </PaginationItem>
               <PaginationItem>
                 <PaginationItem>
                   <PaginationLink to="#" isActive>
                     1
                   </PaginationLink>
                 </PaginationItem>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink to="#">2</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink to="#">3</PaginationLink>
               </PaginationItem>{" "}
               <PaginationItem>
                 <PaginationLink to="#">4</PaginationLink>
               </PaginationItem>{" "}
               <PaginationItem>
                 <PaginationLink to="#">5</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationEllipsis />
               </PaginationItem>
               <PaginationItem>
                 <PaginationNext to="#" />
               </PaginationItem>
             </PaginationContent>
           </Pagination>
    </div>
  );
};

export default FullKnowledgeTable;
