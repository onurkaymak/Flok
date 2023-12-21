import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'vin', headerName: 'VIN', width: 90 },
  { field: 'make', headerName: 'Make', width: 90 },
  { field: 'model', headerName: 'Model', width: 90 },
  { field: 'color', headerName: 'Color', width: 90 },
  { field: 'mileage', headerName: 'Mileage', type: 'number', width: 70 },
  { field: 'vehicleClass', headerName: 'Class', width: 110 },
  { field: 'classCode', headerName: 'Class Code', width: 90 },
  { field: 'state', headerName: 'State', width: 50 },
  { field: 'licensePlate', headerName: 'License Plate', width: 100 },
  { field: 'isRented', headerName: 'Rented', width: 70 },
  { field: 'inProduction', headerName: 'Production', width: 80 },
];

const VehicleList = (props) => {

  return (
    <React.Fragment>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          rows={props.fetchedVehicles}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>

      {/* {props.fetchedVehicles.map(vehicle =>
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
      )} */}
    </React.Fragment>
  )
};

export default VehicleList;