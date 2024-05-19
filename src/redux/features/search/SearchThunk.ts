import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/api';
import {
  SearchContentByTypeAndTitleUrl,
  SearchUrl,
  fetchContentByExpandSearchUrl,
  fetchContentPageItemsByCategoryUrl,
  fetchKeywordsUrl,
  fetchSearchLanguageUrl,
} from '../../constants';

export const fetchSearchedAsync = createAsyncThunk(
  'search/fetchSearched',
  async (title: string) => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const response = await axiosInstance.get(SearchUrl(title, apiKey));
    return response.data.results;
  },
);

export const fetchSearchLanguageAsync = createAsyncThunk(
  'search/fetchSearchLanguage',
  async () => {
    try {
      const response = await axiosInstance.get(fetchSearchLanguageUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
);

export const fetchKeywordsAsync = createAsyncThunk(
  'search/fetchKeywords',
  async (query: string) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await axiosInstance.get(fetchKeywordsUrl(query, apiKey));
      console.log('wfiowajif', response);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
);

export const fetchContentByExpandSearchAsync = createAsyncThunk(
  'search/fetchContentByExpandSearch',
  async ({ params, mediaType }: any) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      console.log(queryString)
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await axiosInstance.get(
        `${fetchContentByExpandSearchUrl(mediaType)}${queryString}&api_key=${apiKey}`,
      );
      console.log(response)
      return {data:response.data.results , amount:response.data.total_results};
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
);

export const fetchSearchContentByTypeAndTitleAsync = createAsyncThunk(
  'search/fetchSearchContentByTypeAndTitle',
  async ({ mediaType, title }: any) => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await axiosInstance.get(
        SearchContentByTypeAndTitleUrl(mediaType, title, apiKey),
      );
      return {
        data: response.data.results,
        amount: response.data.total_results,
        type: mediaType,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
);

// contentPage Thunks


export const fetchContentPageItemsByCategoryAsync =createAsyncThunk(
  'search/fetchContentPageItemsByCategory',
  async ({mediaType ,category,page}:{mediaType:string, category:string,page:string}) => {
    try {
      const response = await axiosInstance.get(fetchContentPageItemsByCategoryUrl(mediaType,category,page));
      console.log(response)
      return {
        data: response.data.results,
        amount: response.data.total_results,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
);



