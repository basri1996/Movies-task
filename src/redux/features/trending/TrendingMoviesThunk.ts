import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/api";
import {
  movieTrailerUrl,
  trendingMoviesUrl,
  youtubeEmbedUrl,
} from "../../constants";

export const fetchTrendyMoviesAsync = createAsyncThunk(
  "trendingMovies/fetchTrendyMovies",
  async () => {
    try {
      const response = await axiosInstance.get(trendingMoviesUrl());
      return response?.data.results;
    } catch (error) {
      throw error;
    }
  }
);
interface Props {
  id: number;
  MediaType: string;
}

export const fetchMovieTrailerAsync = createAsyncThunk(
  "trendingMovies/fetchMovieTrailer",
  async ({ id, MediaType }: Props) => {
    try {
      const response = await axiosInstance.get(movieTrailerUrl(id, MediaType));
      const Url = youtubeEmbedUrl(response.data.results[1]?.key);
      return Url;
    } catch (error) {
      throw error;
    }
  }
);
