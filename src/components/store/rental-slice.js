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
    fetchRentalServiceList(state, action) {
      const data = action.payload;
      data.map(service => (
        state.rentalServices.push({
          key: service.rentalServiceId,
          id: service.rentalServiceId,
          contactName: service.customer.name,
          contactEmail: service.customer.email,
          contactNum: service.customer.phoneNum,
          pickUpTime: service.reservationStart,
          returnTime: service.reservationEnd,
          make: service.vehicle.make,
          model: service.vehicle.model,
          vin: service.vehicle.vin,
          color: service.vehicle.color
        })
      ))
    },
    add(state, action) {
      state.rentals.push(action.payload);
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;