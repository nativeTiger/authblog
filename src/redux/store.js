import { applyMiddleware, createStore, compose } from "redux";
import rootReducers from "./rootReducers";
//import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
