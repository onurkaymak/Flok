import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import fleetReducer from './fleet-slice';
import rentalReducer from './rental-slice';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    fleet: fleetReducer,
    rental: rentalReducer,
    ui: uiReducer
  }
});

export default store;