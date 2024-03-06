import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
    selectedLink: null,
    currentManagerDash: "Fleet"
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message
      }
    },
    setNotification(state, action) {
      state.notification = null
    },
    setSelectedLink(state, action) {
      state.selectedLink = action.payload;
    },
    setCurrentManagerDash(state, action) {
      state.currentManagerDash = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;