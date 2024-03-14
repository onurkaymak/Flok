import { createSlice } from "@reduxjs/toolkit";

const fleetSlice = createSlice({
  name: 'fleet',
  initialState: {
    vehicles: [],
    selectedVehicles: [],
    selectedVehicleByVIN: null
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
      const addedVehicle = action.payload;
      state.vehicles.push(addedVehicle);
    },
    resetVehicles(state) {
      state.vehicles = []
    },
    setSelectedVehicleById(state, action) {
      state.selectedVehicles = [...action.payload.current];
    },
    setFindVehicleByVIN(state, action) {
      state.selectedVehicleByVIN = action.payload;
    },
    updateVehicle(state, action) {
      const vehicleId = action.payload.id;
      const updatedVehicle = action.payload;
      console.log(updatedVehicle);
      let foundedVehicle = state.vehicles.find(vehicle => vehicle.id === vehicleId);
      foundedVehicle = { ...updatedVehicle };

      // state.vehicles.forEach(vehicle => console.log(vehicle.id));
    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;