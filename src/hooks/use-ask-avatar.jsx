import { askAvatarService } from "@/services/ask-avatar-service";
import { useState } from "react";
import { toast } from "react-toastify";

const useAskAvatar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToAvatar = async (messageBody) => {
    setIsLoading(true);
    try {
      const response = await askAvatarService.messageToAvatar(messageBody);
      // toast.success("Message sent successfully!");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message to Avatar.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getChatsHistory = async () => {
    setIsLoading(true);
    try {
      const response = await askAvatarService.getChatsHistory();
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load chats.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const chatDiscussionAvatar = async (id) => {
    setIsLoading(true);
    try {
      const response = await askAvatarService.chatDiscussion(id);
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load chat history.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    sendMessageToAvatar,
    getChatsHistory,
    chatDiscussionAvatar,
  };
};

export default useAskAvatar;
