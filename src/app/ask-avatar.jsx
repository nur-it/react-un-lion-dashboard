import ChatInterface from "@/components/screen/AskAvatar/ChatInterface";
import PageHeading from "@/components/shared/PageHeading";

const AskAvatarPage = () => {
  return (
    <div className="space-y-6 pb-10">
      <PageHeading page_name="Ask the Avatar" />
      <ChatInterface />
    </div>
  );
};

export default AskAvatarPage;
