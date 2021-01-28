import { QuackDataType } from "../types";

interface StoreState {
  quacks: QuackDataType;
  isFetching: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
}

export default StoreState;
