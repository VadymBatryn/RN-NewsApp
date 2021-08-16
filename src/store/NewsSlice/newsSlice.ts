import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {News} from '../../models/news';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',

  async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Config.NEWS_API}`,
    );
    return response.data as News;
  },
);

const newsSlice = createSlice({
  name: 'news',

  initialState: {
    news: null as News,
    isLoading: true,
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      console.log('set news');
      state.news = action.payload;
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
export const {} = newsSlice.actions;
