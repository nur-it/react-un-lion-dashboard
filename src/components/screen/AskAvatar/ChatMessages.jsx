"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const messages = [
  {
    id: "1",
    role: "assistant",
    content: "Here's the results of 5 attention-grabbing headlines:",
    items: [
      "Revolutionize Customer Engagement with AI Chat Copywriter",
      "Unleash the Power of AI Chat Copywriters for Transformative Customer Experiences",
      "Chatbots on Steroids: Meet the AI Copywriter Transforming Conversations",
      "From Bland to Brilliant: AI Chat Copywriters Make Brands Conversational Rockstars",
      "Say Goodbye to Boring Chats: AI Copywriters Elevate Conversational Marketing",
    ],
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    role: "user",
    content:
      "Generate 5 attention-grabbing headlines for an article about AI Chat Copywriter",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function ChatMessages() {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-4">
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarImage src={message.avatar} />
                <AvatarFallback>
                  {message.role === "user" ? "U" : "A"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                {message.content}
                {message.items && (
                  <ol className="mt-4 list-inside list-decimal space-y-2">
                    {message.items.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
