import React from "react";
import { DataGrid } from '@mui/x-data-grid';




const columns = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'contactName', headerName: 'Contact Name', width: 130 },
  { field: 'pickUpTime', headerName: 'Pick-Up Time', width: 180 },
  { field: 'color', headerName: 'Color', width: 90 },
  { field: 'mileage', headerName: 'Mileage', type: 'number', width: 70 },
  { field: 'vehicleClass', headerName: 'Class', width: 110 },
  { field: 'classCode', headerName: 'Class Code', width: 90 },
  { field: 'state', headerName: 'State', width: 50 },
  { field: 'licensePlate', headerName: 'License Plate', width: 100 },
  { field: 'isRented', headerName: 'Rented', width: 70 },
  { field: 'inProduction', headerName: 'Production', width: 80 },
];


const RentalServiceListTable = (props) => {






  return (
    <React.Fragment>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          rows={props.fetchedRentalServiceList}
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
    </React.Fragment>
  );
};

export default RentalServiceListTable;