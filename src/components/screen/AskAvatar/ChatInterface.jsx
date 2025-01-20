import { ChatHistory } from "./ChatHistory";
import { ChatInput } from "./ChatInput";
import { TopicSuggestions } from "./TopicSuggestions";

export default function ChatInterface() {
  return (
    <div className="gap-8 space-y-8 lg:flex lg:space-y-0">
      <ChatHistory />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center rounded-2xl bg-white from-white to-[#f8f7fe] p-4 dark:bg-[#171c38] dark:from-[#171c38] dark:to-[#1d204b] lg:min-h-[707px] lg:bg-gradient-to-r">
          <div className="min-w-full space-y-5 xl:min-w-[820px] xl:space-y-10">
            <div className="space-y-4 p-8 text-center">
              <h1 className="dark:bg-gradient-dark-text bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent sm:text-5xl">
                Hi There, Adam <br /> What would like to know
              </h1>

              <p className="mx-auto max-w-[375px] text-base text-[#475467] dark:text-[#98A2B3]">
                Choose a prompt or write your own to start chatting with Avatar.
              </p>
            </div>
            <div>
              <div className="mb-4 text-center text-sm text-secondary_main dark:text-[#98A2B3]">
                Ask About:
              </div>
              <TopicSuggestions />
            </div>
            <div>
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
