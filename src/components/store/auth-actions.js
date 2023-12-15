import { userActions } from "./user-slice";

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

      localStorage.setItem('userData', JSON.stringify({
        userId,
        userName,
        token,
      }));

      dispatch(userActions.login({ userId, token, userRole }));
      dispatch(userActions.setIsLoggedIn(true));
    }
    catch (error) {
      console.log(error);
    }


  }
}