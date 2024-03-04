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

  const selectedVehicleHandler = (event) => {
    console.log(event);
  };


  return (
    <React.Fragment>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          checkboxSelection
          rows={props.vehicles}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          pageSizeOptions={[5, 15, 20]}
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            }
          }}
          onRowSelectionModelChange={selectedVehicleHandler}
        />
      </div>
    </React.Fragment>
  )
};

export default VehicleList;