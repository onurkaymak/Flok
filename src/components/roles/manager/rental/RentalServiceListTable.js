import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { rentalActions } from "../../../store/rental-slice";

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
  const reservationList = useSelector(state => state.rental.rentalServices);
  const selectedRentalServiceById = useSelector(state => state.rental.selectedRentalServiceById);
  const dispatch = useDispatch();

  const selectedVehicleHandler = (selectedRowIds) => {
    dispatch(rentalActions.setSelectedRentalService(selectedRowIds));
  };

  const selectedVehicleCheckHandler = () => {
    if (selectedRentalServiceById === undefined || selectedRentalServiceById.length === 0) {
      dispatch(uiActions.showNotification({
        title: "Reservation Check Error",
        message: "Please select a reservation."
      }));
      return
    } else if (selectedRentalServiceById.length > 1) {
      dispatch(uiActions.showNotification({
        title: "Reservation Check Error",
        message: "You can only select one reservation at a time."
      }));
      return
    }
    props.formSubmitHandler({ type: null }, selectedRentalServiceById[0]);
  }

  const selectedVehicleDeleteHandler = () => {
    if (selectedRentalServiceById === undefined || selectedRentalServiceById.length === 0) {
      dispatch(uiActions.showNotification({
        title: "Reservation Check Error",
        message: "Please select a reservation."
      }));
      return
    } else if (selectedRentalServiceById.length > 1) {
      dispatch(uiActions.showNotification({
        title: "Reservation Check Error",
        message: "You can only select one reservation at a time."
      }));
      return
    }
    props.vehicleListDeleteHandler(selectedRentalServiceById[0]);
  };

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
          onClick={selectedVehicleDeleteHandler}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default RentalServiceListTable;