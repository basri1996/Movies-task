import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/api';
import { fetchPersonDetailUrl } from '../../constants';

export const fetchPersonDetailsAsync = createAsyncThunk(
  'mostPopular/fetchPersoDetail',
  async (id: string) => {
    const response = await axiosInstance.get(fetchPersonDetailUrl(id));
    return response.data
  }
);

// export const fetchTopRatedAsync = createAsyncThunk(
//   'mostPopular/fetchTopRated',
//   async (mediaType: string) => {
//     try {
//       const response = await axiosInstance.get(fetchTopRatedUrl(mediaType));
//       return { data: response?.data.results, title: mediaType };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   }
// );
