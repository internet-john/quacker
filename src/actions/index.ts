import { ACTION_TYPES, DispatchType } from "./types";
import { QuackDataType, NewsDataType } from "../types";

const toggleOptionsDrawer = () => ({
  type: ACTION_TYPES.TOGGLE_OPTIONS_DRAWER,
});

const toggleAppNav = () => ({
  type: ACTION_TYPES.TOGGLE_APP_NAV,
});

const fetchQuacks = (query) => ({
  type: ACTION_TYPES.FETCH_QUACKS,
  query,
});

const fetchQuacksSuccess = () => ({
  type: ACTION_TYPES.FETCH_QUACKS_SUCCESS,
});

const fetchQuacksFailure = (error: string) => ({
  type: ACTION_TYPES.FETCH_QUACKS_FAILURE,
  error,
});

const displayQuacks = (quacks: QuackDataType) => ({
  type: ACTION_TYPES.DISPLAY_QUACKS,
  data: quacks,
});

const fetchNews = (category: string) => ({
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

export {
  ACTION_TYPES,
  toggleOptionsDrawer,
  toggleAppNav,
  fetchQuacks,
  fetchQuacksSuccess,
  fetchQuacksFailure,
  fetchNews,
  fetchNewsSuccess,
  fetchNewsFailure,
  displayNews,
  displayQuacks,
};
