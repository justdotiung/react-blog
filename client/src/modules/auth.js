import { createAction, handleActions } from "redux-actions";

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

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);

export const initform = createAction(INIT_FORM, form => form);

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
