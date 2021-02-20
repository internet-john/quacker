import { all } from "redux-saga/effects";

import newsSaga from "./news";

function* rootSaga() {
  yield all([...newsSaga]);
}

export default rootSaga;
