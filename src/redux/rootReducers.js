import { combineReducers } from "redux";
import projectReducer from "./project/projectReducers";
import { firestoreReducer } from "redux-firestore";
const rootReducers = combineReducers({
  projects: projectReducer,
  firestore: firestoreReducer,
});

export default rootReducers;
