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

      console.log("Account created");
    }
    catch (err) {
      console.log(err);
    }

  }
}