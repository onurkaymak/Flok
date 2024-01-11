import { fleetActions } from "./fleet-slice";
import axios from "axios";


export const fetchVehicles = (queries) => {
  return async (dispatch) => {
    const { token } = queries;
    try {
      const response = await axios.get("https://localhost:5000/api/fleet", { headers: { Authorization: `Bearer ${token}` } });

      const fetchedVehicles = response.data;
      dispatch(fleetActions.fetch(fetchedVehicles));
    }
    catch (err) {
      console.log(err);
    }
  }
}


export const addVehicle = (vehicleInfo, token) => {
  return async (dispatch) => {

    const { vin, make, model, color, mileage, vehicleClass, classCode, state, licensePlate, isRented, inProduction } = vehicleInfo;

    try {
      const response = await axios.post("https://localhost:5000/api/fleet", {
        "vin": vin,
        "make": make,
        "model": model,
        "color": color,
        "mileage": mileage,
        "class": vehicleClass,
        "classCode": classCode,
        "state": state,
        "licensePlate": licensePlate,
        "isRented": isRented,
        "inProduction": inProduction
      },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      dispatch(fleetActions.add(response));
    } catch (error) {

    }

  }
}


export const resetVehiclesList = () => {
  return (dispatch) => {
    dispatch(fleetActions.resetVehicles());
  }
}