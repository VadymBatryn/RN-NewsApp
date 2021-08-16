import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {News} from '../../models/news';

export const searchNews = createAsyncThunk(
  'search/searchNews',

  async (text: string) => {
    const date = new Date().toDateString();

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${text}&from=${date}&apiKey=${Config.NEWS_API}`,
    );
    return response.data as News;
  },
);

const searchSlice = createSlice({
  name: 'search',

  initialState: {
    searchedNews: null as News,
    searching: false,
    isFav: [] as string[],
  },

  reducers: {
    setFavorite: (state, {payload}) => {
      if (state.isFav.includes(payload)) {
        state.isFav = state.isFav.splice(payload);
      } else {
        state.isFav.push(payload);
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(searchNews.pending, state => {
      state.searching = true;
    });
    builder.addCase(searchNews.rejected, state => {
      state.searching = false;
    });
    builder.addCase(searchNews.fulfilled, (state, action) => {
      console.log('set search');
      console.log(action.payload);
      state.searchedNews = action.payload;
      state.searching = false;
    });
  },
});

export default searchSlice.reducer;
export const {setFavorite} = searchSlice.actions;
