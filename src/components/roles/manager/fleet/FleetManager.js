import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import VehicleList from "./VehicleList";
import { fetchVehicles, addVehicle, resetVehiclesList } from '../../../store/fleet-actions';
import classes from './FleetManager.module.css';
import AddVehicleForm from './AddVehicleForm';


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
    props.setSelectedLink(null);
  };

  const addVehicleFormCancelButtonHandler = () => {
    props.setSelectedLink(null);
  };

  useEffect(() => {
    if (props.selectedLink === "fleet search") {
      fetcher()
    }
  }, [fetcher, props.selectedLink])



  let content;
  let title;

  if (props.selectedLink === "fleet search") {
    title = <h1 className={classes.titleVehicleList}>Vehicle List</h1>
    content = <VehicleList fetchedVehicles={vehicles} />
  } else if (props.selectedLink === "fleet add") {
    title = <h1>Add Vehicle Form</h1>
    content = <AddVehicleForm addVehicleFormHandler={addVehicleFormHandler} addVehicleFormCancelButtonHandler={addVehicleFormCancelButtonHandler} />
  } else if (props.selectedLink === "fleet update") {
    content = <h1>Update Vehicle</h1>
  } else if (props.selectedLink === "fleet delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    content = <h1>No content selected.</h1>
    title = "";
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