import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    token: null,
    tokenExpTime: null,
    isLoggedIn: false,
    userRole: null
  },
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.tokenExpTime = action.payload.tokenExpTime;
      state.userRole = action.payload.userRole;
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      state.tokenExpTime = null;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;