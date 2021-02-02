import { QuackDataType } from "../types";

interface StoreState {
  isOptionsDrawerVisible: boolean;
  quacks: QuackDataType | [];
  isFetching: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
}

export default StoreState;
