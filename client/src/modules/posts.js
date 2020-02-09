import { createAction, handleActions } from "redux-actions";
import * as postsAPI from '../lib/api/posts';
import createSaga from "../lib/createSaga";
import {takeLatest} from 'redux-saga/effects';

const GET_LIST = 'posts/GET_LIST';
const GET_LIST_SUCCESS ='posts/GET_LIST_SUCCESS';
const GET_LIST_FAILURE = 'posts/GET_LIST_FAILURE';

const initialState = {
    posts: [],
    error: null,
}
export const getList = createAction(GET_LIST);

const getListSaga = createSaga(postsAPI.getList, GET_LIST);

export function* postsSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}

const posts = handleActions(
    {
        [GET_LIST_SUCCESS] : (state, {payload : posts}) => ({
            ...state,    
            posts,
            error:null
        }),
        [GET_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            data: null,
            error
        })
    },
    initialState,
)

export default posts;