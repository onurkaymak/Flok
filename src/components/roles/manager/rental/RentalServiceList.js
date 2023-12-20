const RentalServiceList = (props) => {

  const formSubmitHandler = () => {

  };


  const cancelButtonClickHandler = () => {

  };


  return (
    <form id="addRentalForm" onSubmit={formSubmitHandler} autoComplete="off">
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
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={cancelButtonClickHandler}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Check
        </button>
      </div>
    </form>
  )
};

export default RentalServiceList;