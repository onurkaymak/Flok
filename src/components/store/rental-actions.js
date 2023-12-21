import { rentalActions } from "./rental-slice";
import axios from "axios";



export const fetchRentalService = (reservationInfo, token) => {
  return async (dispatch) => {
    const { rentalServiceId, customerEmail, customerPhoneNum, token } = reservationInfo;

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

      dispatch(rentalActions.addSelectedRentalService(fetchedRentalService));

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


    } catch (error) {

    }

  }
}