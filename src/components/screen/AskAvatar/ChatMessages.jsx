import { useEffect, useRef } from "react";

export function ChatMessages({ response }) {
  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever response updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  return (
    <div className="max-h-[442px] min-h-[442px] flex-1 overflow-y-auto py-4 scrollbar-thin dark:scrollbar-track-secondary_main dark:scrollbar-thumb-primary_main">
      <div className="mx-auto max-w-4xl space-y-6">
        {response.map(({ user, avatar_ai }, index) => (
          <div key={index} className="space-y-3">
            {/* User Message */}
            <div className="flex items-center justify-end gap-3">
              <div className="rounded-xl border border-gray200 bg-black/[0.06] p-3 text-secondary_main dark:border-[#344054] dark:bg-white/[0.06] dark:text-white">
                {user.content}
              </div>
              <div className="h-10 min-w-10 rounded-full">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={user.avatar}
                  alt="user"
                />
              </div>
            </div>
            {/* AI Message */}
            <div className="flex max-w-[75%] items-center gap-3">
              <div className="h-10 min-w-10 rounded-full">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={avatar_ai.avatar}
                  alt="user"
                />
              </div>
              <div className="text-secondary_main dark:text-white">
                {avatar_ai.content}
              </div>
            </div>
          </div>
        ))}
        {/* Dummy div to enable auto scroll */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
