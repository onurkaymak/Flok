import { createSlice } from "@reduxjs/toolkit";

const fleetSlice = createSlice({
  name: 'fleet',
  initialState: {
    vehicles: []
  },
  reducers: {
    fetch(state, action) {
      const data = action.payload;
      data.map(vehicle => (
        state.vehicles.push({
          key: vehicle.vehicleId,
          id: vehicle.vehicleId,
          vin: vehicle.vin,
          make: vehicle.make,
          model: vehicle.model,
          color: vehicle.color,
          mileage: vehicle.mileage,
          vehicleClass: vehicle.class,
          classCode: vehicle.classCode,
          state: vehicle.state,
          licensePlate: vehicle.licensePlate,
          isRented: vehicle.isRented,
          inProduction: vehicle.inProduction
        })
      ))
    },
    add(state, action) {
      state.vehicles.push(action.payload);
    },
    resetVehicles(state) {
      state.vehicles = []
    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;