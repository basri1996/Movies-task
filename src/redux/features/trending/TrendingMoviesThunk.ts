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
    const response = await axiosInstance.get(trendingMoviesUrl());
    return response?.data.results;
  }
);
interface Props {
  id: number;
  MediaType: string;
}

export const fetchMovieTrailerAsync = createAsyncThunk(
  "trendingMovies/fetchMovieTrailer",
  async ({ id, MediaType }: Props) => {
    console.log(typeof id)
    const response = await axiosInstance.get(movieTrailerUrl(id, MediaType));
    const Url = youtubeEmbedUrl(response.data.results[4]?.key);
    return Url;
  }
);
