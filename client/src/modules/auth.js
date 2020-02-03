import { createAction, handleActions } from "redux-actions";
import { put, call, takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

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
  loading: "false",
  auth: {
    user: null,
    error: null
  }
};

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INIT_FORM = "auth/INIT_FORM";

const REGISER = "auth/REGISER";
const REGISER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISER_FAILURE = "auth.REGISTER_FAILURE";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

const LOADING_TURE = "auth/LOADING_TURE";
const LOADING_FALSE = "auth/LOADING_FALSE";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);

export const initform = createAction(INIT_FORM, form => form);

//======= saga함수===============================================================
export const register = createAction(REGISER, ({ name, password }) => ({
  name,
  password
}));
export const login = createAction(LOGIN, ({ name, password }) => ({
  name,
  password
}));

function* registerSaga(action) {
  //로딩함수 추상화 데이터가 들어와서 보여줄때 비동기상태에서 값을 가져오고나서 처리를해주기위해서 loading객체 필요
  //불러와 클라이언트에서 보여줄게 아니라면 정의하지않아도 상관없다.
  yield put({ type: LOADING_TURE });

  try {
    const response = yield call(authAPI.register, action.payload);
    console.log(response.data);
    yield put({
      type: REGISER_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: REGISER_FAILURE,
      error: true,
      payload: e
    });
  }
  yield put({ type: LOADING_FALSE });
}

function* loginSaga(action) {
  try {
    const user = yield call(authAPI.login, action.payload);
    yield put({
      type: LOGIN_SUCCESS,
      payload: user.data
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e,
      error: true
    });
  }
}

export function* authSaga() {
  yield takeLatest(REGISER, registerSaga);
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
    [LOADING_FALSE]: state => ({
      ...state,
      loading: false
    }),
    [LOADING_TURE]: state => ({
      ...state,
      loading: true
    }),
    [REGISER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      auth: {
        ...state.auth,
        user
      }
    }),
    [REGISER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      auth: {
        ...state.auth,
        error
      }
    }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      auth: {
        ...state.auth,
        user
      }
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      auth: {
        ...state.auth,
        error
      }
    })
  },
  initialState
);

export default auth;
