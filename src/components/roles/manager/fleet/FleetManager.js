import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import VehicleList from "./VehicleList";
import { fetchVehicles, addVehicle, resetVehiclesList } from '../../../store/fleet-actions';
import classes from './FleetManager.module.css';
import AddVehicleForm from './AddVehicleForm';


const FleetManager = (props = null) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const vehicles = useSelector(state => state.fleet.vehicles);
  const selectedVehiclesRef = useRef();


  const selectedVehicleHandler = (selectedVehicles) => {
    selectedVehiclesRef.current = selectedVehicles;
  };


  const fetcher = useCallback(async () => {
    dispatch(resetVehiclesList());
    dispatch(fetchVehicles({ token }));
  }, [dispatch, token])


  const addVehicleFormHandler = (vehicleInfo) => {
    dispatch(addVehicle(vehicleInfo, token));
    props.setSelectedLink("fleet search");
  };

  const formCancelButtonHandler = () => {
    props.setSelectedLink(null);
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
    content = <h1>Update Vehicle</h1>
  } else if (props.selectedLink === "fleet delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    title = <h1 className={classes.title}>Vehicle List</h1>
    content = <VehicleList vehicles={vehicles} selectedVehicleHandler={selectedVehicleHandler} />
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