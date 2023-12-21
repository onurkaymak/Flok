import { createSlice } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rentalServices: [],
    selectedRentalService: null
  },
  reducers: {
    fetchSelectedRentalService(state, action) {
      const data = action.payload;

      state.selectedRentalService = { ...data };
    },
    add(state, action) {
      state.rentals.push(action.payload);
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;