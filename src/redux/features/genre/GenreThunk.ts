import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/api';
import { genreUrl } from '../../constants';
import { Genre } from './GenreTypes';

export const fetchAllGenresAsync = createAsyncThunk(
  'genre/fetchAllGenres',
  async () => {
    const movieGenresresponse = await axiosInstance.get(genreUrl('movie'));
    const tvGenresresponse = await axiosInstance.get(genreUrl('tv'));
    const finalResult: Genre[] = [];
    [
      ...movieGenresresponse.data.genres,
      ...tvGenresresponse.data.genres,
    ].forEach(item => {
      if (!finalResult.find((el: Genre) => el.id === item.id)) {
        finalResult.push(item);
      }
    });
    return finalResult;
  },
);

export const fetchGenresAsync = createAsyncThunk(
  'genre/fetchGenres',
  async (mediaType: any) => {
    try {
      const response = await axiosInstance.get(genreUrl(mediaType));
      return response.data.genres;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
);
