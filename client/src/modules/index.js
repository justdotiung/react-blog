import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from './loading';
import check, { checkSaga } from './check';
import write from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  check,
  write
});

export function* rootSaga(){
  yield all([authSaga(), checkSaga()]);
};


export default rootReducer;
