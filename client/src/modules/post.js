import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../lib/createSaga';
import * as postsAPI from '../lib/api/posts';

const initialState = {
    post: null,
    postError: null,
};

const GET_POST = "post/GET_POST";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_FAILURE = "post/GET_POST_FAILURE";

const INIT_POST = "post/INIT_POST";

export const getPost = createAction(GET_POST, id => id); 
/*dispatch 
2번재 매개변수가 인자라라면 
{
  type: GET_POST,
  payload: id    
}
를 반환
*/

export const initPost = createAction(INIT_POST);

const getPostSaga = createSaga(postsAPI.getPostById, GET_POST);
export function* postSaga() {
    yield takeLatest(GET_POST, getPostSaga);
};

const post = handleActions(
    {
        [GET_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post,
            postError:null,
        }),
        [GET_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            post: null,
            postError,
        }),
        [INIT_POST]: () => initialState,
    },
    initialState,
);

export default post;