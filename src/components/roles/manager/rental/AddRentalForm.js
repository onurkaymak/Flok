


const AddRentalForm = (props) => {

  const formSubmitHandler = (event) => {
    event.preventDefault();
  }

  const cancelButtonClickHandler = () => {
    // props.addVehicleFormCancelButtonHandler();
  };

  return (
    <form id="addVehicleForm" onSubmit={formSubmitHandler} autoComplete="off">
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




          </div>
        </div>


        {/* /// Second Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">



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
          Add Vehicle
        </button>
      </div>
    </form>
  )
};

export default AddRentalForm;