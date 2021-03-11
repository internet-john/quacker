import { all } from "redux-saga/effects";

import quacksSaga from "./quacks";
import newsSaga from "./news";

function* rootSaga() {
  yield all([...quacksSaga, ...newsSaga]);
}

export default rootSaga;
