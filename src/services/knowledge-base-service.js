import requests from "./httpService";

export const knowledgeBaseService = {
  knowledgeBase: async () => await requests.get("/knowledge-base"),

  uploadSourceArticle: async (body) =>
    await requests.post("/upload_source_article", body),

  uploadSourceFile: async (body) =>
    await requests.post("/upload_source_file", body),

  saveTrustfulSource: async (body) =>
    await requests.post("/save_trustful_source", body),

  updateToggleKb: async (body) =>
    await requests.post("/update_toggle_kb", body),

  uploadVideoToCheck: async (body) =>
    await requests.post("/upload_video_to_check", body),
  checkProcessingStatus: async () =>
    await requests.get("/check_processing_status"),
};
