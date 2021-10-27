import { types } from "../types/types";


export const loginAdmin = () => ({
  type: types.login,
  payload : true
})
export const loggoutAdmin = () => ({
  type: types.logout
})