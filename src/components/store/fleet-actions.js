import { fleetActions } from "./fleet-slice";
import { uiActions } from "./ui-slice";
import axios from "axios";


export const fetchVehicles = (queries, vin = null) => {
  return async (dispatch) => {
    const { token } = queries;
    try {
      let response;
      if (vin !== null) {
        response = await axios.get(`https://localhost:5000/api/fleet?VIN=${vin}`, { headers: { Authorization: `Bearer ${token}` } });
        const fetchedVehicle = response.data;
        dispatch(fleetActions.setFindVehicleByVIN(fetchedVehicle));
      } else {
        response = await axios.get("https://localhost:5000/api/fleet", { headers: { Authorization: `Bearer ${token}` } });
        const fetchedVehicles = response.data;
        dispatch(fleetActions.fetch(fetchedVehicles));
      }
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

      const newVehicle = {
        key: response.data.vehicle.vehicleId,
        id: response.data.vehicle.vehicleId,
        vin: response.data.vehicle.vin,
        make: response.data.vehicle.make,
        model: response.data.vehicle.model,
        color: response.data.vehicle.color,
        mileage: response.data.vehicle.mileage,
        vehicleClass: response.data.vehicle.class,
        classCode: response.data.vehicle.classCode,
        state: response.data.vehicle.state,
        licensePlate: response.data.vehicle.licensePlate,
        isRented: response.data.vehicle.isRented,
        inProduction: response.data.vehicle.inProduction
      }


      dispatch(fleetActions.add(newVehicle));
    } catch (error) {
    }
  }
}

export const resetVehiclesList = () => {
  return (dispatch) => {
    dispatch(fleetActions.resetVehicles());
  }
}

export const setSelectedVehicles = (selectedVehiclesId) => {
  return (dispatch) => {
    dispatch(fleetActions.setSelectedVehicleById(selectedVehiclesId));
  }
}


export const updateVehicle = (vehicleInfo, token) => {
  return async (dispatch) => {

    try {
      const response = await axios.put(`https://localhost:5000/api/fleet/${vehicleInfo.id}`, {
        "vehicleId": vehicleInfo.id,
        "vin": vehicleInfo.vin,
        "make": vehicleInfo.make,
        "model": vehicleInfo.model,
        "color": vehicleInfo.color,
        "mileage": vehicleInfo.mileage,
        "class": vehicleInfo.vehicleClass,
        "classCode": vehicleInfo.classCode,
        "state": vehicleInfo.state,
        "licensePlate": vehicleInfo.licensePlate,
        "isRented": vehicleInfo.isRented,
        "inProduction": vehicleInfo.inProduction
      },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      dispatch(fleetActions.updateVehicle(response.data.vehicle));
    } catch (err) {
      console.log(err);
    }


  }
}


export const deleteVehicle = (vehicleId, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`https://localhost:5000/api/fleet/${vehicleId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      dispatch(fleetActions.deleteVehicle(vehicleId));
      dispatch(uiActions.showNotification({
        title: "Success",
        message: "Vehicle has been deleted from the inventory."
      }));
    } catch (err) {
      console.log(err);
    }

  }
};