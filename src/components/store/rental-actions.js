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


      // const testRes = {
      //   id: 99,
      //   key: 99,
      //   rentalServiceId: 99,
      //   contactName: "Onur",
      //   contactEmail: "onur@onur.com",
      //   contactNum: "123456789",
      //   pickUpTime: format("2024-01-13 19:45:00.000000", 'mm, dd, yyyy / p'),
      //   returnTime: format("2024-01-14 19:45:00.000000", 'mm, dd, yyyy / p'),
      //   make: "Test",
      //   model: "Test Model",
      //   vin: "41851235",
      //   color: "Blue"
      // }

      // dispatch(rentalActions.add(response.data));

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