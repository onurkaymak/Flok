import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import fleetReducer from './fleet-slice';
import rentalReducer from './rental-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    fleet: fleetReducer,
    rental: rentalReducer
  }
});

export default store;