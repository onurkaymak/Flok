import { createSlice } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rentals: []
  },
  reducers: {
    fetch(state, action) {
      const data = action.payload;

      // const { message, serviceAgent, customerInfo, reservationInfo = data.vehicle.rentalJoinEntities[4] } = data;

    },
    add(state, action) {
      state.rentals.push(action.payload);
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;