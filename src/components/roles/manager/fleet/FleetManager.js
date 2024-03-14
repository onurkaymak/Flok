import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import VehicleList from "./VehicleList";
import { fetchVehicles, addVehicle, resetVehiclesList, updateVehicle } from '../../../store/fleet-actions';
import classes from './FleetManager.module.css';
import AddVehicleForm from './AddVehicleForm';
import { uiActions } from "../../../store/ui-slice";
import UpdateVehicle from './UpdateVehicle';



const FleetManager = (props = null) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const vehicles = useSelector(state => state.fleet.vehicles);

  const fetcher = useCallback(async () => {
    dispatch(resetVehiclesList());
    dispatch(fetchVehicles({ token }));
  }, [dispatch, token])


  const addVehicleFormHandler = (vehicleInfo) => {
    dispatch(addVehicle(vehicleInfo, token));
    dispatch(uiActions.setSelectedLink("fleet search"));
  };

  const updateVehicleFormHandler = (vehicleInfo) => {
    dispatch(updateVehicle(vehicleInfo, token));
  }

  const formCancelButtonHandler = () => {
    dispatch(uiActions.setSelectedLink(null));
  };

  useEffect(() => {
    fetcher()
  }, [fetcher]);


  let content;
  let title;

  if (props.selectedLink === "fleet add") {
    title = <h1 className={classes.title}>Add Vehicle</h1>
    content = <AddVehicleForm addVehicleFormHandler={addVehicleFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  } else if (props.selectedLink === "fleet update") {
    title = <h1 className={classes.title}>Update Vehicle</h1>
    content = <UpdateVehicle updateVehicleFormHandler={updateVehicleFormHandler} />
  }
  else if (props.selectedLink === "fleet delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    title = <h1 className={classes.title}>Vehicle List</h1>
    content = <VehicleList vehicles={vehicles} />
  }

  return (
    <div className={classes.fleetManagerContainer}>
      <div className={classes.titleContainer}>
        {title}
      </div>

      <div className={classes.contentContainer}>
        {content}
      </div>

    </div>
  )
};

export default FleetManager;