import { rentalActions } from "./rental-slice";
import axios from "axios";
import format from 'date-fns/format';


export const fetchRentalService = (reservationInfo, token) => {
  return async (dispatch) => {
    const { rentalServiceId, customerEmail, customerPhoneNum } = reservationInfo;

    let url = "https://localhost:5000/api/rental";

    if (rentalServiceId) {
      url = `${url}?rentalServiceId=${rentalServiceId}`;
    }
    if (customerEmail) {
      url = `${url}?customerEmail=${customerEmail}`;
    }
    if (customerPhoneNum) {
      url = `${url}?customerPhoneNum=${customerPhoneNum}`;
    }

    try {
      const response = await axios.get(url);

      const fetchedRentalService = response.data[0];
      dispatch(rentalActions.fetchSelectedRentalService(fetchedRentalService));

    }
    catch (err) {
      console.log(err);
    }
  }
}


export const fetchRentalServiceList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://localhost:5000/api/rental");

      const fetchedRentalServiceList = response.data;

      dispatch(rentalActions.fetchRentalServiceList(fetchedRentalServiceList));
    }
    catch (err) {
      console.log(err);
    }
  }
}


export const addRentalService = (reservationInfo, token) => {
  return async (dispatch) => {

    const { vin, customerEmail, serviceAgentId, reservationStart, reservationEnd } = reservationInfo;

    try {
      const response = await axios.post("https://localhost:5000/api/rental", {
        "vin": vin,
        "customerEmail": customerEmail,
        "serviceAgentId": serviceAgentId,
        "reservationStart": reservationStart,
        "reservationEnd": reservationEnd
      }
      );

      const createdReservation = {
        key: response.data.customer.rentalJoinEntities[0].rentalServiceId,
        id: response.data.customer.rentalJoinEntities[0].rentalServiceId,
        contactName: response.data.customer.name,
        contactEmail: response.data.customer.email,
        contactNum: response.data.customer.phoneNum,
        pickUpTime: format(response.data.customer.rentalJoinEntities[0].reservationStart, 'mm, dd, yyyy / p'),
        returnTime: format(response.data.customer.rentalJoinEntities[0].reservationEnd, 'mm, dd, yyyy / p'),
        make: response.data.vehicle.make,
        model: response.data.vehicle.model,
        vin: response.data.vehicle.vin,
        color: response.data.vehicle.color

      }

      dispatch(rentalActions.add(createdReservation));

    } catch (error) {

    }
  }
}

export const deleteRentalService = (rentalServiceId, token) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://localhost:5000/api/rental/${rentalServiceId}`)
      dispatch(rentalActions.delete(rentalServiceId));
    } catch (err) {
      console.log(err)
    }
  }
}


export const resetRentalServiceList = () => {
  return (dispatch) => {
    dispatch(rentalActions.resetRentalServices());
  }
}