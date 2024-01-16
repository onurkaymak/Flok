import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";


const columns = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'contactName', headerName: 'Contact Name', width: 130 },
  { field: 'contactNum', headerName: 'Contact Num', width: 150 },
  { field: 'pickUpTime', headerName: 'Pick-Up Time', width: 185 },
  { field: 'returnTime', headerName: 'Return Time', width: 185 },
  { field: 'make', headerName: 'Make', width: 80 },
  { field: 'model', headerName: 'Model', width: 80 },
  { field: 'vin', headerName: 'VIN', width: 90 },
  { field: 'color', headerName: 'Color', width: 65 },
];


const RentalServiceListTable = (props) => {

  const reservationList = useSelector(state => state.rental.rentalServices);




  return (
    <React.Fragment>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          sx={{ ":hover": { cursor: "pointer" } }}
          rows={reservationList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
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