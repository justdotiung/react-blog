import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from './loading';
import check, { checkSaga } from './check';

const rootReducer = combineReducers({
  auth,
  loading,
  check,
});

export function* rootSaga(){
  yield all([authSaga(), checkSaga()]);
};


export default rootReducer;
