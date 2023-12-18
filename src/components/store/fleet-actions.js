import { fleetActions } from "./fleet-slice";

import axios from "axios";


export const fetchVehicles = (queries) => {
  return async (dispatch) => {

    const { VIN, isRented, inProduction, token } = queries;

    try {
      const response = await axios.get("http://localhost:5000/api/fleet", { headers: { Authorization: `Bearer ${token}` } });

      const fetchedVehicles = response.data;
      dispatch(fleetActions.fetch(fetchedVehicles));
    }
    catch (err) {
      console.log(err);

    }

  }
}