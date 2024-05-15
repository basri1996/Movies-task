import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/api";
import {
  fetchByIdUrl,
  fetchCreditsByIdUrl,
  fetchSimilarByIdUrl,
} from "../../constants";

export const fetchByIdAsync = createAsyncThunk(
  "contentdetail/fetchById",
  async ({ id, type }: Props) => {
    const response = await axiosInstance.get(fetchByIdUrl(id, type));
    return response.data;
  }
);

interface Props {
  id: string;
  type: string;
}

export const fetchCreditsByIdAsync = createAsyncThunk(
  "contentdetail/fetchCreditsById",
  async ({ id, type }: Props) => {
    try {
      const response = await axiosInstance.get(fetchCreditsByIdUrl(type, id));
      return response.data.cast;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

export const fetchSimilarByIdAsync = createAsyncThunk(
  "contentdetail/fetchSimilarById",
  async ({ id, type }: Props) => {
    try {
      const response = await axiosInstance.get(fetchSimilarByIdUrl(type, id));
      return response.data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);
