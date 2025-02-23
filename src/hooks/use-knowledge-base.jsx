import { knowledgeBaseService } from "@/services/knowledge-base-service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const useKnowledgeBase = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const sourceArticleSubmit = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.uploadSourceArticle(body);
      toast.success("Uploaded successfully!");
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to upload article.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchKnowledgeBase = async () => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.knowledgeBase();
      return response;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch knowledge base.",
      );
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInitSources = async () => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.initSources();
      return response;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch initial soures.",
      );
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const uploadSourceFile = async (file) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.uploadSourceFile(file);
      toast.success(response?.message || "Source file uploaded successfully!");
      return response;
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
      return response;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to save trustful source.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateToggle = async (body) => {
    setIsLoading(true);
    try {
      const response = await knowledgeBaseService.updateToggleKb(body);
      toast.success(response?.message || "Knowledge base toggle updated!");
      return response;
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
    register,
    handleSubmit,
    setValue,
    errors,
    watch,
    sourceArticleSubmit,
    fetchKnowledgeBase,
    fetchInitSources,
    uploadSourceFile,
    saveTrustfulSource,
    updateToggle,
    uploadVideoToCheck,
    checkProcessingStatus,
  };
};

export default useKnowledgeBase;
