import { takeLatest, put, call } from "redux-saga/effects";

import { ActionType, ACTION_TYPES } from "../actions/types";
import {
  fetchQuacksSuccess,
  fetchQuacksFailure,
  displayQuacks,
} from "../actions";
import { fetchAuthorMeta } from "../utils/fetchAuthorMeta";
import { AuthorMeta } from "../types";

function* fetchQuacks({ query }) {
  const twitterApiClient = new URL(`http://localhost:3000/fetchquacks`);
  if (query) twitterApiClient.searchParams.append("query", query);

  const response = yield fetch(twitterApiClient);
  const authorMeta = yield fetchAuthorMeta();

  const jsonQuacks = yield response.text();
  const quacks = JSON.parse(jsonQuacks);

  if (quacks && quacks.data && quacks.data.length) {
    authorMeta.map((authorData: AuthorMeta, idx: number) => {
      quacks.data[idx] = {
        ...quacks.data[idx],
        authorMeta: authorData,
      };
    });
    yield put(fetchQuacksSuccess());
    yield put(displayQuacks(quacks.data));
  } else {
    yield put(fetchQuacksFailure("fail"));
  }
}

const quacksSaga = [takeLatest(ACTION_TYPES.FETCH_QUACKS, fetchQuacks)];

export default quacksSaga;
