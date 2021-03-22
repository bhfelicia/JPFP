//import createStore and applyMiddleware from redux
import { createStore, applyMiddleware } from "redux";
//import loggingMiddleware from redux-logger
import loggingMiddleware from "redux-logger";
//import thunk from redux-thunk
import thunk from "redux-thunk";
//import combined reducer
import bigReducer from "./reducers";

//createStore by passing in bigReducer, and applyMiddleware invoked with thunk and loggingMiddeware passed in as arguments
//export default store created

export default createStore(
  bigReducer,
  applyMiddleware(thunk, loggingMiddleware)
);
