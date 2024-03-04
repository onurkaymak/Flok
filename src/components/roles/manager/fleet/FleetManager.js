import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import VehicleList from "./VehicleList";
import { fetchVehicles, addVehicle, resetVehiclesList } from '../../../store/fleet-actions';
import classes from './FleetManager.module.css';
import AddVehicleForm from './AddVehicleForm';
import { uiActions } from "../../../store/ui-slice";


const FleetManager = (props = null) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const vehicles = useSelector(state => state.fleet.vehicles);
  const selectedVehicles = useSelector(state => state.fleet.selectedVehicles);

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

  useEffect(() => {
    if (props.selectedLink === "fleet update" && selectedVehicles === null) {
      dispatch(uiActions.showNotification({
        title: "Test",
        message: "Test error"
      }));
      return
    }
  }, [selectedVehicles, dispatch, props.selectedLink])


  if (props.selectedLink === "fleet add") {
    title = <h1 className={classes.title}>Add Vehicle</h1>
    content = <AddVehicleForm addVehicleFormHandler={addVehicleFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  } else if (props.selectedLink === "fleet update" && selectedVehicles !== null) {
    content = <h1>Update Vehicle</h1>
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