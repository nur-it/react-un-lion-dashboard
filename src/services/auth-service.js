import requests from "./httpService";

export const authService = {
  login: async (body) => await requests.post("/login", body),
  register: async (body) => await requests.post("/register", body), // optional

  resetPassword: async (body) => await requests.post("/reset_password", body), // optional

  forgotPassword: async (body) => await requests.post("/reset_user", body),
  updateEmail: async (body) => await requests.put("/update_email", body),

  updateFrequency: async (body) =>
    await requests.post("/update_frequency", body),

  logout: () => requests.get("/logout"),
};
