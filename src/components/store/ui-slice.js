import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
  },
  reducers: {

  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;