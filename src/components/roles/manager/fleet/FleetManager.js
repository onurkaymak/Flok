import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import SearchResult from "./SearchResult";
import { fetchVehicles } from '../../../store/fleet-actions';

const FleetManager = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  const fetcher = useCallback(async () => {
    dispatch(fetchVehicles({ token }))
  }, [dispatch, token])




  let content;

  if (props.onLinkSelection === "fleet search") {
    content = <SearchResult />
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