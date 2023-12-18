import Vehicle from "./Vehicle";


const VehicleList = (props) => {


  return (
    <div>
      <h1>Fleet Inventory</h1>

      {props.fetchedVehicles.map(vehicle =>
        <Vehicle
          key={vehicle.vehicleId}
          vehicleId={vehicle.vehicleId}
          vin={vehicle.vin}
          make={vehicle.make}
          model={vehicle.model}
          mileage={vehicle.mileage}
          isRented={vehicle.isRented}
          inProduction={vehicle.inProduction}
        />
      )}
    </div>
  )
};

export default VehicleList;