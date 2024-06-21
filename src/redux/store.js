import { configureStore } from '@reduxjs/toolkit';
import arrangeOptionSlice from './slices/arrangeOptionSlice';
import cafeSearchTextSlice from './slices/cafeSearchTextSlice';
import hashtagSlice from './slices/hashtagSlice';
import mapSlice from './slices/mapSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice,
    map: mapSlice,
    cafeSearchText: cafeSearchTextSlice,
    user: userSlice
  }
});

export default store;
