import { QuackDataType } from "../types";

enum ACTION_TYPES {
  FETCH_QUACKS = "FETCH_QUACKS",
  FETCH_QUACKS_SUCCESS = "FETCH_QUACKS_SUCCESS",
  FETCH_QUACKS_FAILURE = "FETCH_QUACKS_FAILURE",
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE",
  DISPLAY_QUACKS = "DISPLAY_QUACKS",
  TOGGLE_OPTIONS_DRAWER = "TOGGLE_OPTIONS_DRAWER",
  TOGGLE_APP_NAV = "TOGGLE_APP_NAV",
  DISPLAY_NEWS = "DISPLAY_NEWS",
}

interface ActionType {
  type: string;
  error?: string;
  data?: QuackDataType;
  query?: string;
}

type DispatchType = (args: ActionType) => ActionType;

export { ACTION_TYPES };

export type { ActionType, DispatchType };
