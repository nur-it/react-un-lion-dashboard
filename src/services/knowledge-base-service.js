import requests from "./httpService";

export const knowledgeBaseService = {
  knowledgeBase: async () => await requests.get("/knowledge-base"),

  initSources: async () => await requests.get("/get_init_sources"),

  uploadSourceArticle: async (body) =>
    await requests.post("/upload_source_article", body),

  uploadSourceFile: async (file) => {
    const formData = new FormData();
    // Append the file to FormData
    formData.append("file", file);
    // Post the FormData with correct headers
    return await requests.post("/upload_source_file", formData);
  },

  saveTrustfulSource: async (body) =>
    await requests.post("/save_trustful_source", body),

  updateToggleKb: async (body) =>
    await requests.post("/update_toggle_kb", body),

  uploadVideoToCheck: async (body) =>
    await requests.post("/upload_video_to_check", body),

  checkProcessingStatus: async () =>
    await requests.get("/check_processing_status"),
};
