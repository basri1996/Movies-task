import axios from "axios";
const apiToken =import.meta.env.VITE_APP_API_READ_ACCESS_TOKEN
const URL =import.meta.env.VITE_APP_BASE_URL

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
});









