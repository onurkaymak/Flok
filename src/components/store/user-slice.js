import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    token: null,
    isLoggedIn: false,
    userRole: null
  },
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logout(state) {
      state.userId = null;
      state.token = null;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;