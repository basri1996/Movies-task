import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/api";
import { genreUrl } from "../../constants";

export const fetchAllGenresAsync = createAsyncThunk(
    "genre/fetchAllGenres",
    async () => {
      try {
        const movieGenresresponse = await axiosInstance.get(
          genreUrl("movie")
        );
        const tvGenresresponse = await axiosInstance.get(
          genreUrl("tv")
        );
        const finalResult: Object[] = [];
        [
          ...movieGenresresponse?.data.genres,
          ...tvGenresresponse?.data.genres,
        ].forEach((item) => {
          if (!finalResult.find((el: any) => el?.id === item.id)) {
            finalResult.push(item);
          }
        });
        console.log(finalResult);
        return finalResult;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  );