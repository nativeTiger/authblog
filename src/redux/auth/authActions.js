import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
} from "./authTypes";
const signInSuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

const signInFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};
const signOutFailure = () => {
  return {
    type: SIGNOUT_FAILURE,
  };
};
export const signIn = (users) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(users.email, users.password)
      .then(() => dispatch(signInSuccess()))
      .catch(() => dispatch(signInFailure()));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutFailure()));
  };
};
