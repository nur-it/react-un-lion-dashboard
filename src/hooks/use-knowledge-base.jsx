import { knowledgeBaseService } from "@/services/knowledge-base-service";
import { useState } from "react";
import { toast } from "react-toastify";

const useKnowledgeBase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchKnowledgeBase = async () => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.knowledgeBase();
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch knowledge base.",
      );
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const uploadSourceFile = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.uploadSourceFile(body);
      toast.success("Source file uploaded successfully!");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to upload source file.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const saveTrustfulSource = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.saveTrustfulSource(body);
      toast.success("Trustful source saved successfully!");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to save trustful source.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateToggleKb = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.updateToggleKb(body);
      toast.success("Knowledge base toggle updated!");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update knowledge base toggle.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const uploadVideoToCheck = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.uploadVideoToCheck(body);
      toast.success("Video uploaded successfully for checking!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to upload video.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const checkProcessingStatus = async () => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.checkProcessingStatus();
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to check processing status.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchKnowledgeBase,
    uploadSourceFile,
    saveTrustfulSource,
    updateToggleKb,
    uploadVideoToCheck,
    checkProcessingStatus,
  };
};

export default useKnowledgeBase;
