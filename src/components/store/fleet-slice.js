import { createSlice } from "@reduxjs/toolkit";

const fleetSlice = createSlice({
  name: 'fleet',
  initialState: {
    vehicles: [],
    selectedVehicles: []
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
    updateVehicle(state, action) {
      const vehicleId = action.payload.vehicleId;
      const updatedVehicle = action.payload;
      const foundedVehicle = state.vehicles.find(vehicle => vehicle.id === vehicleId);
      foundedVehicle.key = updatedVehicle.vehicleId;
      foundedVehicle.id = updatedVehicle.vehicleId;
      foundedVehicle.vin = updatedVehicle.vin;
      foundedVehicle.make = updatedVehicle.make;
      foundedVehicle.model = updatedVehicle.model;
      foundedVehicle.color = updatedVehicle.color;
      foundedVehicle.mileage = updatedVehicle.mileage;
      foundedVehicle.vehicleClass = updatedVehicle.class;
      foundedVehicle.classCode = updatedVehicle.classCode;
      foundedVehicle.state = updatedVehicle.state;
      foundedVehicle.classCode = updatedVehicle.classCode;
      foundedVehicle.licensePlate = updatedVehicle.licensePlate;
      foundedVehicle.isRented = updatedVehicle.isRented;
      foundedVehicle.inProduction = updatedVehicle.inProduction;
    },
    deleteVehicle(state, action) {
      const selectedVehicleId = action.payload;
      state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== selectedVehicleId);
    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;