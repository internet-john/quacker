interface StoreState {
  quacks: Array<Record<string, unknown>>;
  isFetching: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
}

export default StoreState;
