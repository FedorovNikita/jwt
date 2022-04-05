import axios from "axios";
import { getTokens, setAcsessTokens } from "../helpers/setAndRemoveToken";

export const API_URL = process.env.REACT_APP_BASE_URL;

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    const { token } = getTokens();
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    throw error;
  }
);

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { refreshToken } = getTokens();
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${API_URL}/api/token/refresh/`, {
          refresh: refreshToken,
        });
        setAcsessTokens(response.data.access);
        return $api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);

export default $api;
