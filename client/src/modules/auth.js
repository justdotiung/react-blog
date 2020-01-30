import { createAction, handleActions } from "redux-actions";

const initialState = {
  login: {
    name: "",
    password: ""
  }
};

const CHANGE_FIELD = "auth/CHANGE_FIELD";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value
      }
    })
  },

  initialState
);

export default auth;
