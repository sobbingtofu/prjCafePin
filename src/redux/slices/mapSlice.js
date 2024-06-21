import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    level: 3,
    position: {
      lat: 37.49799993466257,
      lng: 127.0275987857109
    },
    searchText: '',
    cafeList: [],
    selectedCafeData: {},
    isMarkerOpen: false,
    viewAll: true
  },
  reducers: {
    changeCenter: (state, action) => {
      state.level = action.payload.level;
      state.position = action.payload.position;
    },
    searchThisText: (state, action) => {
      state.searchText = action.payload;
    },
    mapCafeList: (state, action) => {
      state.cafeList = action.payload;
    },
    setCafeData: (state, action) => {
      state.selectedCafeData = action.payload;
    },

    setMarkerOpen: (state, action) => {
      state.isMarkerOpen = action.payload;
    },
    ViewSpecificRegionRange: (state) => {
      state.viewAll = false;
    },
    ViewAllRegion: (state) => {
      state.viewAll = true;
    },
    setCurrentPositionAddress: (state, action) => {
      state.address = action.payload;
    },
    ResetPositionToDefault: (state) => {
      state.position = {
        lat: 37.49799993466257,
        lng: 127.0275987857109
      };
    }
  }
});

export const {
  changeCenter,
  searchThisText,
  mapCafeList,
  setCafeData,
  ViewSpecificRegionRange,
  ViewAllRegion,
  setMarkerOpen,
  setCurrentPositionAddress,
  ResetPositionToDefault
} = mapSlice.actions;

export default mapSlice.reducer;
