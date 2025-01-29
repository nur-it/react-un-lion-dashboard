import { dashboardService } from "@/services/dashboard-service";
import { useState } from "react";
import { toast } from "react-toastify";

const useDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getChartData = async (fetchFunction, errorMessage) => {
    setIsLoading(true);
    try {
      const response = await fetchFunction();
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || errorMessage);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getEmotionsData = () =>
    getChartData(
      dashboardService.getEmotionsData,
      "Failed to fetch emotions data.",
    );
  const getMentionsData = () =>
    getChartData(
      dashboardService.getMentionsData,
      "Failed to fetch mentions data.",
    );
  const getSentimentsData = () =>
    getChartData(
      dashboardService.getSentimentsData,
      "Failed to fetch sentiments data.",
    );
  const getStatisticsData = () =>
    getChartData(
      dashboardService.getStatisticsData,
      "Failed to fetch statistics data.",
    );
  const getMitigationsData = () =>
    getChartData(
      dashboardService.getMitigationsData,
      "Failed to fetch mitigations data.",
    );

  const getRiskTableData = () =>
    getChartData(
      dashboardService.getRiskTableData,
      "Failed to fetch risk table data.",
    );
  const getChatsListData = () =>
    getChartData(
      dashboardService.getChatsListData,
      "Failed to fetch chat list data.",
    );

  const mitigate = async (body) => {
    setIsLoading(true);
    try {
      const response = await dashboardService.mitigate(body);
      toast.success("Mitigation successful!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to mitigate.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getWordCloudData = () =>
    getChartData(
      dashboardService.getWordCloudData,
      "Failed to fetch word cloud data.",
    );
  const downloadWorldCloud = async (body) => {
    setIsLoading(true);
    try {
      const response = await dashboardService.downloadWorldCloud(body);
      toast.success("Word cloud downloaded successfully!");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to download word cloud.",
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getEmotionsData,
    getMentionsData,
    getSentimentsData,
    getStatisticsData,
    getMitigationsData,
    getRiskTableData,
    getChatsListData,
    mitigate,
    getWordCloudData,
    downloadWorldCloud,
  };
};

export default useDashboard;
