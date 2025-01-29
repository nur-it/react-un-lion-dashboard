// import { avatarService } from "@/services/avatar-service";
import { useState } from "react";
import { toast } from "react-toastify";

const useAvatarList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const listAvatars = async () => {
    setIsLoading(true);
    try {
      const response = await avatarService.listAvatars();
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch avatars.");
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const pickTarget = async (body) => {
    setIsLoading(true);
    try {
      const response = await avatarService.pickTarget(body);
      toast.success("Target picked successfully!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to pick target.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    listAvatars,
    pickTarget,
  };
};

export default useAvatarList;
