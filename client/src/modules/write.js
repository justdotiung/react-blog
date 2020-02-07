import { createAction, handleActions } from "redux-actions";

const initalState = {
  title: "",
  contents: "",
  tags: []
};

const CHANGE_FIELD = "write/CHANGE_FIELD";
const INITIALIZE = "write/INITIALIZE";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload : {key, value} }) => ({
      ...state,
      [key]: value
    }),
    [INITIALIZE]: () => initalState
  },
  initalState
);

export default write;
