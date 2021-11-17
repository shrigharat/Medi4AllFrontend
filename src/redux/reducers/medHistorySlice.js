import { createSlice } from "@reduxjs/toolkit";

const medHistorySlice = createSlice({
  name: "medHistorySlice",
  initialState: {
    medHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchHistoryStart: (state) => {
      state.loading = true;
    },
    fetchHistorySuccess: (state, action) => {
      state.medHistory = action.payload;
      state.loading = false;
    },
    fetchHistoryFailure: (state) => {
      state.loading = false;
    },
    clearHistory: (state) => {
      state.medHistory = [];
    },
  },
});

export const {
  clearHistory,
  fetchHistoryStart,
  fetchHistoryFailure,
  fetchHistorySuccess,
} = medHistorySlice.actions;

export default medHistorySlice.reducer;
