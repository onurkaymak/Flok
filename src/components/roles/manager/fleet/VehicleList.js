

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
      <ul>
        {dummyData.map(vehicle =>
          <div>
            <li>{vehicle.vehicleId}</li>
            <li>{vehicle.make}</li>
            <li>{vehicle.model}</li>
            <li>{vehicle.vin}</li>
            <li>{vehicle.mileage}</li>
            <li>{vehicle.isRented}</li>
            <li>{vehicle.inProduction}</li>
          </div>
        )}
      </ul>
    </div>
  )
};

export default VehicleList;