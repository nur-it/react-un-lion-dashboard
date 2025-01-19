"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/contexts/chat.contexts";
import { Clock, Settings } from "lucide-react";

export function ChatSidebar() {
  const { conversations } = useChat();

  return (
    <div className="h-screen w-80 border-r bg-gray-50/50">
      <div className="flex items-center border-b p-4">
        <Button variant="ghost" size="icon" className="mr-2">
          <Clock className="h-4 w-4" />
        </Button>
        <span className="font-medium">All Time</span>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-65px)]">
        <div className="space-y-4 p-4">
          <div className="text-sm font-medium text-gray-500">Recent</div>
          {conversations.map((conversation) => (
            <Button
              key={conversation.id}
              variant="ghost"
              className="w-full justify-start font-normal"
            >
              {conversation.title}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
