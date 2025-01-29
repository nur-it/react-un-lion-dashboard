import { useState } from "react";
import { toast } from "react-toastify";

const useAskAvatar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToAvatar = async (messageBody) => {
    setIsLoading(true);
    try {
      //   const response = await askAvatarService.messageToAvatar(messageBody);
      console.log(messageBody);
      toast.success("Message sent successfully!");
      //   return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message to Avatar.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    sendMessageToAvatar,
  };
};

export default useAskAvatar;
