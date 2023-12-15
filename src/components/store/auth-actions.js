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

      console.log(response);
    }
    catch (error) {
      console.log(error);
    }


  }
}