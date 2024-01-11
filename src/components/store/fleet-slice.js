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
      const data = action.payload;
      state.vehicles.push({
        key: data.vehicle.vehicleId,
        id: data.vehicle.vehicleId,
        vin: data.vehicle.vin,
        make: data.vehicle.make,
        model: data.vehicle.model,
        color: data.vehicle.color,
        mileage: data.vehicle.mileage,
        vehicleClass: data.vehicle.class,
        classCode: data.vehicle.classCode,
        state: data.vehicle.state,
        licensePlate: data.vehicle.licensePlate,
        isRented: data.vehicle.isRented,
        inProduction: data.vehicle.inProduction
      });
    },
    resetVehicles(state) {
      state.vehicles = []
    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;