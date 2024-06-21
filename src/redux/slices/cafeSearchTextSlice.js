import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cafeSearchText: ''
};

const cafeSearchTextSlice = createSlice({
  name: 'cafeSearchText',
  initialState: initialState,
  reducers: {
    SET_CAFE_SEARCH_TEXT: (state, action) => {
      state.cafeSearchText = action.payload;
    }
  }
});

export const { SET_CAFE_SEARCH_TEXT } = cafeSearchTextSlice.actions;
export default cafeSearchTextSlice.reducer;
