import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/api";
import { fetchByIdUrl, fetchCreditsByIdUrl } from "../../constants";

export const fetchByIdAsync = createAsyncThunk(
  "contentdetail/fetchById",
  async ({ id, type }: any) => {
    console.log("id", id, "media", type);
    try {
      const response = await axiosInstance.get(fetchByIdUrl(id, type));
      console.log("details", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
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
      console.log("details", response.data.cast);
      return response.data.cast
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);
