import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "./authTypes";
import { initialStates } from "../initialStates";
const authReducers = (state = initialStates.authError, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      console.log("signin Success");
      return {
        ...state,
        authError: [],
      };
    case SIGNIN_FAILURE:
      console.log("signin failure");
      return {
        ...state,
        authError: "SignIn Failure",
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return {
        ...state,
        authError: [],
      };
    case SIGNOUT_FAILURE:
      console.log("signout failure");
      return {
        ...state,
        authError: "Signout failure",
      };
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: [],
      };
    case SIGNUP_FAILURE:
      console.log("signup failure");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};
export default authReducers;
