import StoreState from "./types";
import {
  ACTION_TYPES,
  StatelessActionType,
  StatefulActionType,
  ActionType,
} from "../actions/types";

const initialState: StoreState = {
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
    case ACTION_TYPES.REQUEST_QUACKS:
      return { ...state, isFetching: true };
    case ACTION_TYPES.REQUEST_QUACKS_SUCCESS:
      return { ...state, isFetching: false };
    case ACTION_TYPES.REQUEST_QUACKS_FAILURE:
      return { ...state, isFetching: false };
    case ACTION_TYPES.DISPLAY_QUACKS:
      return {
        ...state,
        quacks: [...state.quacks, action.data],
        isFetching: false,
        quacksFetched: true,
        quacksDisplayed: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
