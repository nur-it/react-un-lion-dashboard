import { Skeleton } from "@/components/ui/skeleton";
import useAskAvatar from "@/hooks/use-ask-avatar";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

export function ChatMessages({ response, discussionId }) {
  const messagesEndRef = useRef(null);
  const [discussions, setDiscussion] = useState([]);
  const { chatDiscussionAvatar, isLoading } = useAskAvatar();

  const selectedProfileCookie = Cookies.get("selectedProfile");

  const profile = selectedProfileCookie
    ? JSON.parse(selectedProfileCookie)
    : null;

  // Scroll to the bottom whenever response updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response, discussionId]);

  useEffect(() => {
    const fetchData = async () => {
      if (!discussionId) return; // Only proceed if discussionId has a value
      try {
        const response = await chatDiscussionAvatar(discussionId);
        setDiscussion(response);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[352px] space-y-5 bg-white p-4 dark:bg-white/[4%]">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  const user_response = discussions?.find(
    (response) => response.role === "User",
  );
  const avatar_response = discussions?.find(
    (response) => response.role === "Avatar",
  );

  return (
    <div className="scrollbar-thin dark:scrollbar-track-secondary_main dark:scrollbar-thumb-primary_main max-h-[442px] min-h-[442px] flex-1 overflow-y-auto py-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {!discussionId &&
          response.map(({ user, avatar_ai }, index) => (
            <div key={index} className="space-y-3">
              {/* User Message */}
              <div className="flex justify-end gap-3">
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
              <div className="flex max-w-[75%] gap-3">
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
          ))}{" "}
        {discussionId &&
          discussions.map((_, index) => (
            <div key={index} className="space-y-3">
              {/* User Message */}
              <div className="flex justify-end gap-3">
                <div className="rounded-xl border border-gray200 bg-black/[0.06] p-3 text-secondary_main dark:border-[#344054] dark:bg-white/[0.06] dark:text-white">
                  {user_response.content}
                </div>
                <div className="h-10 min-w-10 rounded-full">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={
                      profile?.picture_url ||
                      "/images/danj/user_profile_pic.jpeg"
                    }
                    alt="user"
                  />
                </div>
              </div>
              {/* AI Message */}
              <div className="flex max-w-[75%] gap-3">
                <div className="h-10 min-w-10 rounded-full">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={"/images/avatar.svg"}
                    alt="user"
                  />
                </div>
                <div className="text-secondary_main dark:text-white">
                  {avatar_response.content}
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
