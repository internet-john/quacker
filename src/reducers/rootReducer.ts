import { ACTION_TYPES } from "../actions";
import StoreState from "./types";

const initialState: StoreState = {
  quacks: [],
  isFetching: false,
  quacksFetched: false,
  quacksDisplayed: false,
};

const rootReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
