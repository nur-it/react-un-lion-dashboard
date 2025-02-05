import { useState } from "react";
import { ChatHistory } from "./ChatHistory";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { TopicSuggestions } from "./TopicSuggestions";
import Cookies from "js-cookie";

export default function ChatInterface() {
  const [response, setResponse] = useState([]);
  const [topic, setTopic] = useState("");

  const userProfileCookie = Cookies.get("userProfile");
  const user = userProfileCookie
    ? JSON.parse(userProfileCookie)
    : null;
  const selectedProfileCookie = Cookies.get("selectedProfile");
  const profile = selectedProfileCookie
    ? JSON.parse(selectedProfileCookie)
    : null;

  const handleSend = async (input_value, attachments = []) => {

    const user_message = {
      role: "user",
      content: input_value,
      attachments,
      avatar: user.user_picture,
    };
    const avatar_message = {
      role: "avatar",
      content:
        "I am an AI. I am here to help. I can answer any question you have.",
      avatar: "/images/avatar.svg",
    };

    setResponse([
      ...response,
      { user: user_message, avatar_ai: avatar_message },
    ]);
  };

  return (
    <div className="gap-8 space-y-8 lg:flex lg:space-y-0">
      <ChatHistory />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center rounded-2xl bg-white from-white to-[#f8f7fe] p-4 dark:bg-[#171c38] dark:from-[#171c38] dark:to-[#1d204b] lg:min-h-[707px] lg:bg-gradient-to-r">
          <div className="min-w-full space-y-5 xl:space-y-10 2xl:min-w-[820px]">
            {response && response.length === 0 && (
              <div className="space-y-5 xl:space-y-10">
                <div className="space-y-4 p-8 text-center">
                  <h1 className="bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent dark:bg-gradient-dark-text sm:text-5xl">
                    Hi {user.first_name} <br /> What would you like to know about {profile.name}?
                  </h1>
                  <p className="mx-auto max-w-[375px] text-base text-[#475467] dark:text-[#98A2B3]">
                    Choose a prompt or write your own to start chatting with
                    Avatar.
                  </p>
                </div>
                <div>
                  <div className="mb-4 text-center text-sm text-secondary_main dark:text-[#98A2B3]">
                    Ask About:
                  </div>
                  <TopicSuggestions setTopic={setTopic} />
                </div>
              </div>
            )}
            {response && response.length > 0 && (
              <ChatMessages response={response} />
            )}
            <div>
              <ChatInput handleSend={handleSend} topic={topic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
