import requests from "./httpService";

export const dashOtherService = {
  uploadSourceArticle: async (body) =>
    await requests.post("/upload_source_article", body),

  //   for the charts
  getEmotionsData: async () => await requests.get("/chart-data"),
  getMentionsData: async () => await requests.get("/chart-data"),
  getSentimentsData: async () => await requests.get("/chart-data"),
  getStatisticsData: async () => await requests.get("/chart-data"),
  getMitigationsData: async () => await requests.get("/chart-data"),

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
