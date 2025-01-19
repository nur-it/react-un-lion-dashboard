"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, MoreHorizontal, Settings } from "lucide-react";

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
      <div className="flex items-center border-b p-4">
        <Button variant="ghost" size="icon" className="mr-2">
          <Clock className="h-4 w-4" />
        </Button>
        <span className="font-medium">All Time</span>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="hidden h-full lg:block">
        <div className="p-4">
          <div className="mb-4 text-sm font-medium">Recent</div>
          <div className="space-y-1">
            {historyItems.map((item) => (
              <div key={item.id} className="group relative">
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start py-3 text-sm font-normal"
                >
                  {item.title}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
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
  );
}
