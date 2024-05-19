import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/api';
import {  mostPopularUrl } from '../../constants';

export const fetchMostPopularAsync = createAsyncThunk(
  'mostPopular/fetchMostPopular',
  async (mediaType: string) => {
    const response = await axiosInstance.get(mostPopularUrl(mediaType));
    return { data: response?.data.results, title: mediaType };
  }
);



