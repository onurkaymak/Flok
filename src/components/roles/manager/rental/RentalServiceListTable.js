import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { deleteRentalService } from '../../../store/rental-actions';

const columns = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'contactName', headerName: 'Contact Name', width: 130 },
  { field: 'contactNum', headerName: 'Contact Num', width: 150 },
  { field: 'pickUpTime', headerName: 'Pick-Up Time', width: 185 },
  { field: 'returnTime', headerName: 'Return Time', width: 185 },
  { field: 'make', headerName: 'Make', width: 80 },
  { field: 'model', headerName: 'Model', width: 80 },
  { field: 'vin', headerName: 'VIN', width: 90 },
  { field: 'color', headerName: 'Color', width: 65 }
];


const RentalServiceListTable = (props) => {
  const dispatch = useDispatch();
  const reservationList = useSelector(state => state.rental.rentalServices);
  const selectedVehicleId = useRef();

  const selectedVehicleHandler = (selectedRowIds) => {
    selectedVehicleId.current = selectedRowIds;
  };

  const selectedVehicleCheckHandler = async () => {
    props.formSubmitHandler({ type: null }, selectedVehicleId.current[0]);
  }

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
          onRowSelectionModelChange={selectedVehicleHandler}
        />
      </div>
      <div className="flex justify-end mt-2">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={selectedVehicleCheckHandler}
        >
          Check
        </button>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={() => dispatch(deleteRentalService(selectedVehicleId.current[0]))}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default RentalServiceListTable;