import { combineReducers } from "redux";
import projectReducer from "./project/projectReducers";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducers from "./auth/authReducers";
const rootReducers = combineReducers({
  auth: authReducers,
  projects: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducers;
