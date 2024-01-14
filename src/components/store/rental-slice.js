import { createSlice } from "@reduxjs/toolkit";
import format from 'date-fns/format';

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
          pickUpTime: format(service.reservationStart, 'mm, dd, yyyy / p'),
          returnTime: format(service.reservationEnd, 'mm, dd, yyyy / p'),
          make: service.vehicle.make,
          model: service.vehicle.model,
          vin: service.vehicle.vin,
          color: service.vehicle.color
        })
      ))
    },
    add(state, action) {
      const data = action.payload;

      console.log(data);

      state.rentalServices.push(data);

      state.rentalServices.push({
        key: data.customer.rentalJoinEntities[0].rentalserviceId,
        id: data.customer.rentalJoinEntities[0].rentalserviceId,
        contactName: data.customer.name,
        contactEmail: data.customer.email,
        contactNum: data.customer.phoneNum,
        pickUpTime: format(data.vehicle.rentalJoinEntities[0].reservationStart, 'mm, dd, yyyy / p'),
        returnTime: format(data.vehicle.rentalJoinEntities[0].reservationEnd, 'mm, dd, yyyy / p'),
        make: data.vehicle.make,
        model: data.vehicle.model,
        vin: data.vehicle.vin,
        color: data.vehicle.color
      });

      // state.rentalServices.push({
      //   key: data.rentalserviceId,
      //   id: data.rentalserviceId,
      //   contactName: data.contactName,
      //   contactEmail: data.contactEmail,
      //   contactNum: data.contactNum,
      //   pickUpTime: format(data.pickUpTime, 'mm, dd, yyyy / p'),
      //   returnTime: format(data.returnTime, 'mm, dd, yyyy / p'),
      //   make: data.make,
      //   model: data.model,
      //   vin: data.vin,
      //   color: data.color
      // });
    },
    delete(state, action) {
      const deleteId = action.payload;
      state.rentalServices = state.rentalServices.filter(rentalService => rentalService.id !== deleteId);
      state.selectedRentalService = null;
    },
    resetRentalServices(state) {
      state.rentalServices = []
    }
  }
});

export const rentalActions = rentalSlice.actions;

export default rentalSlice.reducer;