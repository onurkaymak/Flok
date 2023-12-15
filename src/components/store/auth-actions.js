import { userActions } from "./user-slice";
import { jwtDecode } from "jwt-decode";

import axios from 'axios';

export const createUser = (userInfo) => {
  return async (dispatch) => {

    const { enteredName, enteredEmail, enteredPass, selectedRole } = userInfo;

    try {
      const response = await axios.post("http://localhost:5000/accounts/register",
        {
          "email": enteredEmail,
          "userName": enteredName,
          "password": enteredPass,
          "employeeRole": selectedRole
        });

      console.log(response);
    }
    catch (err) {
      console.log(err);
    }

  }
}


export const SignInUser = (userInfo) => {
  return async (dispatch) => {

    const { enteredEmail, enteredPassword } = userInfo;

    try {
      const response = await axios.post("http://localhost:5000/accounts/signIn",
        {
          "email": enteredEmail,
          "password": enteredPassword
        });

      const userId = response.data.userId;
      const userName = response.data.userName;
      const userRole = response.data.userRole;
      const token = response.data.token;

      const decodedToken = jwtDecode(token)
      const tokenExpTime = decodedToken.exp;

      localStorage.setItem('userData', JSON.stringify({
        userId,
        userName,
        token,
        tokenExpTime,
        userRole
      }));

      dispatch(userActions.login({ userId, token, userRole }));
      dispatch(userActions.setIsLoggedIn(true));
    }
    catch (error) {
      console.log(error);
    }


  }
}


export const logOutUser = () => {
  return async (dispatch) => {
    dispatch(userActions.logout())
    dispatch(userActions.setIsLoggedIn(false));
    localStorage.removeItem('userData');



  }
}