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
      const addedVehicle = action.payload;
      console.log(addedVehicle);
      // state.vehicles.push({
      //   key: addedVehicle.data.vehicle.vehicleId,
      //   id: addedVehicle.data.vehicle.vehicleId,
      //   vin: addedVehicle.data.vehicle.vin,
      //   make: addedVehicle.data.vehicle.make,
      //   model: addedVehicle.data.vehicle.model,
      //   color: addedVehicle.data.vehicle.color,
      //   mileage: addedVehicle.data.vehicle.mileage,
      //   vehicleClass: addedVehicle.data.vehicle.class,
      //   classCode: addedVehicle.data.vehicle.classCode,
      //   state: addedVehicle.data.vehicle.state,
      //   licensePlate: addedVehicle.data.vehicle.licensePlate,
      //   isRented: addedVehicle.data.vehicle.isRented,
      //   inProduction: addedVehicle.data.vehicle.inProduction
      // });
      state.vehicles.push(addedVehicle);
    },
    resetVehicles(state) {
      state.vehicles = []
    }
  }
});

export const fleetActions = fleetSlice.actions;

export default fleetSlice.reducer;