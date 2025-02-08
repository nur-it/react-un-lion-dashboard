import requests from "./httpService";

export const askAvatarService = {
  messageToAvatar: async (body) =>
    await requests.post("/message_to_avatar", body), // message, chat_id
  getChatsHistory: async () => await requests.get("/get_chats"), // id, target_id, timestamp, title, user_id
  chatDiscussion: async (body) => await requests.get("/discussion", body), // chat_id
};
