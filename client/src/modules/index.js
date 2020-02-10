import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import check, { checkSaga } from "./check";
import write, { writeSaga } from "./write";
import posts, { postsSaga } from "./posts";
import modal from "./modal";
import post, { postSaga } from "./post";
const rootReducer = combineReducers({
  auth,
  loading,
  check,
  write,
  posts,
  modal,
  post
});

export function* rootSaga() {
  yield all([authSaga(), checkSaga(), writeSaga(), postsSaga(), postSaga()]);
}

export default rootReducer;
