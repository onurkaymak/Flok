import VehicleList from "./VehicleList";

const SearchResult = (props) => {

  return (
    <VehicleList fetchedVehicles={props.fetchedVehicles} />
  )
};

export default SearchResult;