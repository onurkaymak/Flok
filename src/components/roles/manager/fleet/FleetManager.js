import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import SearchResult from "./SearchResult";
import { fetchVehicles, resetVehiclesList } from '../../../store/fleet-actions';


const FleetManager = (props = null) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const vehicles = useSelector(state => state.fleet.vehicles);

  const fetcher = useCallback(async () => {
    dispatch(resetVehiclesList());
    dispatch(fetchVehicles({ token }));
  }, [dispatch, token])

  useEffect(() => {
    if (props.onLinkSelection === "fleet search") {
      fetcher()
    }
  }, [fetcher, props.onLinkSelection])


  let content;

  if (props.onLinkSelection === "fleet search") {
    content = <SearchResult fetchedVehicles={vehicles} />
  } else if (props.onLinkSelection === "fleet add") {
    content = <h1>Add Vehicle</h1>
  } else if (props.onLinkSelection === "fleet update") {
    content = <h1>Update Vehicle</h1>
  } else if (props.onLinkSelection === "fleet delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    content = <h1>No content selected.</h1>
  }


  return (
    <div>
      {content}
    </div>
  )
};

export default FleetManager;