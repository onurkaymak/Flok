import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, Fragment, useState } from 'react';
import VehicleList from "./VehicleList";
import { fetchVehicles, addVehicle, resetVehiclesList, updateVehicle } from '../../../store/fleet-actions';
import classes from './FleetManager.module.css';
import AddVehicleForm from './AddVehicleForm';
import { uiActions } from "../../../store/ui-slice";
import UpdateVehicle from './UpdateVehicle';
import { setSelectedVehicles } from '../../../store/fleet-actions';

import { Dialog, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';



const FleetManager = (props = null) => {
  const [open, setOpen] = useState(true);

  const modalCloseHandler = () => {
    setOpen(false);
  }


  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const vehicles = useSelector(state => state.fleet.vehicles);

  const fetcher = useCallback(async () => {
    dispatch(resetVehiclesList());
    dispatch(fetchVehicles({ token }));
  }, [dispatch, token])


  const addVehicleFormHandler = (vehicleInfo) => {
    dispatch(addVehicle(vehicleInfo, token));
    dispatch(uiActions.setSelectedLink("fleet search"));
  };

  const updateVehicleFormHandler = (vehicleInfo) => {
    dispatch(updateVehicle(vehicleInfo, token));
    dispatch(setSelectedVehicles({ current: [] }));
    dispatch(uiActions.setSelectedLink(null));
  }

  const formCancelButtonHandler = () => {
    dispatch(setSelectedVehicles({ current: [] }));
    dispatch(uiActions.setSelectedLink(null));
  };

  useEffect(() => {
    fetcher()
  }, [fetcher]);


  let content;
  let title;

  if (props.selectedLink === "fleet add") {
    title = <h1 className={classes.title}>Add Vehicle</h1>
    content = <AddVehicleForm addVehicleFormHandler={addVehicleFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  } else if (props.selectedLink === "fleet update") {
    title = <h1 className={classes.title}>Update Vehicle</h1>
    content = <UpdateVehicle updateVehicleFormHandler={updateVehicleFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  }
  else if (props.selectedLink === "fleet delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    title = <h1 className={classes.title}>Vehicle List</h1>
    content = <VehicleList vehicles={vehicles} />
  }

  return (
    <div className={classes.fleetManagerContainer}>
      <div className={classes.titleContainer}>
        {title}
      </div>

      <div className={classes.contentContainer}>
        {content}
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={modalCloseHandler}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InformationCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Delete Vehilce
                        </Dialog.Title>
                        <div className="mt-4">
                          <div className={classes.reservationInfoModalContainer}>
                            <div className="border-t border-gray-600">
                              <dl className="divide-y divide-gray-100">

                                <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
                                  <p>Are you sure you want to delete this vehicle from inventory?</p>
                                </div>

                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => modalCloseHandler()}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  )
};

export default FleetManager;