import requests from "./httpService";

export const dashboardService = {
  //   for the charts
  getEmotionsData: async () => await requests.get("/emotions-data"),
  getMentionsData: async () => await requests.get("/mentions-data"),
  getSentimentsData: async () => await requests.get("/sentiments-data"),
  getStatisticsData: async () => await requests.get("/statistics-data"),
  getMitigationsData: async () => await requests.get("/mitigations-data"),

  //   table data
  getRiskTableData: async () => await requests.get("/risk-table"),
  getChatsListData: async () => await requests.get("/risk-table"),

  //   mitigate
  mitigate: async (body) => await requests.post("/mitigate", body),

  //   word cloud
  getWordCloudData: async () => await requests.get("/word_cloud"),
  downloadWorldCloud: async (body) =>
    await requests.post("/download-word-table", body),
};
