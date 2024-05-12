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


export const getMovieTrailer = async (movieId :string) => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}/videos?language=en-US`);
    return response;
  } catch (error) {
    throw error;
  }
};







