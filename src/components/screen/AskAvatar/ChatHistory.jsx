import ChatHistoryModal from "@/components/shared/ChatHistoryModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClockIcon, FilterIcon, PencilIcon } from "@/components/ui/svgs";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAskAvatar from "@/hooks/use-ask-avatar.jsx";
import Cookies from "js-cookie";

// const initialHistoryItems = [
//   { id: "1", title: "Greetings & Inquiry", date: "20 Jan 2025" },
//   { id: "2", title: "Great Offer", date: "19 Jan 2025" },
//   { id: "3", title: "B2B Business", date: "18 Jan 2025" },
//   { id: "4", title: "Business Idea", date: "18 Jan 2025" },
//   { id: "5", title: "Potential Threats Detection", date: "17 Jan 2025" },
//   { id: "6", title: "How to protect Accounts fr...", date: "17 Jan 2025" },
//   { id: "7", title: "Mail Reply", date: "16 Jan 2025" },
// ];




const getTodayDate = () => {
  const today = new Date();
  return today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export function ChatHistory() {
  const [historyItems, setHistoryItems] = useState([]);
  const { getChatHistory } = useAskAvatar();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChatHistory();
      setHistoryItems(data);
    };
    fetchData();
  }, []);

  const [toggleModal, setToggleModal] = useState(false);

  const [editingItemId, setEditingItemId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const groupedHistory = historyItems.reduce((acc, item) => {
    const todayDate = getTodayDate();
    const group = item.date === todayDate ? "Today" : item.date;
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});

  const handleRemove = (id) => {
    setHistoryItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleRename = (id, title) => {
    setEditingItemId(id);
    setNewTitle(title);
  };

  const handleRenameConfirm = () => {
    if (editingItemId && newTitle.trim() !== "") {
      setHistoryItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItemId ? { ...item, title: newTitle } : item,
        ),
      );
    }
    setEditingItemId(null);
    setNewTitle("");
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#f8f7fe] dark:bg-[#1a1d40] lg:min-h-[707px] lg:max-w-[280px]">
      <div className="space-y-6">
        <div className="flex items-center justify-between px-3 py-2 lg:p-4">
          <button className="text-[#4A5773] dark:text-[#E4E7EC]">
            <ClockIcon />
          </button>
          <button
            onClick={() => setToggleModal(true)}
            className="inline-flex items-center gap-2 rounded-md border border-[#E4E7EC] bg-white px-2 py-1 text-[#4A5773] dark:border-[#344054] dark:bg-[#171C35] dark:text-[#E4E7EC]"
          >
            <span className="text-sm font-normal">All Time</span>
            <FilterIcon />
          </button>
        </div>
        <ScrollArea className="hidden h-full lg:block">
          <div className="space-y-6 p-4">
            {Object.keys(groupedHistory).map((date) => (
              <div key={date}>
                <div className="mb-2 text-sm font-medium text-secondary_main dark:text-white">
                  {date}
                </div>
                <div className="space-y-2">
                  {groupedHistory[date].map((item) => (
                    <div key={item.id} className="group relative">
                      {editingItemId === item.id ? (
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          onBlur={handleRenameConfirm}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleRenameConfirm()
                          }
                          className="w-full rounded-lg border-none px-2 py-1.5 text-sm outline-none"
                          autoFocus
                          maxLength={30}
                        />
                      ) : (
                        <Button
                          variant="ghost"
                          className="h-auto w-full justify-start truncate text-ellipsis rounded-lg border-[0.5px] border-[#d0d5dd4f] px-2 py-1.5 text-sm font-normal text-[#4A5773] group-hover:bg-white/50 dark:border-[#344054] dark:text-[#D0D5DD] dark:group-hover:bg-[#344054]"
                        >
                          {item.title}
                        </Button>
                      )}
                      {editingItemId !== item.id && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleRename(item.id, item.title)}
                            >
                              <PencilIcon /> Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-error"
                              onClick={() => handleRemove(item.id)}
                            >
                              <RiDeleteBin6Line />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      {toggleModal && (
        <ChatHistoryModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
        />
      )}
    </div>
  );
}
