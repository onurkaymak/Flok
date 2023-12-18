import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user-slice';
import fleetReducer from './fleet-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    fleet: fleetReducer
  }
});

export default store;