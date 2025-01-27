import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor to handle 401 errors
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_APP_API_BASE_URL}/refresh_token`,
            { refreshToken },
          );
          Cookies.set("accessToken", data.accessToken);
          error.config.headers.Authorization = `Bearer ${data.accessToken}`;
          return instance(error.config); // Retry the original request
        } catch (refreshError) {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          alert("Session expired. Please log in again.");
          window.location.href = "/sign-in";
        }
      } else {
        alert("Session expired. Please log in again.");
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  },
);

const responseBody = (response) => response?.data || {};

const requests = {
  get: (url, headers = {}) => instance.get(url, { headers }).then(responseBody),
  post: (url, body, headers = {}) =>
    instance.post(url, body, { headers }).then(responseBody),
  put: (url, body, headers = {}) =>
    instance.put(url, body, { headers }).then(responseBody),
  patch: (url, body, headers = {}) =>
    instance.patch(url, body, { headers }).then(responseBody),
  delete: (url, headers = {}) =>
    instance.delete(url, { headers }).then(responseBody),
};

export default requests;
