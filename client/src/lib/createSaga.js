import { put, call } from "redux-saga/effects";
import { start, finish } from "../modules/loading";

function createSaga(req, type) {

    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    //console.log(start(type))
  return function*(action) {
    //로딩함수 추상화 데이터가 들어와서 보여줄때 비동기상태에서 값을 가져오고나서 처리를해주기위해서 loading객체 필요
    //불러와 클라이언트에서 보여줄게 아니라면 정의하지않아도 상관없다.
    yield put(start());

    try {
      console.log(action.payload)
      const response = yield call(req, action.payload);
      //console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (e) { 
     // console.log(e);
      yield put({
        type: FAILURE,
        error: true,
        payload: e
      });
    }
    yield put(finish());
  };
}

export default createSaga;
