import { useSelector, useDispatch } from "react-redux";
import classes from './RentalServiceList.module.css';
import { Fragment, useEffect, useState, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import format from 'date-fns/format';
import { fetchRentalServiceList, resetRentalServiceList, deleteRentalService } from '../../../store/rental-actions';
import RentalServiceListTable from './RentalServiceListTable';


const RentalServiceList = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [warningModal, setWarningModal] = useState(false);


  const fetchedRentalService = useSelector(state => state.rental.selectedRentalService);
  const fetchedRentalServiceList = useSelector(state => state.rental.rentalServices);

  const rentalServiceListfetcher = useCallback(async () => {
    dispatch(resetRentalServiceList());
    dispatch(fetchRentalServiceList());
  }, [dispatch])


  useEffect(() => {
    rentalServiceListfetcher()
  }, [rentalServiceListfetcher]);



  const formSubmitHandler = (event) => {
    event.preventDefault();

    const rentalServiceId = parseInt(event.target[0].value);
    const customerEmail = event.target[1].value;
    const serviceAgentId = event.target[2].value;
    const customerPhoneNum = event.target[3].value;

    const reservationInfo = { rentalServiceId, customerEmail, serviceAgentId, customerPhoneNum };

    props.searchRentalService(reservationInfo);
    document.getElementById("checkRentalServiceForm").reset();
    setOpen(true);
  };


  const deleteButtonHandler = () => {
    if (!warningModal) {
      setWarningModal(true);
    } else {
      dispatch(deleteRentalService(fetchedRentalService.rentalServiceId));
      setWarningModal(false);
      setOpen(false);
    }
  };

  const modalCloseHandler = () => {
    if (!warningModal) {
      setOpen(false);
    } else {
      setOpen(false);
      setTimeout(() => setWarningModal(false), 500);
    }
  }


  return (
    <div className={classes.rentalServiceListContainer}>
      <div className={classes.formContainer}>
        <form id="checkRentalServiceForm" onSubmit={formSubmitHandler} autoComplete="off">
          <div className="space-y-12">
            {/* //First Section */}
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">

                <div className="sm:col-span-2">
                  <label htmlFor="rentalServiceId" className="block text-sm font-medium leading-6 text-gray-900">
                    Reservation Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Reservation Number:</span>
                      <input
                        type="text"
                        name="rentalServiceId"
                        id="rentalServiceId"
                        autoComplete="off"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="customerEmail" className="block text-sm font-medium leading-6 text-gray-900">
                    Customer Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Customer Email:</span>
                      <input
                        type="email"
                        name="customerEmail"
                        id="customerEmail"
                        autoComplete="off"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="serviceAgentId" className="block text-sm font-medium leading-6 text-gray-900">
                    Service Agent ID
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Service Agent ID:</span>
                      <input
                        type="text"
                        name="serviceAgentId"
                        id="serviceAgentId"
                        autoComplete="off"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>


                <div className="sm:col-span-2">
                  <label htmlFor="customerPhoneNum" className="block text-sm font-medium leading-6 text-gray-900">
                    Customer Phone Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Customer Phone Number:</span>
                      <input
                        type="text"
                        name="customerPhoneNum"
                        id="customerPhoneNum"
                        autoComplete="off"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Check
            </button>
          </div>
        </form>
      </div>

      <div className={classes.selectedRentalServiceContainer}>
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

                    {warningModal &&
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            <InformationCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                              Cancel Reservation
                            </Dialog.Title>
                            <div className="mt-4">
                              <div className={classes.reservationInfoModalContainer}>
                                <div className="border-t border-gray-600">
                                  <dl className="divide-y divide-gray-100">

                                    <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
                                      <p>Are you sure you want to delete this reservation?</p>
                                    </div>

                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }

                    {!warningModal && <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <InformationCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Reservation Information
                          </Dialog.Title>
                          <div className="mt-4">
                            <div className={classes.reservationInfoModalContainer}>
                              <div className="border-t border-gray-600">
                                <dl className="divide-y divide-gray-100">
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Reservation No</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.rentalServiceId : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Contact Name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.customer.name : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Contact Email</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.customer.email : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Contact Number</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.customer.phoneNum : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Pick-up Date</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? format(fetchedRentalService.reservationStart, 'mm, dd, yyyy / p') : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Return Date</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? format(fetchedRentalService.reservationEnd, 'mm, dd, yyyy / p') : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Vehicle VIN</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.vehicle.vin : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Make</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.vehicle.make : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Model</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.vehicle.model : null}
                                    </dd>
                                  </div>
                                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Color</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                      {fetchedRentalService ? fetchedRentalService.vehicle.color : null}
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => deleteButtonHandler()}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                        onClick={modalCloseHandler}
                      >
                        {warningModal ? "Cancel" : "Close"}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>




      <div className={classes.allRentalServicesContainer}>
        <RentalServiceListTable fetchedRentalServiceList={fetchedRentalServiceList} />
      </div>
    </div>
  )
};

export default RentalServiceList;