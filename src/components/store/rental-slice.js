import { createSlice } from "@reduxjs/toolkit";
import format from 'date-fns/format';

const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rentalServices: [],
    selectedRentalService: null,
    selectedRentalServiceById: null
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
          pickUpTime: format(service.reservationStart, 'Pp'),
          returnTime: format(service.reservationEnd, 'Pp'),
          make: service.vehicle.make,
          model: service.vehicle.model,
          vin: service.vehicle.vin,
          color: service.vehicle.color
        })
      ))
    },
    add(state, action) {
      const data = action.payload;
      state.rentalServices.push(data);
    },
    delete(state, action) {
      const deleteId = action.payload;
      state.rentalServices = state.rentalServices.filter(rentalService => rentalService.id !== deleteId);
      state.selectedRentalService = null;
    },
    resetRentalServices(state) {
      state.rentalServices = []
    },
    setSelectedRentalService(state, action) {
      state.selectedRentalServiceById = action.payload;
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;