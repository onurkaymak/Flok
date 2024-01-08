import { useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from './store/user-slice';
import { logOutUser } from './store/auth-actions';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

import classes from './App.module.css';
import Notification from './UI/Notification';

export let logoutTimer;

export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration
}


const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const ui = useSelector(state => state.ui.notification);

  const logOutHandler = useCallback(() => {
    dispatch(logOutUser());
    clearTimeout(logoutTimer);
  }, [dispatch]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));



    if (storedData && storedData.token && new Date(storedData.tokenExpTime) > new Date()) {
      const userId = storedData.userId;
      const token = storedData.token;
      const tokenExpTime = storedData.tokenExpTime;
      const userRole = storedData.userRole;

      dispatch(userActions.login({ userId, token, tokenExpTime, userRole }));
      dispatch(userActions.setIsLoggedIn(true));

      const remainingTime = calculateRemainingTime(tokenExpTime);
      logoutTimer = setTimeout(() => logOutHandler(), remainingTime);
    }
    else {
      logOutHandler();
    }
  }, [dispatch, logOutHandler]);

  return (
    <div className={classes.app}>
      {ui && <Notification />}
      <Routes>
        {!isLoggedIn && (<Route path='/' element={<Home />} />)}
        {isLoggedIn && (<Route path='/' element={<Navigate to={'/profile'} />} />)}
        {isLoggedIn && (<Route path='/profile' element={<Profile />} />)}
        {!isLoggedIn && (<Route path='/profile' element={<Auth />} />)}
      </Routes>
    </div>
  );
}

export default App;