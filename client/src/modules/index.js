import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from './loading';
import check, { checkSaga } from './check';
import write, { writeSaga } from './write';
import posts, {postsSaga} from'./posts';

const rootReducer = combineReducers({
  auth,
  loading,
  check,
  write,
  posts,
});

export function* rootSaga(){
  yield all([authSaga(), checkSaga(), writeSaga(), postsSaga()]);
};


export default rootReducer;
