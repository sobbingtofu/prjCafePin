import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {}
  },
  reducers: {
    fetchUserData: (state, action) => {
      state.userData = action.payload;
    }
  }
});

export const { fetchUserData } = userSlice.actions;

export default userSlice.reducer;
