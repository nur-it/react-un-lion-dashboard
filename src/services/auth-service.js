import httpService from "./httpService";

// User-related API calls
export const authService = {
  login: (data) => httpService.post("/auth/login", data),
  register: (data) => httpService.post("/auth/register", data),
  resetPassword: (data) => httpService.post("/auth/reset_user", data),
  updateEmail: (data) => httpService.put("/auth/update_email", data),
  logout: () => httpService.get("/auth/logout"),
};
