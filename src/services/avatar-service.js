import requests from "./httpService";

export const authService = {
  login: async (body) => await requests.post("/login", body),
  register: async (body) => await requests.post("/register", body),

  resetPassword: async (body) => await requests.post("/reset_password", body),

  forgotPassword: async (body) => await requests.post("/reset_user", body),
  updateEmail: async (body) => await requests.post("/update_email", body),

  updateFrequency: async (body) =>
    await requests.post("/update_frequency", body),

  logout: () => requests.get("/logout"),
};
