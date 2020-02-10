import { createAction, handleActions } from 'redux-actions';

const initialState = {
    toggle : false,
};

const TOGGLE_CHANGE = 'toggle/TOGGLE_CHANGE';

export const toggleChange = createAction(TOGGLE_CHANGE);

const modal = handleActions(
    {
        [TOGGLE_CHANGE]: (state) => ({
            ...state,
            toggle:!state.toggle,
        }),
    },
    initialState
);

export default modal;

