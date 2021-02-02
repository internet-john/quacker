import { QuackDataType } from "../types";

interface StoreState {
  isOptionsDrawerVisible: boolean;
  isAppNavVisible: boolean;
  quacks: QuackDataType | [];
  isFetching: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
}

export default StoreState;
