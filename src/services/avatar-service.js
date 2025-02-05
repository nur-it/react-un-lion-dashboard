import requests from "./httpService";

export const avatarService = {
  listAvatars: async () => await requests.post("/list_avatars"),
  pickTarget: async (body) => await requests.post("/pick_target", body),
};
