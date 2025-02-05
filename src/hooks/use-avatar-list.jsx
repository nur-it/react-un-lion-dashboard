import { avatarService } from "@/services/avatar-service";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const useAvatarList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const listAvatars = async () => {
    setIsLoading(true);
    try {
      const response = await avatarService.listAvatars();
      return response;
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
      Cookies.set("accessToken", response?.accessToken, { expires: 7 });
      return response;
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
