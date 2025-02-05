import { askAvatarService } from "@/services/ask-avatar-service";
import { useState } from "react";
import { toast } from "react-toastify";

const useAskAvatar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToAvatar = async (messageBody) => {
    setIsLoading(true);
    try {
      const response = await askAvatarService.messageToAvatar(messageBody);
      toast.success("Message sent successfully!");
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

  const getChatHistory = async (messageBody) => {
    setIsLoading(true);
    try {
      const response = await askAvatarService.chatHistory(messageBody);
      toast.success("Chat history successfully retrieved!");
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
    getChatHistory
  };
};

export default useAskAvatar;
