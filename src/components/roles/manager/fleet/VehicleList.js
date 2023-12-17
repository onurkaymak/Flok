import Vehicle from "./Vehicle";

const dummyData = [
  {
    vehicleId: "1",
    make: "Nissan",
    model: "Frontier",
    vin: "12345678",
    mileage: "550",
    isRented: false,
    inProduction: false
  },
  {
    vehicleId: "2",
    make: "Toyota",
    model: "Camry",
    vin: "87654321",
    mileage: "867",
    isRented: false,
    inProduction: false
  }
]



const VehicleList = () => {



  return (
    <div>
      {dummyData.map(vehicle =>
        <Vehicle
          key={vehicle.vehicleId}
          id={vehicle.vehicleId}
          make={vehicle.make}
          model={vehicle.make}
          vin={vehicle.vin}
          mileage={vehicle.mileage}
          isRented={vehicle.isRented}
          inProduction={vehicle.inProduction}
        />
      )}
    </div>
  )
};

export default VehicleList;