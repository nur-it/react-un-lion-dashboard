import requests from "./httpService";

export const askAvatarService = {
  messageToAvatar: async (body) =>
    await requests.post("/message_to_avatar", body),
  chatHistory: async (body) =>
    await requests.get("/get_chats", body),
};
