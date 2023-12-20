import { createSlice } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rentals: []
  },
  reducers: {
    add(state, action) {
      state.rentals.push(action.payload);
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;