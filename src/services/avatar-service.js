import requests from "./httpService";

export const authService = {
  listAvatars: async () => await requests.get("/list_avatars"),
};
