import { createAction, handleActions } from 'redux-actions';

const USER = 'user/USER';

const initialState={
    user: null
};

export const userValidation = createAction(USER, ({user}) => ({
    user
}));

const user = handleActions(
    {
        [USER]: (state, {payload: user}) => ({
            ...state,
            user
        }),

    },
    initialState,
)

export default user;