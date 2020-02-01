import { createAction, handleActions } from "redux-actions";
import { put, call, takeLatest } from 'redux-saga/effects';
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
  }
};

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INIT_FORM = "auth/INIT_FORM";

const REGISER = 'auth/REGISER';
const REGISER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISER_FAILURE = 'auth.REGISTER_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);

export const initform = createAction(INIT_FORM, form => form);

export const register = createAction( REGISER, { name, password });

function* registerSaga(action) {
  yield put(register);
  try{
    const response = yield call(authAPI.registser, action.payload);
    yield put({
      type: REGISER_SUCCESS,
      payload: response.data,
    })

  }catch (e){
    yield put({ 
      type: REGISER_FAILURE,
      error: true,
      payload: e,
    });
  }  
}

export function* authSaga() {
  yield takeLatest(registerSaga);
}

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
    })
  },
  initialState
);

export default auth;
