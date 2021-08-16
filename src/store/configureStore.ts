import {configureStore} from '@reduxjs/toolkit';
import NewsReducer from './NewsSlice/newsSlice';
import SearchReducer from './SearchSlice/seachSlice';

export const store = configureStore({
  reducer: {
    news: NewsReducer,
    search: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
