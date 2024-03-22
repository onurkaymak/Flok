import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVehicles } from '../../../store/fleet-actions';

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
  const dispatch = useDispatch();
  const selectedVehiclesRef = useRef();

  const selectedVehicles = useSelector(state => state.fleet.selectedVehicles);

  const [selectedVehiclesForGrid, setSelectedVehiclesForGrid] = useState();


  const selectedVehicleHandler = (selectedVehiclesId) => {
    selectedVehiclesRef.current = selectedVehiclesId;
    dispatch(setSelectedVehicles(selectedVehiclesRef));
  };

  useEffect(() => {
    setSelectedVehiclesForGrid(selectedVehicles)
  }, [selectedVehicles])


  return (
    <React.Fragment>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          rowSelectionModel={selectedVehiclesForGrid}
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
          onRowSelectionModelChange={(selectedVehiclesId) => selectedVehicleHandler(selectedVehiclesId)}
        />
      </div>
      <div className="flex justify-end mt-2 bg-red w-full">
        <button
          onClick={props.deleteModalHandler}
          type="button"
          className={"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto opacity-0 transition ease-in-out delay-75" + (selectedVehicles.length > 0 ? " opacity-100" : " opacity-0")}
        >
          Delete
        </button>
      </div>

    </React.Fragment >
  )
};

export default VehicleList;