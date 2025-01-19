"use client";

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
import { RiDeleteBin6Line } from "react-icons/ri";

const historyItems = [
  { id: "1", title: "Greetings & Inquiry", date: "03 Jan 2025" },
  { id: "2", title: "Great Offer", date: "03 Jan 2025" },
  { id: "3", title: "B2B Business", date: "03 Jan 2025" },
  { id: "4", title: "Business Idea", date: "03 Jan 2025" },
  { id: "5", title: "Potential Threats Detection", date: "03 Jan 2025" },
  { id: "6", title: "How to protect Accounts fr...", date: "03 Jan 2025" },
  { id: "7", title: "Mail Reply", date: "03 Jan 2025" },
];

export function ChatHistory() {
  return (
    <div className="w-full rounded-2xl border-[#e4e7ec] bg-[#f8f7fe] to-[#b4aff91d] lg:min-h-[707px] lg:max-w-[280px]">
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4">
          <button>
            <ClockIcon />
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-[#E4E7EC] bg-white px-2 py-1">
            <span className="text-sm font-normal text-[#4A5773]">All Time</span>
            <FilterIcon />
          </button>
        </div>
        <ScrollArea className="hidden h-full lg:block">
          <div className="p-4">
            <div className="mb-4 text-sm font-medium">Recent</div>
            <div className="space-y-2">
              {historyItems.map((item) => (
                <div key={item.id} className="group relative">
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-start rounded-lg border-[0.5px] border-[#d0d5dd4f] px-2 py-1.5 text-sm font-normal text-[#4A5773] group-hover:bg-white/50"
                  >
                    {item.title}
                  </Button>
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
                      <DropdownMenuItem>
                        <PencilIcon /> Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-error">
                        <RiDeleteBin6Line />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
