import { rentalActions } from "./rental-slice";
import axios from "axios";



export const fetchRentalService = (reservationInfo, token) => {
  return async (dispatch) => {
    const { rentalServiceId, customerEmail, customerPhoneNum, token } = reservationInfo;

    console.log(customerPhoneNum);

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

    console.log(url);

    try {
      console.log(url);
      const response = await axios.get(url);

      console.log(response);

      const fetchedRentalServices = response.data[0];



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

      console.log(response);


    } catch (error) {

    }

  }
}