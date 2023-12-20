import { createSlice } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rentals: []
  },
  reducers: {

  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;