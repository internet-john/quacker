import { QuackDataType, NewsDataType } from "../types";

interface StoreState {
  isOptionsDrawerVisible: boolean;
  isAppNavVisible: boolean;
  quacks: QuackDataType | [];
  news: NewsDataType | [];
  newsCategory: string;
  isLoading: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
  newsFetched: boolean;
  newsDisplayed: boolean;
}

export default StoreState;
