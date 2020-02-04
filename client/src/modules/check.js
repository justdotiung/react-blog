import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import createSaga from "../lib/createSaga";
import * as authAPI from "../lib/api/auth";

const initialState = {
  user: null,
  error: null,
};

const USER_CHECK = "check/USER_CHECK";
const USER_CHECK_SUCCESS = "check/USER_CHECK_SUCCESS";
const USER_CHECK_FAILURE = "check/USER_CHECK_FAILURE";

const USER_LOGIN = "check/USER_LOGIN"
const USER_LOGOUT = "check/USER_LOGOUT";

export const userCheck = createAction(USER_CHECK);
export const userLogin = createAction(USER_LOGIN, user => user);
export const userLogout = createAction(USER_LOGOUT);

const userCheckSaga = createSaga(authAPI.check, USER_CHECK);

function* logoutSaga() {
    try{
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    }catch(e){
        console.log(e);
    }
}


export function* checkSaga() {
  yield takeLatest(USER_CHECK, userCheckSaga);
  yield takeLatest(USER_LOGOUT, logoutSaga);
}

const check = handleActions(
  {
    [USER_CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      error: null,
    }),
    [USER_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      error
    }),
    [USER_LOGIN]: (state, { payload: user }) => ({
        ...state,
        user,
        error: null
    }),
    [USER_LOGOUT]: state => ({
        ...state,
        user: null,
        
    })
  },
  initialState
);

export default check;
