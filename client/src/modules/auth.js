import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createSaga from "../lib/createSaga";

const initialState = {
  register: {
    name: "",
    password: "",
    passwordCheck: ""
  },
  login: {
    name: "",
    password: ""
  },
  auth: {
    user: null,
    error: null
  }
};

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INIT_FORM = "auth/INIT_FORM";

const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

const LOGOUT = "auth/LOGOUT";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);

export const initform = createAction(INIT_FORM, form => form);
export const logout = createAction(LOGOUT);

//======= saga함수===============================================================
export const register = createAction(REGISTER, ({ name, password }) => ({
  name,
  password
}));
export const login = createAction(LOGIN, ({ name, password }) => ({
  name,
  password
}));

const registerSaga = createSaga(authAPI.register, REGISTER);
const loginSaga = createSaga(authAPI.login, LOGIN);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

//saga end=================================================================

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value
      }
    }),
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form]
    }),
    [REGISTER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      auth: {
        ...state.auth,
        user,
        error: null
      }
    }),
    [REGISTER_FAILURE]: (state, { payload: error}) => ({
      ...state,
      auth: {
        ...state.auth,
        error,
        user: null,
      }
    }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      auth: {
        ...state.auth,
        user,
        error: null
      }
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      auth: {
        ...state.auth,
        error,
        user: null,
      }
    }),
    [LOGOUT]: () => initialState
  },
  initialState
);

export default auth;
