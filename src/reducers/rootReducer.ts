import StoreState from "./types";
import { ACTION_TYPES, ActionType } from "../actions/types";

const initialState: StoreState = {
  isOptionsDrawerVisible: false,
  quacks: [],
  isFetching: false,
  quacksFetched: false,
  quacksDisplayed: false,
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
    case ACTION_TYPES.REQUEST_QUACKS:
      return { ...state, isFetching: !state.isFetching };
    case ACTION_TYPES.REQUEST_QUACKS_SUCCESS:
      return { ...state, isFetching: !state.isFetching };
    case ACTION_TYPES.REQUEST_QUACKS_FAILURE:
      return { ...state, isFetching: !state.isFetching };
    case ACTION_TYPES.DISPLAY_QUACKS:
      return {
        ...state,
        quacks: [...state.quacks, action.data],
        isFetching: !state.isFetching,
        quacksFetched: !state.quacksFetched,
        quacksDisplayed: !state.quacksDisplayed,
      };
    default:
      return state;
  }
};

export default rootReducer;
