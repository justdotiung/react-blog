import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createSaga from "../lib/createSaga";
import * as postsAPI from "../lib/api/posts";

const initalState = {
  title: "",
  contents: "",
  tags: [],
  write: {
    post: null,
    postError: null
  },
  updatePostId: null
};

const CHANGE_FIELD = "write/CHANGE_FIELD";
const INITIALIZE = "write/INITIALIZE";

const WRITE_POST = "write/WRITE_POST";
const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS";
const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE";

const WRITE_UPDATE_POST = "write/WRITE_UPADTE_POST";

const UPDATE_POST = "write/UPDATE_POST";
const UPDATE_POST_SUCCESS = "write/UPDATE_POST_SUCCESS";
const UPDATE_POST_FAILURE = "write/UPDATE_POST_FAILURE";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const writePost = createAction(
  WRITE_POST,
  ({ title, contents, tags }) => ({
    title,
    contents,
    tags
  })
);
export const writeUpdatePost = createAction(WRITE_UPDATE_POST, post => post);
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, contents, tags }) => ({
    id,
    title,
    contents,
    tags
  })
);

const writePostSaga = createSaga(postsAPI.write, WRITE_POST);
const updatePostSaga = createSaga(postsAPI.update, UPDATE_POST);


export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}
 
const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    }),
    [INITIALIZE]: () => initalState,
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      write: {
        ...state.write,
        post,
        postError: null
      }
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      write: {
        ...state.write,
        post: null,
        postError
      }
    }),
    [WRITE_UPDATE_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      contents: post.contents,
      tags: post.tags,
      updatePostId: post._id
    }),
    [UPDATE_POST_SUCCESS]: (state, {payload: post}) => ({
      ...state,
      write:{
        ...state,
        post,
        postError: null,
      }
    }),
    [UPDATE_POST_FAILURE]: (state, {payload: postError}) => ({
      ...state,
      write: {
        post: null,
        postError,
      }
    })
  },
  initalState
);

export default write;
