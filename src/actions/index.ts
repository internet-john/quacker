import getUserTimeline from "../utils/fetch";
import { fetchAuthorMeta } from "../utils/fetchAuthorMeta";

import { ACTION_TYPES, DispatchType } from "./types";
import { QuackDataType, NewsDataType } from "../types";

const toggleOptionsDrawer = () => ({
  type: ACTION_TYPES.TOGGLE_OPTIONS_DRAWER,
});

const toggleAppNav = () => ({
  type: ACTION_TYPES.TOGGLE_APP_NAV,
});

const requestQuacks = () => ({
  type: ACTION_TYPES.FETCH_QUACKS,
});

const requestQuacksSuccess = () => ({
  type: ACTION_TYPES.FETCH_QUACKS_SUCCESS,
});

const requestQuacksFailure = (error: string) => ({
  type: ACTION_TYPES.FETCH_QUACKS_FAILURE,
  error,
});

const displayQuacks = (quacks: QuackDataType) => ({
  type: ACTION_TYPES.DISPLAY_QUACKS,
  data: quacks,
});

const fetchNews = (category) => ({
  type: ACTION_TYPES.FETCH_NEWS,
  category,
});

const fetchNewsSuccess = () => ({
  type: ACTION_TYPES.FETCH_NEWS_SUCCESS,
});

const fetchNewsFailure = (error: string) => ({
  type: ACTION_TYPES.FETCH_NEWS_FAILURE,
  error,
});

const displayNews = (news: NewsDataType) => ({
  type: ACTION_TYPES.DISPLAY_NEWS,
  data: news,
});

const fetchQuacks = () => {
  return (dispatch: DispatchType) => {
    setTimeout(async () => {
      dispatch(requestQuacks());
      const quacksData = await getUserTimeline();
      const authorMeta = await fetchAuthorMeta();

      authorMeta.map((authorData, idx) => {
        quacksData.data[idx] = {
          ...quacksData.data[idx],
          authorMeta: authorData,
        };
      });

      if (quacksData) {
        dispatch(requestQuacksSuccess());
        dispatch(displayQuacks(quacksData));
      } else {
        dispatch(requestQuacksFailure("Fetch failed."));
      }
    }, 500);
  };
};

export {
  ACTION_TYPES,
  toggleOptionsDrawer,
  toggleAppNav,
  fetchQuacks,
  fetchNews,
  fetchNewsSuccess,
  fetchNewsFailure,
  displayNews,
};
