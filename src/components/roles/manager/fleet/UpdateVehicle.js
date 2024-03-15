import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UpdateVehicle = (props) => {
  const selectedVehicle = useSelector(state => state.fleet.selectedVehicles);
  const vehiclesList = useSelector(state => state.fleet.vehicles);

  const [updateVehicleInfo, setUpdateVehicleInfo] = useState({});


  useEffect(() => {
    const found = vehiclesList.find((vehicle) => vehicle.id === selectedVehicle[0]);
    if (found !== null) {
      setUpdateVehicleInfo(found);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelButtonClickHandler = () => {
    props.formCancelButtonHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const vin = event.target[0].value;
    const make = event.target[1].value;
    const model = event.target[2].value;
    const color = event.target[3].value;
    const mileage = event.target[4].value;
    const vehicleClass = event.target[5].value;
    const classCode = event.target[6].value;
    const state = event.target[7].value;
    const licensePlate = event.target[8].value;
    const isRented = event.target[9].checked;
    const inProduction = event.target[10].checked;

    const vehicleInfo = { id: selectedVehicle[0], vin, make, model, color, mileage, vehicleClass, classCode, state, licensePlate, isRented, inProduction };

    props.updateVehicleFormHandler(vehicleInfo);
  };

  return (
    <form id="addVehicleForm" onSubmit={formSubmitHandler}>
      <div className="space-y-12">
        {/* //First Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">

            <div className="sm:col-span-2">
              <label htmlFor="VIN" className="block text-sm font-medium leading-6 text-gray-900">
                VIN
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">VIN:</span>
                  <input
                    defaultValue={updateVehicleInfo.vin}
                    type="text"
                    name="vin"
                    id="vin"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="make" className="block text-sm font-medium leading-6 text-gray-900">
                Make
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Make:</span>
                  <input
                    defaultValue={updateVehicleInfo.make}
                    type="text"
                    name="make"
                    id="make"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                Model
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Model:</span>
                  <input
                    defaultValue={updateVehicleInfo.model}
                    type="text"
                    name="model"
                    id="model"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                Color
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Color:</span>
                  <input
                    defaultValue={updateVehicleInfo.color}
                    type="text"
                    name="color"
                    id="color"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="mileage" className="block text-sm font-medium leading-6 text-gray-900">
                Mileage
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Mileage:</span>
                  <input
                    defaultValue={updateVehicleInfo.mileage}
                    type="text"
                    name="mileage"
                    id="mileage"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* /// Second Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">

            <div className="sm:col-span-2">
              <label htmlFor="vehicleclass" className="block text-sm font-medium leading-6 text-gray-900">
                Vehicle Class
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Vehicle Class:</span>
                  <input
                    defaultValue={updateVehicleInfo.vehicleClass}
                    type="text"
                    name="vehicleclass"
                    id="vehicleclass"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="classCode" className="block text-sm font-medium leading-6 text-gray-900">
                Class Code
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Class Code:</span>
                  <input
                    defaultValue={updateVehicleInfo.classCode}
                    type="text"
                    name="classCode"
                    id="classCode"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
                <select
                  defaultValue={updateVehicleInfo.state}
                  id="state"
                  name="state"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>AL</option>
                  <option>AK</option>
                  <option>AS</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>DC</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>GU</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>MP</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>PR</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>VI</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="licensePlate" className="block text-sm font-medium leading-6 text-gray-900">
                License Plate
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">License Plate:</span>
                  <input
                    defaultValue={updateVehicleInfo.licensePlate}
                    type="text"
                    name="licensePlate"
                    id="licensePlate"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* // Third Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <legend className="text-sm font-semibold leading-6 text-gray-900">Rent Status</legend>
            <div className="mt-6 space-y-6">

              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="isRented"
                    name="isRented"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="isRented" className="font-medium text-gray-900">
                    Is Booked
                  </label>
                  <p className="text-gray-500">Select this only if the vehicle is currently rented.</p>
                </div>
              </div>

              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="inProduction"
                    name="inProduction"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="inProduction" className="font-medium text-gray-900">
                    In Production
                  </label>
                  <p className="text-gray-500">Select this only if the vehicle is currently in production.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={cancelButtonClickHandler}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Vehicle
        </button>
      </div>
    </form>
  )
};

export default UpdateVehicle;