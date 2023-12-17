import { createSlice } from "@reduxjs/toolkit";

const fleetSlice = createSlice({
  name: 'fleet',
  initialState: {
    vehicles: []
  },
  reducers: {
    fetch(state, action) {

    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;