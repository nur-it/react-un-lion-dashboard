"use client";

import { Button } from "@/components/ui/button";

const topics = [
  { id: "1", name: "Business Idea" },
  { id: "2", name: "B2B Business" },
  { id: "3", name: "What is B2B?" },
  { id: "4", name: "Match lead to Account" },
  { id: "5", name: "Mail Replay" },
  { id: "6", name: "Great Offer" },
  { id: "7", name: "How does AI Work" },
  { id: "8", name: "Can AI Assist me" },
];

export function TopicSuggestions() {
  return (
    <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2">
      {topics.map((topic) => (
        <Button
          key={topic.id}
          variant="outline"
          className="rounded-full"
          size="sm"
        >
          {topic.name}
        </Button>
      ))}
    </div>
  );
}
