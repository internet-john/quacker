import { takeLatest, put, call } from "redux-saga/effects";

import { ActionType, ACTION_TYPES } from "../actions/types";
import { fetchNewsSuccess, fetchNewsFailure, displayNews } from "../actions";

function* fetchNews({ category }: ActionType = action.category) {
  const apiKey = process.env.NEWS_API_KEY;
  let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`;

  if (category === "covid19")
    newsApiUrl = `https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`;
  else if (category === "trending")
    newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`;

  const response = yield fetch(newsApiUrl);
  const news = yield response.json();

  if (news && news.status === "ok") {
    yield put(fetchNewsSuccess());
    yield put(displayNews(news.articles));
  } else {
    yield put(fetchNewsFailure("fail"));
  }
}

const newsSaga = [takeLatest(ACTION_TYPES.FETCH_NEWS, fetchNews)];

export default newsSaga;
