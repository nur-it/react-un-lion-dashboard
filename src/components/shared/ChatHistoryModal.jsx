import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClockIcon, FilterIcon, PencilIcon } from "@/components/ui/svgs";
import useAskAvatar from "@/hooks/use-ask-avatar";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const getFormattedDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getTodayDate = () => getFormattedDate(new Date());

const ChatHistoryModal = ({ toggleModal, setToggleModal }) => {
  const [historyItems, setHistoryItems] = useState([]);
  const { getChatsHistory } = useAskAvatar();
  const [editingItemId, setEditingItemId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChatsHistory();
      const formattedData = data.map((item) => ({
        ...item,
        date: getFormattedDate(item.timestamp),
      }));
      setHistoryItems(formattedData);
    };
    fetchData();
  }, []);

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

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      setToggleModal(false);
    }
  };

  return (
    <div
      id="modal-container"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div className="w-full max-w-[280px] rounded-lg bg-white py-4 dark:bg-[#1a1d40] lg:max-w-[400px]">
        <div className="space-y-6">
          <div className="flex items-center justify-between px-3 py-2 lg:p-4">
            <button className="text-[#4A5773] dark:text-[#E4E7EC]">
              <ClockIcon />
            </button>
            <button
              onClick={() => setToggleModal(false)}
              className="inline-flex items-center gap-2 rounded-md border border-[#E4E7EC] bg-white px-2 py-1 text-[#4A5773] dark:border-[#344054] dark:bg-[#171C35] dark:text-[#E4E7EC]"
            >
              <span className="text-sm font-normal">Close</span>
              <FilterIcon />
            </button>
          </div>
          <ScrollArea className="max-h-[500px] overflow-y-auto lg:max-h-[250px] xl:max-h-[380px] 2xl:max-h-[600px]">
            <div className="space-y-6 p-4">
              {Object.keys(groupedHistory).length === 0 ? (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  No chat history found.
                </p>
              ) : (
                Object.keys(groupedHistory).map((date) => (
                  <div key={date}>
                    <div className="mb-2 text-sm font-medium text-secondary_main dark:text-white">
                      {date}
                    </div>
                    <div className="space-y-2">
                      {groupedHistory[date].map((item) => (
                        <div key={item.id} className="group relative">
                          {editingItemId === item.id ? (
                            <>
                              <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                onBlur={handleRenameConfirm}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && handleRenameConfirm()
                                }
                                className="w-full rounded-lg border px-2 py-1.5 text-sm outline-none"
                                autoFocus
                                maxLength={30}
                              />
                              {/* showing error for max length crose */}
                              {newTitle.length > 30 && (
                                <p className="text-xs text-red-500">
                                  Title should be less than 30 characters
                                </p>
                              )}
                            </>
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
                                  onClick={() =>
                                    handleRename(item.id, item.title)
                                  }
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
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryModal;
