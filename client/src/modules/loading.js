import { createAction, handleActions } from "redux-actions";

const initialState = {
  loading: false
};

const LOADING_START = "loading/LOADING_TURE";
const LOADING_FINISH = "loading/LOADING_FINISH";

//기존상태의 type필드가 존재하지않으면 새로 만들어준다.
// {
//   type: "loading/LOADING_TURE",
//   payload : type
// }
export const start = createAction(LOADING_START);
export const finish = createAction(LOADING_FINISH);

const loading = handleActions(
  {
    [LOADING_START]: state => ({
      ...state,
      loading: true
    }),
    [LOADING_FINISH]: state => ({
      ...state,
      loading: false
    })
  },
  initialState
);

export default loading;
