import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrangeOption: 'latest'
};

const arrangeOptionSlice = createSlice({
  name: 'arrangeOption',
  initialState: initialState,
  reducers: {
    SWITCH_ARRANGE_TO_LATEST: (state) => {
      state.arrangeOption = 'latest';
    },
    SWITCH_ARRANGE_TO_OLDEST: (state) => {
      state.arrangeOption = 'oldest';
    }
  }
});

export const { SWITCH_ARRANGE_TO_LATEST, SWITCH_ARRANGE_TO_OLDEST } = arrangeOptionSlice.actions;
export default arrangeOptionSlice.reducer;
