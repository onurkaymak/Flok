import { userActions } from "./user-slice";

import axios from 'axios';

export const createUser = (userInfo) => {
  return async (dispatch) => {

    const { enteredName, enteredEmail, enteredPass, selectedRole } = userInfo;

    console.log(`${enteredName} ${enteredEmail} ${enteredPass} ${selectedRole}`);

  }
}