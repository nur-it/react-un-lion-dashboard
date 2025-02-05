import requests from "./httpService";

export const askAvatarService = {
  messageToAvatar: async (body) =>
    await requests.post("/message_to_avatar", body),
  chatsHistory: async (body) =>
    await requests.get("/get_chats", body),
  chatHistory: async (body) =>
    await requests.get("/discussion", body),
};
