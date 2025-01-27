import requests from "./httpService";

export const avatarService = {
  listAvatars: async () => await requests.get("/list_avatars"),
};
