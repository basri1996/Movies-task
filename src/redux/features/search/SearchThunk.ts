import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/api";
import { SearchUrl } from "../../constants";

export const fetchSearchedAsync = createAsyncThunk(
    "search/fetchSearched",
    async (title: string) => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await axiosInstance.get(
          SearchUrl(title,apiKey)
        );

        console.log(response.data.results)
        return response.data.results;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  );