import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import user from "./user";
import auth, { authSaga } from "./auth";

const rootReducer = combineReducers({
  user,
  auth
});

export function* rootSaga() {
  yield all([authSaga()]);
   
} 


export default rootReducer;
