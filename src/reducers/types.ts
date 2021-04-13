import { QuackDataType, NewsDataType } from "../types";

interface StoreState {
  isOptionsDrawerVisible: boolean;
  isAppNavVisible: boolean;
  quacks: QuackDataType | [];
  quacksNextToken: string;
  news: NewsDataType | [];
  newsCategory: string;
  userInputSearch: string;
  userSearchCategory: string;
  isLoading: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
  newsFetched: boolean;
  newsDisplayed: boolean;
  flushExistingFeedContent: boolean;
}

export default StoreState;
