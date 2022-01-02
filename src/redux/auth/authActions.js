import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
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

const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

const signUpFailure = (err) => {
  return {
    type: SIGNUP_FAILURE,
    err,
  };
};
export const signIn = (users, { history }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(users.email, users.password)
      .then(() => {
        dispatch(signInSuccess());
        history.push("/");
      })
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

export const signUp = (user, { history }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: `${user.firstName[0]} ${user.lastName[0]}`,
          });
      })
      .then(() => {
        dispatch(signUpSuccess());
        history.push("/");
      })
      .catch((err) => dispatch(signUpFailure(err)));
  };
};
