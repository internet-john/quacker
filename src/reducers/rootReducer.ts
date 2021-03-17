import StoreState from "./types";
import { ACTION_TYPES, ActionType } from "../actions/types";

const initialState: StoreState = {
  isOptionsDrawerVisible: false,
  isAppNavVisible: false,
  quacks: [],
  news: [],
  newsCategory: "general",
  userSearchCategory: "top",
  isLoading: false,
  quacksFetched: false,
  quacksDisplayed: false,
  newsFetched: false,
  newsDisplayed: false,
  isUserInputSearch: false,
  // todo: bifurcate feeds into generated (for you on search, timeline on home tab)
  // timelineFeed: [],
  // searchFeed: [],
};

const rootReducer = (
  state: StoreState = initialState,
  action: ActionType
): StoreState => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_OPTIONS_DRAWER:
      return {
        ...state,
        isOptionsDrawerVisible: !state.isOptionsDrawerVisible,
      };
    case ACTION_TYPES.TOGGLE_APP_NAV:
      return {
        ...state,
        isAppNavVisible: !state.isAppNavVisible,
      };
    case ACTION_TYPES.FETCH_QUACKS:
      return {
        ...state,
        isLoading: !state.isLoading,
        isUserInputSearch: Boolean(action.query && action.query.length),
      };
    case ACTION_TYPES.FETCH_QUACKS_SUCCESS:
      return { ...state, isLoading: !state.isLoading };
    case ACTION_TYPES.FETCH_QUACKS_FAILURE:
      return { ...state, isLoading: !state.isLoading };
    case ACTION_TYPES.DISPLAY_QUACKS:
      return {
        ...state,
        quacks: /*[...state.quacks, action.data],*/ action.data,
        isLoading: !state.isLoading,
        quacksFetched: !state.quacksFetched,
        quacksDisplayed: !state.quacksDisplayed,
      };
    case ACTION_TYPES.FETCH_NEWS:
      return {
        ...state,
        isLoading: !state.isLoading,
        newsCategory: action.category,
      };
    case ACTION_TYPES.FETCH_NEWS_SUCCESS:
      return { ...state, isLoading: !state.isLoading };
    case ACTION_TYPES.FETCH_NEWS_FAILURE:
      return { ...state, isLoading: !state.isLoading };
    case ACTION_TYPES.DISPLAY_NEWS:
      return {
        ...state,
        news: [...action.data],
        isLoading: !state.isLoading,
        newsFetched: !state.newsFetched,
        newsDisplayed: !state.newsDisplayed,
      };
    default:
      return state;
  }
};

export default rootReducer;
