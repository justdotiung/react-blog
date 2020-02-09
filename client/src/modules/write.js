import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../lib/createSaga';
import * as postsAPI from '../lib/api/posts';
 
const initalState = {
  title: "",
  contents: "",
  tags: [],
  write: {
    post: null,
    postError: null,
  }

};

const CHANGE_FIELD = "write/CHANGE_FIELD";
const INITIALIZE = "write/INITIALIZE";

const WRITE_POST = "write/WRITE_POST"
const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS"
const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE"

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const writePost = createAction(WRITE_POST, ({title, contents, tags})=>({
  title,
  contents,
  tags
}));

const writePostSaga = createSaga(postsAPI.write, WRITE_POST);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload : {key, value} }) => ({
      ...state,
      [key]: value
    }),
    [INITIALIZE]: () => initalState,
    [WRITE_POST_SUCCESS]: (state, { payload: post } ) => ({
      ...state,
      write:{
        ...state.write,
        post,
        error: null,
      }
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      write:{
        ...state.write,
        post: null,
        postError
      }
    }),
  },
  initalState
);

export default write;
