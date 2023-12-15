import { userActions } from "./user-slice";

import axios from 'axios';

export const createUser = (userInfo) => {
  return async (dispatch) => {

    const { name, email, password, employeeRole } = userInfo;


  }
}